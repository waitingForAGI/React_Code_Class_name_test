import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AgentProfile from "pages/AgentProfile";
import Contact from "pages/Contact";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "agentprofile",
      element: <AgentProfile />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
