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
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
