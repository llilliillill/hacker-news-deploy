import { NewsType } from "../types"
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNewsListStore = defineStore("NewsListStore", () => {
  const newsList = ref<NewsType[]>([])
  const loading = ref<boolean>(false)
  
  return { 
    loading,
    newsList
  }
})