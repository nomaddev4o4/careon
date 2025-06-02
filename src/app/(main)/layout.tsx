import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Activity, BarChart3, Home, Users } from "lucide-react"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="flex h-14 items-center border-b px-4">
            <span className="text-lg font-semibold">Careon</span>
            <SidebarTrigger className="ml-auto" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuButton asChild>
                <a href="/" tooltip="Home">
                  <Home />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <a href="/dashboard" tooltip="Dashboard">
                  <BarChart3 />
                  <span>Dashboard</span>
                </a>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <a href="/patients" tooltip="Patients">
                  <Users />
                  <span>Patients</span>
                </a>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <a href="/campaigns" tooltip="Campaigns">
                  <Activity />
                  <span>Campaigns</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  )
}