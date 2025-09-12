import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">🚀 My Portfolio</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
            <p className="text-sm text-gray-500">{project.techStack.join(", ")}</p>
            <img src={project.image} alt={project.title} className="mt-2" />
            <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
