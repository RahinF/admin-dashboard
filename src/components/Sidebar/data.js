import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";

export const menu = [
  {
    title: "Dashboard",
    items: [
      { icon: LineStyle, heading: "Home", path: "/" },
      { icon: Timeline, heading: "Analytics", path: "/na" },
      { icon: TrendingUp, heading: "Sales", path: "/na"  },
    ],
  },

  {
    title: "Quick Menu",
    items: [
      { icon: PermIdentity, heading: "Users", path: "/users" },
      { icon: Storefront, heading: "Products", path: "/products" },
      { icon: AttachMoney, heading: "Transactions", path: "/na"  },
      { icon: BarChart, heading: "Reports", path: "/na"  },
    ],
  },

  {
    title: "Notifications",
    items: [
      { icon: MailOutline, heading: "Mail", path: "/na"  },
      { icon: DynamicFeed, heading: "Feedback", path: "/na"  },
      { icon: ChatBubbleOutline, heading: "Messages", path: "/na"  },
    ],
  },

  {
    title: "Staff",
    items: [
      { icon: WorkOutline, heading: "Manage", path: "/na"  },
      { icon: Report, heading: "Reports", path: "/na"  },
    ],
  },
];
