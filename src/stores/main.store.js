import { makeAutoObservable, runInAction } from "mobx"
import axios from "axios"

class MainStore {

  tvlData = {}
  tvlLoading = true

  constructor (){
    makeAutoObservable(this)
    this.init()
  }

  init = async () => {
    this.fetchTvlData()
  }
  
  fetchTvlData = async () => {
    const {data} = await axios.get("https://api.llama.fi/protocol/b.protocol")
    runInAction(()=>{
      this.tvlData = data
      this.tvlLoading = false
    })
  }
}

export default new MainStore()