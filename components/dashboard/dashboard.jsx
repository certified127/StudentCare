"use client"

import { useState, useEffect } from "react"
import { FileIcon as FileHistory, Users, AlertCircle, MessageSquareText, Calendar, Clock } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Header from "./header"
import MainContent from "./main-content"

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("health-history")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationItems = [
    {
      id: "health-history",
      title: "Health History",
      icon: <FileHistory className="h-5 w-5" />,
    },
    {
      id: "doctors-directory",
      title: "Doctor's Directory",
      icon: <Users className="h-5 w-5" />,
    },
    {
      id: "emergency",
      title: "Emergency",
      icon: <AlertCircle className="h-5 w-5" />,
    },
    {
      id: "ask-carechat-ai",
      title: "Ask CareChat AI",
      icon: <MessageSquareText className="h-5 w-5" />,
    },
    {
      id: "book-appointments",
      title: "Book Appointments",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      id: "medication-reminder",
      title: "Medication Reminder",
      icon: <Clock className="h-5 w-5" />,
    },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="flex h-screen">
          <div className="w-64 border-r bg-white dark:bg-gray-900">
            <div className="p-4">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-blue-600 p-1">
                  <div className="h-6 w-6 text-white flex items-center justify-center font-bold text-sm">SC</div>
                </div>
                <span className="text-lg font-semibold">Student Care</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-16 border-b bg-white dark:bg-gray-900"></div>
            <div className="p-6">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
                <div className="space-y-4">
                  <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <Sidebar className="border-r h-screen">
          <SidebarHeader className="border-b border-border">
            <div className="flex items-center px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary p-2">
                  <div className="h-6 w-6 text-primary-foreground flex items-center justify-center font-bold text-sm">
                    SC
                  </div>
                </div>
                <span className="text-xl font-semibold">Student Care</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent className="flex-1">
            <SidebarMenu className="px-2 py-4">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id} className="mb-1">
                  <SidebarMenuButton
                    isActive={activeItem === item.id}
                    onClick={() => setActiveItem(item.id)}
                    tooltip={item.title}
                    className="w-full justify-start h-12 px-4 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-base">{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t border-border p-4">
            <div className="text-sm text-muted-foreground font-medium">Student Care v1.0</div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex-1 h-screen">
          <Header />
          <MainContent activeItem={activeItem} />
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
