import logo from './logo.svg';
import './App.css';
import Navpage from './components/Navpage';
import Navmain from './components/Navmain';
import Footer from './components/Footer'
import MiddlePage from './components/MiddlePage';
import Combine from './components/Combine';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewPage from './components/ViewPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Combine />} />
          <Route path="viewpage" element={<ViewPage />}>
            {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
