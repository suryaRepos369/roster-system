
import {ForgotPassword, Login, NewRegistration} from "./auth-routes";
import {Home} from "./admin-routes"

export const routes = [

  // auth flow
  // {
  //   path: "/",
  //   name: "Login",
  //   component: Login,
  //   topHeader: true,
  //   footer: true,
  //   noHeaderColor: true,
  //   auth: true,
  // },
  // {
  //   path: "/forgot-password",
  //   name: "ForgotPassword",
  //   component: ForgotPassword,
  //   topHeader: true,
  //   footer: true,
  //   noHeaderColor: true,
  //   auth: true,
  // },
  // {
  //   path: "/new-registration",
  //   name: "New Registration",
  //   component: NewRegistration,
  //   topHeader: true,
  //   bottomHeader: true,
  //   footer: true,
  //   auth: true,
  // },

  //admin flow
  {
    path: "/home",
    name: "Home",
    component: Home,
    topHeader: true,
    bottomHeader: true,
    footer: true,
    admin: true,
    employee: true,
  },

  //employee flow
  // {
  //   path: "/employee-home",
  //   name: "Employee Home",
  //   component: EmployeeHome,
  //   topHeader: true,
  //   bottomHeader: true,
  //   footer: true,
  //   admin: true,
  //   employee: true,
  // },

  //component library
  // {
  //   path: "/comp-lib",
  //   name: "comp",
  //   component: LibraryContainer,
  //   auth: true,
  //   admin: true,
  //   employee: true,
  // },
];
