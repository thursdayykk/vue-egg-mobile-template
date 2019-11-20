const Home = () =>
  import(/* webpackChunkName: "testHome" */ "./views/testHome.vue");
const Test = () =>
  import(/* webpackChunkName: "testHome" */ "./views/testPage.vue");

export default [
  { path: "/", name: "home", component: Home },
  {
    path: "/test",
    name: "test",
    component: Test
  }
  // children: []
];
