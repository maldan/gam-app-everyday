import { defineStore } from 'pinia';
import Axios from 'axios';
import { API_URL } from '@/const';
import type { ITarget } from '@/store/target';

export interface ITargetStatus {
  id: string;
  status: boolean;
}

export interface IStat {
  list: ITargetStatus[];
}

export const useStatStore = defineStore({
  id: 'stat',
  state: () =>
    ({
      list: [],
    } as IStat),
  actions: {
    async getList(date: string) {
      this.list = (await Axios.get(`${API_URL}/stat/byDate?date=${date}`)).data.response;
    },
    async update(list: ITarget[], date: string) {
      await Axios.post(`${API_URL}/stat`, {
        date,
        list,
      });
    },
  },
});
