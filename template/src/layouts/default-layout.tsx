import { ReactNode } from "react"

// Shadcn
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

interface IDefaultLayout {
  children: ReactNode
}
export default function DefaultLayout({ children }: IDefaultLayout) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div
          className="flex flex-1 flex-col p-5">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
