// Router
import { createFileRoute } from '@tanstack/react-router'

// Components
import { LoginForm } from '@/components/login-form';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';



// Config
import constants from '@/config/constants';

// Icons
import { GalleryVerticalEnd } from 'lucide-react';

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div
      className='relative bg-white w-full h-full min-h-screen flex-col justify-start grid grid-cols-1 overflow-hidden'>
      <div className='z-10 absolute top-0 left-0'>
        <BackgroundGradientAnimation />
      </div>
      <div className='relative w-full h-full min-h-screen z-20 grid grid-cols-1'>
        <div className="grid min-h-svh lg:grid-cols-2">

          {/* Left Side  */}
          <div className="flex flex-col gap-4 p-6 md:p-10 bg-white">
            <div className="flex justify-center gap-2 md:justify-start">
              <a href="#" className="flex items-center gap-2 font-medium">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                {constants.name}
              </a>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="w-full max-w-xs">
                <LoginForm />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative hidden lg:block">

          </div>
        </div>

      </div>
    </div>
  );
}
