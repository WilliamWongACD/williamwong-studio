import React from 'react';

const useIntersectionObserver = (ref, handleObserver, opts = {}) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, opts);
    observer.observe(ref.current);

    //cleanup observer
    return () => observer.disconnect();
  }, []);
};

export default useIntersectionObserver;
