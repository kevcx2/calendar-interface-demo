import { entity, useEntity } from 'simpler-state'

interface SidebarState {
  isSidebarOpen: boolean;
}

interface SidebarSetters {
  setIsSidebarOpen: (isOpen: boolean) => void
}

const isOpen = entity(false)

const setters: SidebarSetters = {
  setIsSidebarOpen: (newIsOpen) => {
    console.log('setting')
    isOpen.set(() => newIsOpen)
  },
}

export const useSidebar = (): SidebarState & SidebarSetters => {
  const isSidebarOpen = useEntity(isOpen)

  return {
    isSidebarOpen,
    ...setters
  }
}
