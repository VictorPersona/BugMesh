/*
 * Filename: /home/gaurav/Projects/BugMesh/apps/web/app/dashboard/services/page.tsx
 * Path: /home/gaurav/Projects/BugMesh/apps/web
 * Created Date: Thursday, July 31st 2025, 6:30:12 pm
 * Author: Gaurav Tupe
 * 
 * Copyright (c) 2025 Your Company
 */

const services = [
  { name: 'auth-service', status: 'healthy' },
  { name: 'api-gateway', status: 'degraded' },
  { name: 'kafka-streamer', status: 'healthy' },
  { name: 'temporal-worker', status: 'offline' },
]

export default function ServicesPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Service Health</h2>
      <ul className="space-y-4">
        {services.map((s) => (
          <li
            key={s.name}
            className="p-4 rounded bg-white dark:bg-gray-800 flex justify-between items-center shadow"
          >
            <span>{s.name}</span>
            <span
              className={
                s.status === 'healthy'
                  ? 'text-green-600 font-semibold'
                  : s.status === 'degraded'
                    ? 'text-yellow-500 font-semibold'
                    : 'text-red-500 font-semibold'
              }
            >
              {s.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
