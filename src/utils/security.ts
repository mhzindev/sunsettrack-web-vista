// Security utilities for input validation and monitoring

export interface SecurityEvent {
  type: 'input_validation' | 'navigation' | 'form_submission';
  timestamp: Date;
  details: Record<string, any>;
  severity: 'low' | 'medium' | 'high';
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private maxEvents = 100; // Keep last 100 events

  logEvent(event: Omit<SecurityEvent, 'timestamp'>): void {
    const securityEvent: SecurityEvent = {
      ...event,
      timestamp: new Date()
    };

    this.events.push(securityEvent);
    
    // Keep only the last maxEvents
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // Log high severity events to console in development
    if (event.severity === 'high' && process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', securityEvent);
    }
  }

  getEvents(): SecurityEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }
}

export const securityMonitor = new SecurityMonitor();

// Input validation utilities
export const validateInput = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone: string): boolean => {
    // Brazilian phone number validation
    const phoneRegex = /^(\+55\s?)?(\(?\d{2}\)?[\s-]?)?\d{4,5}[\s-]?\d{4}$/;
    return phoneRegex.test(phone);
  },

  name: (name: string): boolean => {
    // Allow letters, spaces, hyphens, and apostrophes
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
    return nameRegex.test(name);
  },

  message: (message: string): boolean => {
    // Basic message validation - no script tags or suspicious content
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /vbscript:/i,
      /onload=/i,
      /onerror=/i,
      /onclick=/i
    ];
    
    return message.length >= 10 && 
           message.length <= 1000 && 
           !suspiciousPatterns.some(pattern => pattern.test(message));
  }
};

// Sanitize user input
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and > characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .trim();
};

// Security-enhanced localStorage wrapper
export const secureStorage = {
  setItem: (key: string, value: string): void => {
    try {
      const sanitizedKey = sanitizeInput(key);
      const sanitizedValue = sanitizeInput(value);
      localStorage.setItem(sanitizedKey, sanitizedValue);
      
      securityMonitor.logEvent({
        type: 'input_validation',
        details: { action: 'localStorage_write', key: sanitizedKey },
        severity: 'low'
      });
    } catch (error) {
      securityMonitor.logEvent({
        type: 'input_validation',
        details: { action: 'localStorage_error', error: String(error) },
        severity: 'medium'
      });
    }
  },

  getItem: (key: string): string | null => {
    try {
      const sanitizedKey = sanitizeInput(key);
      return localStorage.getItem(sanitizedKey);
    } catch (error) {
      securityMonitor.logEvent({
        type: 'input_validation',
        details: { action: 'localStorage_read_error', error: String(error) },
        severity: 'medium'
      });
      return null;
    }
  },

  removeItem: (key: string): void => {
    try {
      const sanitizedKey = sanitizeInput(key);
      localStorage.removeItem(sanitizedKey);
    } catch (error) {
      securityMonitor.logEvent({
        type: 'input_validation',
        details: { action: 'localStorage_remove_error', error: String(error) },
        severity: 'medium'
      });
    }
  }
};

// HTTPS enforcement utility
export const enforceHTTPS = (): void => {
  if (typeof window !== 'undefined' && 
      window.location.protocol === 'http:' && 
      window.location.hostname !== 'localhost' &&
      !window.location.hostname.includes('127.0.0.1')) {
    
    securityMonitor.logEvent({
      type: 'navigation',
      details: { action: 'https_redirect', from: window.location.href },
      severity: 'medium'
    });
    
    window.location.replace(window.location.href.replace('http:', 'https:'));
  }
};
