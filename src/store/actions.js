import {requestMeuns,
  requestCarousel,
  requestItems,
  requestMiaoSha,
  requestPinpai,
  requestFlLeft,
  requestRightDataWntj,
  requestRightDataGgzs,
  } from '../api/index'

import {RECEIVE_MENUS,
  RECEIVE_CAROUSEL,
  RECEIVE_ITEMS,
  RECEIVE_MS,
  RECEIVE_PINPAI,
  RECEIVE_FLLEFT,
  RECEIVE_WNTJ,
  RECEIVE_GGZS,
  } from './mutation-types'

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
      commit(RECEIVE_MS,{msData})
    }
  },

  //品牌
  async requestPinpai({commit}){
    const ppResult = await requestPinpai()
    if(ppResult.code == 0){  //品牌请求返回数据
      const ppData = ppResult.data
      commit(RECEIVE_PINPAI,{ppData})
    }
  },

  //左侧分类数据
  async requestFlLeft({commit}){
    const flleftResult = await requestFlLeft()
    if(flleftResult.code == 0){ //左侧分类请求返回数据
      const flLeftData = flleftResult.data
      commit(RECEIVE_FLLEFT,{flLeftData})
    }
  },

  //右侧分类热门推荐
  async requestRightDataWntj({commit}){
    const wntjResult = await requestRightDataWntj()
    if(wntjResult.code ==0){ //右侧分类为您推荐请求返回数据
      const wntjData = wntjResult.data
      commit(RECEIVE_WNTJ,{wntjData})
    }
  },

  async requestRightDataGgzs({commit},index){
    const ggzsResult = await requestRightDataGgzs(index)
    if(ggzsResult.code ==0){ //右侧分类请求返回数据
      const ggzsData = ggzsResult.data
      commit(RECEIVE_GGZS,{ggzsData})
    }
  }
}


