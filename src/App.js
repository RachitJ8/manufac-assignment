import FlavTable from "./components/FlavTable";
import GammaTable from "./components/GammaTable";
import { data } from "./data/wineData";
import "./App.css";

function App() {
  return (
    // Container div to wrap the entire content of the application
    <div className="container">
      {/* Table container for Flavanoids Table */}
      <div className="table-container">
        {/* Heading for Flavanoids Table */}
        <h1>Flavanoids Table</h1>

        {/* FlavTable component receives the wine data as a prop */}
        <FlavTable data={data} />
      </div>

      {/* Table container for Gamma Table */}
      <div className="table-container">
        {/* Heading for Gamma Table */}
        <h1>Gamma Table</h1>

        {/* GammaTable component receives the wine data as a prop */}
        <GammaTable data={data} />
      </div>
    </div>
  );
}

export default App;
