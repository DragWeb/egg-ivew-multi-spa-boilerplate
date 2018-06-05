import { sync } from 'vuex-router-sync';
import app from './app.vue';
import App from 'app';
import Layout from 'component/layout';
import iView from 'iview';

import 'iview/dist/styles/iview.css';


App.use(iView);

export default App.init({
  ...app
});
