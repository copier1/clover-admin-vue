import Layout from "@/layout";

const component = [
  {
    name: "component",
    path: "/component",
    component: Layout,
    redirect: "/component/table",
    meta: { title: "组件示例", order: 5, icon: "ep-menu" },
    children: [
      {
        path: "table",
        name: "component_table",
        component: () => import("@/views/component/table/index.vue"),
        meta: {
          title: "表格",
          icon: "ep-grid",
        },
      },
      {
        path: "step-form",
        name: "component_step-form",
        component: () => import("@/views/component/step-form/index.vue"),
        meta: {
          title: "分步表单",
          icon: "ep-finished",
        },
      },
    ],
  },
];

export default component;
