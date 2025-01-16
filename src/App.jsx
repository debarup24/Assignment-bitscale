import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ">
        <div>
          {" "}
          <Sidebar />{" "}
        </div>
        <div className="w-full">
          {" "}
          <Dashboard />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
