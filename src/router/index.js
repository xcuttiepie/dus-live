import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegistersView from '@/views/RegistersView.vue'
import HomeView from '@/views/HomeView.vue'
import AddView from '@/views/AddView.vue'
import UpdateView from '@/views/UpdateView.vue'
import ViewView from '@/views/ViewView.vue'
import DashboardView from '@/views/DashboardView.vue'
import BranchView from '@/views/BranchView.vue'
import DocumentView from '@/views/DocumentView.vue'
import UserView from '@/views/UserView.vue'
import RegisterUser from '@/views/RegisterUser.vue'
import BranchUpdate from '@/views/BranchUpdate.vue'
import DocumentUpdate from '@/views/DocumentUpdate.vue'
import UserlistView from '@/views/UserlistView.vue'
import UserlistUpdate from '@/views/UserlistUpdate.vue'
import AssignUserbranch from '@/views/AssignUserbranch.vue'
import DocumentEntryView from '@/views/DocumentEntryView.vue'
import AddUserBranch from '@/views/AddUserBranch.vue'
import AccountSettings from '@/views/AccountSettings.vue'

const routes = 
[
  {
    path: '/',
    name: 'Login', 
    component: LoginView
  },
  { 
    path: '/Register', 
    name: 'Register', 
    component: RegistersView
  },
  {
    path: '/HomeView', 
    name: 'HomeView', 
    component: HomeView
  },
  {
    path: '/AddView', 
    name: 'AddView', 
    component: AddView
  },
  {
    path: '/UpdateView', 
    name: 'UpdateView', 
    component: UpdateView
  },
  {
    path: '/ViewView', 
    name: 'ViewView', 
    component: ViewView
  },
  {
    path: '/DashboardView', 
    name: 'DashboardView', 
    component: DashboardView
  },
  {
    path: '/BranchView', 
    name: 'BranchView', 
    component: BranchView
  },
  {
    path: '/DocumentView', 
    name: 'DocumentView', 
    component: DocumentView
  },
  {
    path: '/UserView', 
    name: 'UserView', 
    component: UserView
  },
  {
    path: '/RegisterUser', 
    name: 'RegisterUser', 
    component: RegisterUser
  },
  {
    path: '/BranchUpdate', 
    name: 'BranchUpdate', 
    component: BranchUpdate
  },
  {
    path: '/DocumentUpdate', 
    name: 'DocumentUpdate', 
    component: DocumentUpdate
  },
  {
    path: '/UserlistView', 
    name: 'UserlistView', 
    component: UserlistView
  },
  {
    path: '/UserlistUpdate', 
    name: 'UserlistUpdate', 
    component: UserlistUpdate
  },
  {
    path: '/AssignUserbranch', 
    name: 'AssignUserbranch', 
    component: AssignUserbranch
  },
  {
    path: '/DocumentEntryView', 
    name: 'DocumentEntryView', 
    component: DocumentEntryView
  },
  {
    path: '/AddUserBranch', 
    name: 'AddUserBranch', 
    component: AddUserBranch
  },
  {
    path: '/AccountSettings', 
    name: 'AccountSettings', 
    component: AccountSettings
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

