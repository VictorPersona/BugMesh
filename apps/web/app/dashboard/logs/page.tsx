export default function LogsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Service Logs</h2>
      <div className="bg-black font-mono text-green-400 h-[400px] overflow-y-auto p-4 rounded">
        <p>[INFO] kafka logger:Initialized...</p>
        <p>[INFO] api service: Recieved request /api/issue/123</p>
        <p>[ERROR] db-service:Connection timeout</p>
        {/*
        further logs to be added*/}
      </div>
    </div>
  )
}
