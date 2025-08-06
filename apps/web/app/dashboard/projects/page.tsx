import Link from "next/link";

type ProjectStatus = "active" | "in-progress" | "paused";

async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

interface Issue {
  id: string;
  title: string;
  status: string;
}

interface Project {
  id: string;
  name: string;
  owner: string;
  issues: Issue[];
  status: ProjectStatus;
}

const statusColours: Record<ProjectStatus, string> = {
  active: "text-green-600",
  "in-progress": "text-yellow-500",
  paused: "text-red-500",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-small text-gray-600 dark:text-gray-400">
              Owner:<span className="font-medium">{project.owner}</span>
            </p>
            <p className="mt-2">
              Issues:<span className="font-bold">{project.issues.length} </span>
            </p>
            <p
              className={`mt-1 font-semibold ${statusColours[project.status]}`}
            >
              {project.status.toUpperCase()}
            </p>
            <div className="mt-4">
              <Link
                href={`/projects/${project.id}`}
                className="text-blue-500 hover:underline text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
