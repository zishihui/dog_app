import {requestMeuns, requestCarousel,requestItems,requestMiaoSha} from '../api/index'
import {RECEIVE_MENUS, RECEIVE_CAROUSEL,RECEIVE_ITEMS,RECEIVE_MS} from './mutation-types'

export default {
  //菜单导航项数据方法
  async requestMeuns({commit}){
    const menusResult = await requestMeuns()
    if(menusResult.code == 0){ //菜单导航项请求返回数据
      const menusData = menusResult.data
      commit(RECEIVE_MENUS,{menusData})
    }
  },

  //菜单列表数据方法
  async requestItems({commit}){
    const itemsResult = await requestItems()
    if(itemsResult.code == 0){  //菜单列表请求返回数据
      const itemsData = itemsResult.data
      commit(RECEIVE_ITEMS,{itemsData})
    }
  },

  //轮播数据方法
  async requestCarousel({commit}){
    const carouselResult = await requestCarousel()
    if(carouselResult.code == 0){  //轮播请求返回数据
      const carouselData = carouselResult.data
      commit(RECEIVE_CAROUSEL,{carouselData})
    }
  },

  //每日疯抢方法
  async requestMiaoSha({commit}){
    const msResult = await requestMiaoSha()
    if(msResult.code == 0){  //每日疯抢请求返回数据
      const msData = msResult.data
      console.log(msData)
      commit(RECEIVE_MS,{msData})
    }
  }

}


