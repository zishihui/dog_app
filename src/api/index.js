/*引入ajax文件*/
import ajax from './ajax'

//定义ajax发送请求的路径
export const requestMeuns = () => ajax('/api/menus')

export const requestItems = () => ajax('/api/items')

export const requestCarousel = () => ajax('/api/carousel')

export const requestMiaoSha = () => ajax('/api/miaosha')

export const requestPinpai = () => ajax('/api/pinpai')

export const requestFlLeft = () => ajax('/api/flLeft')

export const requestRightDataWntj = () => ajax('/api/rightDataWntj')

export const requestRightDataGgzs = (index) => {
  let path = '';
  switch (index){
    case '5':
      path = '/api/rightDataGgzs'
      break
    case '6':
      path = '/api/rightDataGgls'
      break
    case '48':
      path = '/api/rightDataGgbj'
      break
    case '49':
      path = '/api/rightDataGgyl'
      break
    case '53':
      path = '/api/rightDataGgwj'
      break
    case '54':
      path = '/api/rightDataGgsh'
      break
    case '55':
      path = '/api/rightDataGgfs'
      break
    case '2651':
      path = '/api/rightDataGgmr'
      break
    case '2652':
      path = '/api/rightDataGgqy'
      break
    case '3895':
      path = '/api/rightDataGgzb'
      break
    case '4311':
      path = '/api/rightDataGgwd'
      break
    case '4315':
      path = '/api/rightDataGgqj'
      break
    case 88888:
      path = '/api/rightDataGgzl'
      break
    default :
      path = ''
  }

  return ajax(path)
}

