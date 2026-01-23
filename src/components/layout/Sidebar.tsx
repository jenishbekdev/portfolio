import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Mail } from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();

  const menu = [
    { icon: <Home />, path: "/hhh", label: "Главная" },
    { icon: <Briefcase />, path: "/projects", label: "Проекты" },
    { icon: <User />, path: "/about", label: "Обо мне" },
    { icon: <Mail />, path: "/contact", label: "Связь" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-zinc-50 border-r border-zinc-200 p-4 flex flex-col">
      <div className="text-xl font-bold mb-10 px-4 hidden md:block">
        Dev.Port
      </div>
      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
              pathname === item.path
                ? "bg-zinc-900 text-white"
                : "hover:bg-zinc-200 text-zinc-600"
            }`}
          >
            {item.icon}
            <span className="hidden md:block font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;