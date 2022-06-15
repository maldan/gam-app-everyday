import { defineStore } from 'pinia';
import Axios from 'axios';
import { API_URL } from '@/const';
import { TimeHelper } from '@/gam-lib-ui/util/TimeHelper';

export interface ITarget {
  id: string;
  name: string;
  time: string;
  status: boolean;
}

export const useTargetStore = defineStore({
  id: 'target',
  state: () =>
    ({
      list: [],
    } as { list: ITarget[] }),
  getters: {
    sortedList: (state) => {
      return state.list.sort((a, b) => ~~TimeHelper.HMtoSeconds(a.time) - ~~TimeHelper.HMtoSeconds(b.time));
    },
  },
  actions: {
    async getList() {
      this.list = (await Axios.get(`${API_URL}/target/list`)).data.response;
    },
    async add(name: string, time: string) {
      await Axios.post(`${API_URL}/target`, { name, time });
    },
    async update(id: string, name: string, time: string) {
      await Axios.patch(`${API_URL}/target`, { id, name, time });
    },
  },
});
