import { createWebHistory, createRouter } from 'vue-router'

import Exercise01 from "../components/Exercise01.vue"
import Exercise02 from '@/components/Exercise02.vue'
import Exercise03 from '@/components/Exercise03.vue'
import Exercise04 from '@/components/Exercise04.vue'
import About from '@/components/Exercise06/About.vue'
import Home from '@/components/Exercise06/Home.vue'
import Contact from '@/components/Exercise06/Contact.vue'
import ListUser from '@/components/Exercise09/ListUser.vue'
import UserDetail from "../components/Exercise09/UserDetail.vue"
import Employees from '@/components/Exercise10/Employees.vue'
import User from '@/components/Exercise10/UserDetail/User.vue'
import Profile from "../components/Exercise10/UserDetail/Profile.vue"
import Project from '@/components/Exercise10/UserDetail/Project.vue'
import Contact2 from '@/components/Exercise10/UserDetail/Contact.vue'
import Exercise05 from '@/components/Exercise05.vue'

const routes = [
  { 
    path: '/', 
    component: Exercise01, 
    children: [
      { path: '/contact', component: Exercise02 },
      { path: '/bt6/about', component: About },
      { path: '/bt6', component: Home },
      { path: '/bt6/contact', component: Contact },
      { path: '/users', component: ListUser },
      { path: '/users/:id', component: UserDetail },
      { path: '/employees', component: Employees },
      { path: '/employees/:id', component: User },
      { path: '/employees/:id/profile', component: Profile },
      { path: '/employees/:id/project', component: Project },
      { path: '/employees/:id/contact', component: Contact2 }
    ]
  },
  { path: '/register', component: Exercise03 },
  { path: '/login', component: Exercise04 },
  { path: "/:pathMatch(.*)*", component: Exercise05 },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
