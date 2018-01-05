/*引入ajax文件*/
import ajax from './ajax'

//定义ajax发送请求的路径
export const requestMeuns = () => ajax('/api/menus')

export const requestItems = () => ajax('/api/items')

export const requestCarousel = () => ajax('/api/carousel')

export const requestMiaoSha = () => ajax('/api/miaosha')
