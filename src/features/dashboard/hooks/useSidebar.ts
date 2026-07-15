'use client';

import { useState, useEffect, useCallback } from 'react';

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const openSidebar = useCallback(() => {
    setIsCollapsed(false);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsCollapsed(true);
  }, []);

  return {
    isCollapsed,
    isMobile,
    toggleSidebar,
    openSidebar,
    closeSidebar,
  };
};