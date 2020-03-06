import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";

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
  },
  {
    component: Post,
    path: "/post/:post_id"
  }
];

export default routes;
