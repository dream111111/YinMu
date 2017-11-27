import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import YinMu from '@/pages/yinmu/yinmu'
import Detail from '@/pages/yinmu/yinmu-child/details/details'
import Party from '@/pages/indexOthers/party'
import ReGeBang from '@/pages/indexOthers/regebang'
import Index from '@/pages/index'
import Mine from '@/pages/mine/mine'
import Dynamic from '@/pages/lifeThings/dynamic'
import RecInfo from '@/pages/yinmu/yinmu-child/details/rec_info'
import DiantaiList from "@/pages/yinmu/yinmu-child/details/diantai-list"
import Player from "@/pages/common/player";
import Tuijian from "@/pages/yinmu/yinmu-child/details/diantai-list1"

import Userinfo from "@/pages/user/userinfo"
import Shezhi from "@/pages/user/shezhi"
import Wodexiaoxi from "@/pages/user/wodexiaoxi"
import Gexinghuanfu from "@/pages/user/gexinghuanfu"
import Bianji from "@/pages/user/userinfo-bianji"
import Tinggeshiqu from "@/pages/user/tinggeshiqu"
import Wodehaoyou from "@/pages/user/wodehaoyou"
import Userinfo1 from "@/pages/user/userinfo"
import Myinfo from "@/pages/user/myinfo"
import Changxiaobang from "@/pages/yinmu/yinmu-child/details/changxiaobang"
import Yinmujingpin from "@/pages/yinmu/yinmu-child/details/yinmujingpin"
import Changxiaobang1 from "@/pages/yinmu/yinmu-child/details/changxiaobang1"
import Yinmujingpin1 from "@/pages/yinmu/yinmu-child/details/yinmujingpin1"
import Regebang1 from "@/pages/yinmu/yinmu-child/music_gedan1"
import SingerCotegory from "@/pages/indexOthers/components/singerCotegory"

import Login from "@/pages/user/login.vue"
import Register from "@/pages/user/login-reg.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component:Main
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect:'/yinmu',
      children:[
        {
          path: 'yinmu',
          name: 'yinmu',
          component: YinMu
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
        {
          path: 'dynamic',
          name: 'Dynamic',
          component: Dynamic
        }


      ]
	    },
	    {
	      path:'/listDetail/:id',
	      name:'detail',
	      component:Detail
	    },
	    {
	      path:'/party',
	      name:'party',
	      component:Party
	    },
	    {
	      path:'/regebang',
	      name:'regebang',
	      component:ReGeBang
	    },
      {
      path: '/introDetail/:id',
      name: 'recInfo',
      component: RecInfo,
    }, 
    {
      path: '/diantai/:id',
      name: 'diantaiList',
      component: DiantaiList
    },
    {
    	path: '/tuijian/:id',
      name: 'tuijian',
      component: Tuijian
    },
    {
      path: '/player',
      name: 'player',
      component: Player
    },
		
		{
			path: '/user/myinfo',
			name: 'myinfo',
			component: Myinfo
		},
		{
			path: '/userinfo/:id',
			name: 'userinfo',
			component: Userinfo
		},
		{
			path: '/user/wodexiaoxi',
			name: 'wodexiaoxi',
			component: Wodexiaoxi
		},
		{
			path: '/user/shezhi',
			name: 'shezhi',
			component: Shezhi
		},
		{
			path: '/user/tinggeshiqu',
			name: 'tinggeshiqu',
			component: Tinggeshiqu
		},
		{
			path: '/user/wodehaoyou',
			name: 'wodehaoyou',
			component: Wodehaoyou
		},
				{
			path: '/user/gexinghuanfu',
			name: 'gexinghuanfu',
			component: Gexinghuanfu
		},
				{
			path:"/user/userinfo/bianji",
			name:'bianji',
			component:Bianji
		},
		{
			path:"/yinmu/changxiaobang",
			name:"changxiaobang",
			component:Changxiaobang
		},
				{
			path:"/yinmu/yinmujingpin",
			name:"yinmujingpin",
			component:Yinmujingpin
		},
				{
			path:"/yinmu/changxiaobang1",
			name:"changxiaobang1",
			component:Changxiaobang1
		},
				{
			path:"/yinmu/yinmujingpin1",
			name:"yinmujingpin1",
			component:Yinmujingpin1
		},
		{
			path:"/regebang1",
			name:"regebang1",
			component:Regebang1
		},
		{
			path:"/search/singerCotegory",
			name:"singerCotegory",
			component:SingerCotegory
		},
		{
			path:"/register",
			name:"register",
			component:Register
		},
		{
			path:"/login",
			name:"login",
			component:Login
		}
				
  ]
})
