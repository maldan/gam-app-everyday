import { defineStore } from "pinia";
import Axios from "axios";
import {API_URL} from "@/const";

export interface ITarget {
  id: string;
  name: string;
  status: boolean;
}

export const useTargetStore = defineStore({
  id: "target",
  state: () => ({
    list: []
  } as { list:ITarget[] }),
  actions: {
    async getList() {
      this.list = (await Axios.get(`${API_URL}/target/list`)).data.response;
    },
    async add(name: string) {
      await Axios.post(`${API_URL}/target`, { name });
    }
  },
});
