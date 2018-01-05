/*引入mock*/
import Mock from 'mockjs'
import data from './homepage.json'
import msData from './meirifengqiang.json'


//指定监听的url和对应的菜单导航json数据模板
Mock.mock('/api/menus',{
  code : 0,
  data : data.menus,
})

//指定监听的url和对应的菜单列表数据模板
Mock.mock('/api/items',{
  code : 0,
  data : data.datas[2].menus
})

//指定监听的url和对应的轮播数据模板
Mock.mock('/api/carousel',{
  code : 0,
  data : data.datas[0].value
})

//指定监听的url和对应的每日疯抢数据模板
Mock.mock('/api/miaosha',{
  code : 0,
  data : msData.data['3']
})

