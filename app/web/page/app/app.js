import { sync } from 'vuex-router-sync';
import store from 'store';
import router from './router';
import app from './app.vue';
import App from 'app';
import Layout from 'component/layout';
import iView from 'iview';

import 'iview/dist/styles/iview.css';


App.use(iView);

App.component(Layout.name, Layout);

sync(store, router);

export default App.init({
  ...app,
  router,
  store
});
