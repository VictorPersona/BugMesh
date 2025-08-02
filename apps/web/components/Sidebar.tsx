/*
 * Filename: /home/gaurav/Projects/BugMesh/apps/web/components/Sidebar.tsx
 * Path: /home/gaurav/Projects/BugMesh/apps/web
 * Created Date: Monday, July 21st 2025, 11:55:40 am
 * Author: Gaurav Tupe
 * 
 * Copyright (c) 2025 Your Company
 */


'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../app/lib/utlis'

export default function Sidebar() {
  const pathname = usePathname()

  const Links = [
    { name: 'Overview', href: '/dashboard' },
    { name: 'Projects', href: '/projects' },
    { name: 'Logs', href: '/dashboard/logs' },
    { name: 'Metrics', href: '/dashboard/metrics' },
    { name: 'Services', href: '/dashboard/services' },
  ]
  return (
    <aside className="bg-gray-100 dark:bg-gray-800 hidden md:block w-64 p-6">
      <nav className="space-y-4">
        {Links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              'block py-2 px-4 rounded transition dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700',
              pathname === link.href
                ? 'bg-gray-300 dark:bg-gray-700 font-bold'
                : ' '
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
