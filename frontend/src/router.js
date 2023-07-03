
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import UserManager from "./components/listers/UserCards"
import UserDetail from "./components/listers/UserDetail"

import ProfileManager from "./components/listers/ProfileCards"
import ProfileDetail from "./components/listers/ProfileDetail"

import MatchManager from "./components/listers/MatchCards"
import MatchDetail from "./components/listers/MatchDetail"

import ChatManager from "./components/listers/ChatCards"
import ChatDetail from "./components/listers/ChatDetail"
import SocialFeedManager from "./components/listers/SocialFeedCards"
import SocialFeedDetail from "./components/listers/SocialFeedDetail"



export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/users',
                name: 'UserManager',
                component: UserManager
            },
            {
                path: '/users/:id',
                name: 'UserDetail',
                component: UserDetail
            },

            {
                path: '/profiles',
                name: 'ProfileManager',
                component: ProfileManager
            },
            {
                path: '/profiles/:id',
                name: 'ProfileDetail',
                component: ProfileDetail
            },

            {
                path: '/matches',
                name: 'MatchManager',
                component: MatchManager
            },
            {
                path: '/matches/:id',
                name: 'MatchDetail',
                component: MatchDetail
            },

            {
                path: '/chats',
                name: 'ChatManager',
                component: ChatManager
            },
            {
                path: '/chats/:id',
                name: 'ChatDetail',
                component: ChatDetail
            },
            {
                path: '/socialFeeds',
                name: 'SocialFeedManager',
                component: SocialFeedManager
            },
            {
                path: '/socialFeeds/:id',
                name: 'SocialFeedDetail',
                component: SocialFeedDetail
            },




    ]
})
