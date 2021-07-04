import Calendar from "views/Calendar.js";
import Widgets from "views/Widgets.js";
import Dashboard from "views/Dashboard.js";
import Users from 'views/Users';
import Transactions from 'views/Transactions';

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/transactions",
    name: "Transactions",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-sound-wave",
    component: Transactions,
    layout: "/admin"
  },

  {
    path: "/user-management",
    name: "Users",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-single-02",
    component: Users,
    layout: "/admin"
  },

  {
    path: "/rides",
    name: "Rides",
    rtlName: "الحاجيات",
    icon: "tim-icons icon-spaceship",
    component: Widgets,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    component: Calendar,
    layout: "/admin"
  }
];

export default routes;
