import { NextResponse } from "next/server";

const mockIssues = [
  { id: "1", title: "Fix auth bug", status: "open", project: "User Service" },
  {
    id: "2",
    title: "Rate limit login",
    status: "in-progress",
    project: "User Service",
  },
  {
    id: "3",
    title: "Gateway 502 errors",
    status: "open",
    project: "API Gateway",
  },
  {
    id: "4",
    title: "Workflow stuck recovery",
    status: "closed",
    project: "Temporal Worker",
  },
  {
    id: "5",
    title: "Add pagination",
    status: "in-progress",
    project: "API Gateway",
  },
];

export async function GET() {
  return NextResponse.json(mockIssues);
}
