const About = ({ data }: { data: any }) => (
  <div className="max-w-2xl">
    <h2 className="text-3xl font-bold mb-8">Обо мне</h2>
    <div className="prose prose-zinc text-zinc-600 text-lg mb-12">
      <p>
        Я специализируюсь на создании удобных инструментов для пользователей.
      </p>
    </div>

    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">
      Технологии
    </h3>
    <div className="flex flex-wrap gap-3">
      {data.skills.map((skill: string) => (
        <div
          key={skill}
          className="px-4 py-2 bg-zinc-100 rounded-lg text-zinc-800 font-medium"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);
export default About;
