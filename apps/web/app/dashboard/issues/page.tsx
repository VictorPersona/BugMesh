"use client";

import { useEffect, useState } from "react";

type IssueStatus = "open" | "in-progress" | "closed";
interface Issue {
  id: string;
  title: string;
  status: IssueStatus;
  project: string;
}
export default function IssuesPage() {
  const [Issues, setIssues] = useState<Issue[]>([]);
  const [filter, setFilter] = useState<IssueStatus | "all">("all");

  useEffect(() => {
    async function fetchIssues() {
      try {
        const res = await fetch("/api/issues");
        if (!res.ok) throw new Error("Failed to fetch issues");
        const data: Issue[] = await res.json();
        setIssues(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchIssues();
  }, []);

  const filteredIssues =
    filter === "all"
      ? Issues
      : Issues.filter((issue) => issue.status === filter);

  const statuses: (IssueStatus | "all")[] = [
    "all",
    "open",
    "in-progress",
    "closed",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Issues</h1>

      <div className="mb-4 flex space-x-2">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded ${filter === status ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"}`}
          >
            {status.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Project</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredIssues.map((issue) => (
              <tr
                key={issue.id}
                className="border-t border-gray-300 dark:border-gray-700"
              >
                <td className="px-4 py-2 ">{issue.id}</td>
                <td className="px-4 py-2 ">{issue.title}</td>
                <td className="px-4 py-2 ">{issue.project}</td>
                <td>
                  <span
                    className={
                      issue.status === "open"
                        ? "text-red-500 font-bold"
                        : issue.status === "in-progress"
                          ? "text-yellow-500 font-bold"
                          : "text-green-500 font-bold"
                    }
                  >
                    {issue.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
