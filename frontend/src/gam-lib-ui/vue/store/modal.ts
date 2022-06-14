import { defineStore } from 'pinia';

export const useModalStore = defineStore({
  id: 'modal',
  state: () => ({
    name: '',
    data: {},
    onOk: () => {},
    onCancel: () => {},
  }),
  actions: {
    show(name: string, data?: Record<string, unknown>, onOk?: () => void, onCancel?: () => void): void {
      this.name = name;
      this.data = data || {};
      this.onOk = onOk || (() => {});
      this.onCancel = onCancel || (() => {});
    },
    cancel() {
      this?.onCancel();
      this.name = '';
    },
    ok() {
      this?.onOk();
    },
  },
});
