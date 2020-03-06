import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const routes = [
  {
    component: Home,
    path: "/"
  },
  {
    component: About,
    path: "/about"
  },
  {
    component: Contact,
    path: "/contact"
  }
];

export default routes;
