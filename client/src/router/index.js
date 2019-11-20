import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const views = [];
(r => {
    console.log(r.keys())
  r.keys().forEach(key => {
    const md = r(key).default;
    md.path = md.path || `/${key.split('/')[2]}`;
    views.push(...md);
  });
  
})(require.context('../', true, /\.\/pages\/([^/]+)\/route.js$/));

const router = new VueRouter({
    mode: 'history',
    routes: [...views, { path: '*', redirect: { path: '/notFound' } }]
});

export default router;