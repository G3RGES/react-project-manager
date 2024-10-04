import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

const projects = {
  selectedProjectId: undefined,
  projects: [],
};

function App() {
  const [projectsState, setProjectsState] = useState(projects);

  //* handleCreateProject STARTS THE MOMENT I PRESS THE Add Project/Create new project BUTTON
  const handleCreateProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  //* handleAddProject IS RESPONSIBLE FOR ACTUALLY ADDING THE PROJECT ONCE I ENTER ALL THE DATA AND PRESS Save
  const handleAddProject = (projectData) => {
    const projectId = Math.random();

    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCreateProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleCreateProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onAddProject={handleCreateProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
