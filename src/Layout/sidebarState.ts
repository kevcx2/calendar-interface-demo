import React, { useState } from 'react';
import constate from 'constate';

function useSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarContent, setSidebarContent] = useState<React.ReactNode | null>(null);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  
  return { isSidebarOpen, sidebarContent, setSidebarContent, openSidebar, closeSidebar };
}

export const [SidebarProvider, useSidebarContext] = constate(useSidebar);
