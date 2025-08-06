import { NextResponse } from "next/server";

const mockProjects = [
  {
    id: "proj-1",
    name: "User Service",
    owner: "gaurav",
    issues: [
      { id: "1", title: "Fix auth bug", status: "open" },
      { id: "2", title: "Rate limit login", status: "in-progress" },
    ],
    status: "active",
  },
  {
    id: "proj-2",
    name: "API Gateway",
    owner: "gaurav",
    issues: [],
    status: "in-progress",
  },
  {
    id: "proj-3",
    name: "Temporal Worker",
    owner: "gaurav",
    issues: [{ id: "9", title: "Stuck workflow recovery", status: "open" }],
    status: "paused",
  },
];

export async function GET() {
  return NextResponse.json(mockProjects);
}
