"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Menu, X } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [user, setUser] = useState<{ name?: string; email: string } | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
    } else {
      setUser(JSON.parse(userData))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              F
            </div>
            <span className="font-bold text-foreground">FreshGuard</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-30 w-64 border-r border-border bg-background transition-transform lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="hidden lg:flex h-16 items-center gap-2 border-b border-border px-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              F
            </div>
            <span className="font-bold text-foreground">FreshGuard</span>
          </div>

          <nav className="space-y-2 p-6">
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded-lg text-foreground hover:bg-secondary transition-colors font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/devices"
              className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary transition-colors"
            >
              Devices
            </Link>
            <Link
              href="/dashboard/analytics"
              className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary transition-colors"
            >
              Analytics
            </Link>
            <Link
              href="/dashboard/settings"
              className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary transition-colors"
            >
              Settings
            </Link>
          </nav>

          <div className="absolute bottom-6 left-6 right-6 space-y-4">
            <div className="p-4 rounded-lg bg-secondary/50 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Logged in as</p>
              <p className="text-sm font-medium text-foreground truncate">{user.email}</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="w-full justify-start bg-transparent">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
