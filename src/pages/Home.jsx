import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Notebook from "../components/Notebook/Notebook";
import Toolbar from "../components/Toolbar/Toolbar";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main className="workspace">
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "40px",
          }}
        >
          <Toolbar />
          <Notebook />
        </div>
      </main>
    </div>
  );
}

export default Home;
