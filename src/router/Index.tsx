import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Sidebar from "../components/layout/Sidebar";
import data from "../data/data.json";
import Projects from "../pages/projects/Projects";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
const AppRouter = () => {
  return (
    // Обертка лежит СНАРУЖИ Routes
    <div className="flex bg-white min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-20 md:ml-64 p-8">
        <Routes>
          {/* Все маршруты объявляются здесь */}
          <Route path="/hhh" element={<Home data={data} />} />
          <Route path="/projects" element={<Projects data={data} />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/contact" element={<Contact data={data} />} />

          {/* Пример других страниц */}
          {/* <Route path="/about" element={<About />} /> */}

          {/* 404 страница */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppRouter;
