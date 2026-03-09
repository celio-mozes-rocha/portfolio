export default function Projects() {
  const projects = [
    {
      title: "Planétarium",
      description: "Application interactive du système solaire",
      tech: ["React", "Node.js"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 text-gray-900">
      <h2 className="text-3xl font-bold mb-12 text-center">Projets</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-2">{proj.description}</p>
            <div className="flex gap-2 flex-wrap">
              {proj.tech.map((tech, i) => (
                <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}