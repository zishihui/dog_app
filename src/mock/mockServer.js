/*引入mock*/
import Mock from 'mockjs'
import data from './homepage.json'
import msData from './meirifengqiang.json'
import ppData from './pinpai.json'
import flLeftData from './fenlei.json'
import rightDataWntj from './fl-right/rightData-88888.json'
import rightDataGgzl from './fl-right/rightData-5.json'
import rightDataGgls from './fl-right/rightData-6.json'
import rightDataGgbj from './fl-right/rightData-48.json'
import rightDataGgyl from './fl-right/rightData-49.json'
import rightDataGgwj from './fl-right/rightData-53.json'
import rightDataGgsh from './fl-right/rightData-54.json'
import rightDataGgfs from './fl-right/rightData-55.json'
import rightDataGgmr from './fl-right/rightData-2651.json'
import rightDataGgqy from './fl-right/rightData-2652.json'
import rightDataGgzb from './fl-right/rightData-3895.json'
import rightDataGgwd from './fl-right/rightData-4311.json'
import rightDataGgqj from './fl-right/rightData-4315.json'




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

//指定监听的url和对应的品牌数据模板
Mock.mock('/api/pinpai',{
  code : 0,
  data : ppData.brand
})

//指定监听的url和对应的分类左侧数据模板
Mock.mock('/api/flLeft',{
  code : 0,
  data : flLeftData.categorys
})

//指定监听的url和对应的分类右侧热门数据模板
Mock.mock('/api/rightDataGgzl',{
  code : 0,
  data : rightDataWntj.cate_list
})

Mock.mock('/api/rightDataGgzs',{
  code : 0,
  data : rightDataGgzl.cate_list
})

Mock.mock('/api/rightDataGgls',{
  code : 0,
  data : rightDataGgls.cate_list
})

Mock.mock('/api/rightDataGgbj',{
  code : 0,
  data : rightDataGgbj.cate_list
})

Mock.mock('/api/rightDataGgyl',{
  code : 0,
  data : rightDataGgyl.cate_list
})

Mock.mock('/api/rightDataGgwj',{
  code : 0,
  data : rightDataGgwj.cate_list
})

Mock.mock('/api/rightDataGgsh',{
  code : 0,
  data : rightDataGgsh.cate_list
})

Mock.mock('/api/rightDataGgfs',{
  code : 0,
  data : rightDataGgfs.cate_list
})

Mock.mock('/api/rightDataGgmr',{
  code : 0,
  data : rightDataGgmr.cate_list
})

Mock.mock('/api/rightDataGgqy',{
  code : 0,
  data : rightDataGgqy.cate_list
})

Mock.mock('/api/rightDataGgzb',{
  code : 0,
  data : rightDataGgzb.cate_list
})

Mock.mock('/api/rightDataGgwd',{
  code : 0,
  data : rightDataGgwd.cate_list
})

Mock.mock('/api/rightDataGgqj',{
  code : 0,
  data : rightDataGgqj.cate_list
})
