import type { App } from "vue";

export default {
  install: (app: App, options: unknown) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$translate = () => {
      return "sas";
    };
  },
};
