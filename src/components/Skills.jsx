const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST API"],
  },
  {
    title: "Machine Learning",
    items: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Skills & Tech Stack
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Technologies and tools I frequently use in my projects
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-black hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
