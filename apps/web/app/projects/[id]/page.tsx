import { notFound } from "next/navigation";

const mockProjects = [
  {
    id: "proj-1",
    name: "User Service",
    owner: "gaurav",
    issues: [
      { id: "1", title: "Fix auth bug", status: "open" },
      { id: "2", title: "Rate limit login", status: "in-progress" },
    ],
  },
  {
    id: "proj-2",
    name: "API Gateway",
    owner: "gaurav",
    issues: [],
  },
  {
    id: "proj-3",
    name: "Temporal Worker",
    owner: "gaurav",
    issues: [{ id: "9", title: "Stuck workflow recovery", status: "open" }],
  },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = mockProjects.find((p) => p.id === params.id);

  if (!project) notFound();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Owned by: {project.owner}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Issues</h2>
      {project.issues.length === 0 ? (
        <p className="text-gray-600">No issues found.</p>
      ) : (
        <ul className="space-y-2">
          {project.issues.map((issue) => (
            <li
              key={issue.id}
              className="p-4 rounded bg-white dark:bg-gray-800 shadow flex justify-between"
            >
              <div>
                <h3 className="font-semibold">{issue.title}</h3>
                <p className="text-sm text-gray-400">ID: {issue.id}</p>
              </div>
              <span
                className={
                  issue.status === "open"
                    ? "text-red-500 font-bold"
                    : "text-yellow-400 font-bold"
                }
              >
                {issue.status.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
