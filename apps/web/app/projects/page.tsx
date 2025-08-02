/*
 * Filename: /home/gaurav/Projects/BugMesh/apps/web/app/projects/page.tsx
 * Path: /home/gaurav/Projects/BugMesh/apps/web
 * Created Date: Monday, July 21st 2025, 11:45:26 am
 * Author: Gaurav Tupe
 *
 * Copyright (c) 2025 Your Company
 */

import Link from "next/link"

type ProjectStatus = 'active' | 'in-progress' | 'paused'

const mockProjects = [
  {
    id: 'proj-1',
    name: 'User Service',
    owner: 'gaurav',
    issues: '14',
    status: 'active' as ProjectStatus,
  },
  {
    id: 'proj-2',
    name: 'API Gateway',
    owner: 'gaurav',
    issues: 3,
    status: 'in-progress' as ProjectStatus,
  },
  {
    id: 'proj-3',
    name: 'Temporal Worker',
    owner: 'gaurav',
    issues: 9,
    status: 'paused' as ProjectStatus,
  },
]

const statusColours:Record<ProjectStatus,string>={
"active":"text-green-600",
"in-progress":"text-yellow-500",
"paused":"text-red-500"

}

export default function ProjectsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project)=>(
          <div
          key={project.id}
          className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-small text-gray-600 dark:text-gray-400">
              Owner:<span className="font-medium">{project.owner}</span>
            </p>
            <p className="mt-2">
              Issues:<span className="font-bold">{project.issues} </span>
            </p>
            <p className={`mt-1 font-semibold ${statusColours[project.status]}`}>{project.status.toUpperCase()}</p>
            <div className="mt-4">
              <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline text-sm">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
