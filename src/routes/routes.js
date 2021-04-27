import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      { 
        icon: "dashboard",
        path: "dashboard",
        name: "矩阵全景",
        component: Dashboard
      },
      {
        icon: "bubble_chart",
        path: "icons",
        name: "作业矩阵",
        component: Icons
      },
     
      {
        icon: "content_paste",
        path: "table",
        name: "P机阵列",
        component: TableList
      },
      {
        icon: "library_books",
        path: "typography",
        name: "存储阵列",
        component: Typography
      },
     
      {
        icon: "notifications",
        path: "notifications",
        name: "日志通知",
        component: Notifications
      },
      {
        icon: "person",
        path: "user",
        name: "用户设置",
        component: UserProfile
      },

      {
        icon: "location_on",
        path: "maps",
        name: "全网星罗",
        meta: {
          hideFooter: true
        },
        component: Maps
      },

      {
        icon: "dashboard",
        path: "upgrade",
        name: "大神战绩",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
