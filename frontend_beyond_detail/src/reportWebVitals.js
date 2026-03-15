const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      // getFID removed - replaced by INP in Core Web Vitals
      // TODO: Upgrade web-vitals to v3+ and add getINP(onPerfEntry)
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
