
import { useEffect } from 'react';
import { enforceHTTPS, securityMonitor } from '@/utils/security';

export const useSecurity = () => {
  useEffect(() => {
    // Enforce HTTPS on component mount
    enforceHTTPS();

    // Log navigation event
    securityMonitor.logEvent({
      type: 'navigation',
      details: { 
        action: 'page_load', 
        path: window.location.pathname,
        userAgent: navigator.userAgent.substring(0, 100) // Truncate for privacy
      },
      severity: 'low'
    });

    // Add global error handler for security monitoring
    const handleError = (event: ErrorEvent) => {
      securityMonitor.logEvent({
        type: 'navigation',
        details: { 
          action: 'javascript_error',
          message: event.message,
          filename: event.filename,
          line: event.lineno
        },
        severity: 'medium'
      });
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return {
    securityMonitor
  };
};
