import { ExternalLink } from "lucide-react";

const Projects = ({ data }: { data: any }) => (
  <div className="max-w-4xl">
    <h2 className="text-3xl font-bold mb-10">Проекты</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.projects.map((project: any) => (
        <a
          key={project.id}
          href={project.link}
          className="group block p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <ExternalLink size={18} className="text-zinc-400" />
          </div>
          <p className="text-zinc-600 mb-6 leading-snug">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 bg-white border border-zinc-200 rounded-md text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </div>
);
export default Projects;
