import AppNavbar from "./components/navbar";
import AppSidebar from "./components/sidebar";

function App() {
    return (

        <div className="h-screen flex flex-col">
            <AppNavbar/>
            <div className="flex flex-1">
                <AppSidebar/>
                <div className="w-4/5 bg-gray-100 flex justify-center items-center">Main Content</div>
            </div>
        </div>
    );
}

export default App;