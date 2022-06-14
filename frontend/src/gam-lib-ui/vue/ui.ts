import type { App } from 'vue';

export default {
  install: (app: App, options: unknown) => {
    // inject a globally available $translate() method
    /*app.config.globalProperties.$translate = () => {
      return "sas";
    };*/

    const components = import.meta.globEager('@/component/modal/**/*.vue');
    for (const key in components) {
      const name = key
        .replace('./', '')
        .replace('.vue', '')
        .replace(/\//g, '-')
        .replace(/\./g, '-')
        .replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase())
        .replace(/--/g, '-')
        .toLowerCase()
        .replace(/-index/g, '')
        .replace(/--component-/g, '');
      console.log(name, components[key].default);
      app.component(name, components[key].default);
    }
  },
};
