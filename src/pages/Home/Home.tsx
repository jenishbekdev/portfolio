import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = ({ data }: { data: any }) => (
  <section className="max-w-2xl mt-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">
      Привет, я {data.name}
    </h1>
    <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
      {data.role}. {data.bio}
    </p>
    <Link
      to="/projects"
      className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition-all shadow-lg hover:shadow-zinc-200"
    >
      Посмотреть проекты <ArrowRight size={18} />
    </Link>
  </section>
);
export default Home;
