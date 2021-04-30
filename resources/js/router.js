import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router);
 
import login from './components/pages/login'
import second from './components/pages/second'
import hooks from './components/pages/basic/hooks'
import method from './components/pages/basic/method'

 

const router = [
    {
    	path : '/login',
    	component : login

    },
    {
    	path:'/second',
    	component: second
    },
    {
    	path:'/hooks',
    	component: hooks
    },
    {
    	path:'/method',
    	component: method
    }

]; 



export default new Router({
    mode:'history',
	routes: router
}) 