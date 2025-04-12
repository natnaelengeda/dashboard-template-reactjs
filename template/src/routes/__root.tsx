import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

// React Hot Toast
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: () => (
    <div className='w-full h-full font-roboto'>
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
    </div>
  ),
})