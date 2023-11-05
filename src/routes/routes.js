import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Following from "~/pages/Following";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/layouts";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/search",
    component: Search,
    layout:null,
  },
  {
    path: "/upload",
    component: Upload,
    layout:HeaderOnly,

  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
