import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResourcePage from "./pages/ResourcePage";
import RoadMapPage from "./pages/RoadMapPage";
import SignUpPage from "./pages/SignUpPage";
import TokenomicsPage from "./pages/TokenomicsPage";
import Web2Web3BridgePage from "./pages/Web2Web3BridgePage";
import WhitePaperPage from "./pages/WhitePaperPage";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const whitePaperRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/whitepaper",
  component: WhitePaperPage,
});

const tokenomicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tokenomics",
  component: TokenomicsPage,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

const roadmapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/roadmap",
  component: RoadMapPage,
});

const bridgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bridge",
  component: Web2Web3BridgePage,
});

const resourceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resource",
  component: ResourcePage,
});

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: SignUpPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  whitePaperRoute,
  tokenomicsRoute,
  projectsRoute,
  roadmapRoute,
  bridgeRoute,
  resourceRoute,
  signUpRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
