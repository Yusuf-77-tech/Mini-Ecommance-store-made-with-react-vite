import { Routes, Route, Link} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <>
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/jobs/:id">JobDetails</Link>
      </nav> */}

    </div>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </div>
    </>
  );
}

export default App;