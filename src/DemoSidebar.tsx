import React, { useEffect } from 'react';
import { Sidebar } from './Layout/Sidebar';
import { useSidebarContext } from './Layout/sidebarState';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function DemoSidebar() {
  const { setSidebarContent } = useSidebarContext();

  useEffect(() => {
    setSidebarContent((
      <div>
        <Sidebar.Header>
          Example Sidebar
        </Sidebar.Header>
        <Stack sx={{ margin: '20px' }} spacing={1}>
        <Skeleton animation={false} variant="circular" width={40} height={40} />
        <Skeleton animation={false} variant="rectangular" width={'100%'} height={60} />
        {`<-- Try resizing`}
        <Skeleton animation={false} variant="rounded" width={'100%'} height={500} />
        </Stack>
      </div>
    ))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
