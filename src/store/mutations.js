import {RECEIVE_MENUS,
  RECEIVE_CAROUSEL,
  RECEIVE_ITEMS,
  RECEIVE_MS,
  RECEIVE_PINPAI,
  RECEIVE_FLLEFT,
  RECEIVE_WNTJ,
  RECEIVE_GGZS} from './mutation-types'

export default {
  [RECEIVE_MENUS](state,{menusData}){
    state.menus = menusData
  },

  [RECEIVE_ITEMS](state,{itemsData}){
    state.items = itemsData
  },

  [RECEIVE_CAROUSEL](state,{carouselData}){
    state.carousel = carouselData
  },

  [RECEIVE_MS](state,{msData}){
    state.seckill = msData
  },

  [RECEIVE_PINPAI](state,{ppData}){
    state.ppData = ppData
  },

  [RECEIVE_FLLEFT](state,{flLeftData}){
    state.flLeftData = flLeftData
  },

  [RECEIVE_GGZS](state,{ggzsData}){
    state.cateList = ggzsData
  }
}
