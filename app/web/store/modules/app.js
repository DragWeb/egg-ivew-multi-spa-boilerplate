import axios from 'axios';

const app = {
  state: {
    accountHost: "https://account.niu.com",
    service: "skyeye",
    showNav: '',
    menuList: [],
    defaultApp: {},
    appList: []
  },
  mutations: {
    setShowNav(state, status) {
      state.showNav = status;
    },
    setAccountHost(state, host) {
      state.accountHost = host;
    },
    setService(state, service) {
      state.service = service;
    },
    updateMenulist(state) {
      state.menuList = appRouter;
    },
    setDefaultApp(state, app) {
      if (typeof app === 'string') {
        state.appList.map(function(item) {
          if (item.app_id == app) {
            state.defaultApp = item;
          }
        })
      } else {
        state.defaultApp = app;
      }
    },
    setAppList(state, appList) {
      state.appList = appList;
    },
    updateAppField(state, field) {
      let obj = Object.assign(state.defaultApp, field);
      state.defaultApp = Object.assign(state.defaultApp, field);
    }
  },
  actions: {
    getApplist() {
      let self = this;
      return axios({
        method: 'post',
        url: '/api/app/getList',
        data: {
          page: 1,
          pageSize: 1000
        }
      }).then(function(res) {
        res = res.data;
        if (res.data) {
          self.state.app.defaultApp = res.data[0] || {};
          self.state.app.appList = res.data || [];
          return {status: 200, data: res}
        } else {
          return {status: 500}
        }
      }).catch(error => {
        if (error.response.status === 401) {
          window.location.href = self.state.app.accountHost + '/login?service=' + self.state.app.service + '&callback=' + window.location.href;
        }
      });
    }
  }
};

export default app;
