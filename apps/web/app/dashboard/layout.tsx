import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return(
        <div className="min-h-screen flex">
            <Sidebar/>
            <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                {children}
            </main>
        </div>
    )
}