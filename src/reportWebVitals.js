// Uncomment and use these imports ever needed for performance measurement
// import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((webVitals) => {
      webVitals.getCLS?.(onPerfEntry);
      webVitals.getFID?.(onPerfEntry);
      webVitals.getFCP?.(onPerfEntry);
      webVitals.getLCP?.(onPerfEntry);
      webVitals.getTTFB?.(onPerfEntry);
    });
  }
};

export default reportWebVitals;


