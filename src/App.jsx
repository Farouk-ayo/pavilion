import "./App.scss";
import Transactions from "./routes/dashboard/Transactions";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <Transactions />
      </div>
    </>
  );
}

export default App;
