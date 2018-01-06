// import Vue from 'vue'

import {RECEIVE_MENUS, RECEIVE_CAROUSEL, RECEIVE_ITEMS, RECEIVE_MS} from './mutation-types'

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
  }
}
