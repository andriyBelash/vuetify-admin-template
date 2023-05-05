import {defineStore} from "pinia";

export const useDrawerStore = defineStore('drawer',{
  state: () => ({
    drawer: true
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  },
})
