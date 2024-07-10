<template>
  
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
   <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
    <a class="sidebar-brand brand-logo-mini" href="../../index.html"><img src="assets/images/faces/logo.png" alt="logo"></a>
    <h1 class="sidebar-brand brand-logo">D<img class="imagess" width="25" height="25" src="assets/images/faces/logo.png" alt="">CUMENTS</h1>
   </div>
   
   <ul class="nav">
     <li class="nav-item profile">
     </li>
     <li class="nav-item nav-category">
       <span class="nav-link">Navigation</span>
     </li>
     <li class="nav-item menu-items" id="dashbaord">
       <a class="nav-link">
         <span class="menu-icon">
           <i class="mdi mdi-speedometer"></i>
         </span>
      <router-link to='/DashboardView'><span class="menu-title">Dashboard</span></router-link>
       </a>
     </li>

   <!--<li class="nav-item menu-items" id="mainID" hidden>
       <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic" id="maintenance">
         <span class="menu-icon">
           <i class="mdi mdi-laptop"></i>
         </span>
         <span class="menu-title">Maintenance</span>
         <i class="menu-arrow"></i>
       </a>
       <div class="collapse" id="ui-basic">
         <ul class="nav flex-column sub-menu">
          <li class="nav-item" ><router-link to='/DocumentView'><a class="nav-link" id="docu" @click="documentss">Document</a></router-link></li>
          <li class="nav-item"><router-link to='/BranchView'><a class="nav-link" id="bra" @click="branchess">Branches</a></router-link></li>
          <li class="nav-item"><router-link to='/UserView'><a class="nav-link" id="usr" @click="userss">Users</a></router-link></li>
          <li class="nav-item"><router-link to='/AssignUserbranch'><a class="nav-link" id="ssgn" @click="ssgnbrnch">Assign User-Branch</a></router-link></li>
         </ul>
       </div>
     </li>

     <li class="nav-item menu-items" id="mainID2" hidden>
       <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth" id="transasctions">
         <span class="menu-icon">
           <i class="mdi mdi-security"></i>
         </span>
         <span class="menu-title">Transaction</span>
         <i class="menu-arrow"></i>
       </a>
       <div class="collapse" id="auth">
         <ul class="nav flex-column sub-menu">
          <li class="nav-item"><router-link to='/HomeView' href="#"><a class="nav-link" id="entry" @click="docuentry" >Document Entry</a></router-link></li>
         </ul>
       </div>
      </li>-->

      <!--NEW ADDED-->
      <!--PARENT-->
      <template v-for="(menus, index) in Menu" :key="index">
      <template v-if="menus.type == 'Parent' ">
            <!--MAINTENANCE-->
        <li class="nav-item menu-items" id="mainID">
          <a class="nav-link" data-toggle="collapse" v-if="menus.menus == 'Maintenance'" href="#ui-basic" aria-expanded="false" aria-controls=" ui-basic" id="maintenance">
              <span class="menu-icon">
                <i v-if= "menus.menus == 'Maintenance'" class="mdi mdi-laptop"></i>
              </span>
              <span class="menu-title">{{menus.menus}}</span>
              <i class="menu-arrow"></i>
          </a>
        <!--CHILD-->
        <!--MAINTENANCE-->
        <div class="collapse" id="ui-basic">
          <template v-for="(submenus, index1) in Submenu" :key="index1">
          <ul v-if="submenus.assignParent == menus.menus" class="nav flex-column sub-menu"  >
                <li class="nav-item">
                  <router-link to='/DocumentView' v-if="submenus.subMenu == 'Document'">
                  <a class="nav-link" id="docu" @click="documentss">{{submenus.subMenu}}</a>
                  </router-link>
                </li>

                <li  class="nav-item">
                  <router-link to='/BranchView' v-if="submenus.subMenu == 'Branches'">
                    <a class="nav-link" id="bra" @click="branchess">{{submenus.subMenu}}</a>
                  </router-link>
                </li>

                <li  class="nav-item">
                  <router-link to='/UserView' v-if="submenus.subMenu == 'Users'">
                    <a class="nav-link"  id="usr" @click="userss">{{submenus.subMenu}}</a>
                  </router-link>
                </li>

                <li  class="nav-item">
                  <router-link to='/AssignUserbranch' v-if="submenus.subMenu == 'Appoint User-Right´s'">
                   <a class="nav-link" id="ssgn" @click="ssgnbrnch">{{submenus.subMenu}}</a>
                  </router-link>
                </li>
          </ul>
             </template>
        </div>
        </li>

            <!--TRANSACTIONS-->
        <li class="nav-item menu-items" id="'mainID2'">
          <a class="nav-link" data-toggle="collapse" v-if="menus.menus == 'Transaction'"   href="#auth" aria-expanded="false" aria-controls="auth" id="transactions" >
              <span class="menu-icon">
                <i v-if= "menus.menus == 'Transaction'" class="mdi mdi-security"></i>
              </span>
              <span class="menu-title">{{menus.menus}}</span>
              <i class="menu-arrow"></i>
          </a>
          <!--CHILD-->
                    <!--TRANSACTIONS-->
                    <div class="collapse" id="auth">
                      <template v-for="(submenus, index1) in Submenu" :key="index1">
                      <ul v-if="submenus.assignParent == menus.menus" class="nav flex-column sub-menu"  >
                        <li  class="nav-item">
                              <router-link to='/HomeView' v-if="submenus.subMenu == 'Document Entry'">
                                <a class="nav-link" :id="'documententry'" @click="docuentry()">{{submenus.subMenu}}</a>
                              </router-link>
                            </li>
                      </ul>
                    </template>
                    </div>
        </li>
      </template>
    </template>
   </ul> 
 </nav>
 
</template>

<script setup>
import { ref , onMounted} from 'vue'
import axios from 'axios'

const Menu = ref ([])
//const xmnt = "xmainte"
//const xtrnsct = "auth"
const Submenu = ref([])



const username = localStorage.emails

const xxx = localStorage.USERNAME

onMounted(() =>{
fetchMenus()
fetchSubmenu()
})


//FETCH  MENUS
async function fetchMenus(){
axios.get('https://localhost:7168/api/Module/Fetch/ExistingParentMenus/' +username).then((res) => {
        Menu.value = res.data
        console.log(  Menu.value)
      })
 
    }
    

//FETCH SUBMENU
async function fetchSubmenu(){
axios.get('https://localhost:7168/api/Module/Fetch/Email/' + username).then((res) => {
  Submenu.value = res.data
        console.log( Submenu.value)
      })

    }


    

function dash()
{
  /*document.getElementById("dashbaord").classList.add("active");*/
  
}
function docuentry()
{

  /*document.getElementById("transactions").classList.remove("collapse");
  document.getElementById("auth").classList.add("show");
  document.getElementById("mainID2").classList.add("active");
  document.getElementById("documententry").classList.add("active");*/
}
function documentss()
{
  /*document.getElementById("maintenance").classList.remove("collapse");
  document.getElementById("ui-basic").classList.add("show");
  document.getElementById("docu").classList.add("active");
  document.getElementById("mainID").classList.add("active");

}
function branchess()
{
 /* document.getElementById("maintenance").classList.remove("collapse");
  document.getElementById("ui-basic").classList.add("show");
  document.getElementById("bra").classList.add("active");
  document.getElementById("mainID").classList.add("active");*/

}

function userss()
{
 /* document.getElementById("maintenance").classList.remove("collapse");
  document.getElementById("ui-basic").classList.add("show");
  document.getElementById("usr").classList.add("active");
  document.getElementById("mainID").classList.add("active");*/

}

function ssgnbrnch()
{
  /*document.getElementById("maintenance").classList.remove("collapse");
  document.getElementById("ui-basic").classList.add("show");
  document.getElementById("ssgn").classList.add("active");
  document.getElementById("mainID").classList.add("active");*/

}
</script>

<style scoped>

.sidebar .sidebar-brand-wrapper .sidebar-brand[data-v-53c01102][data-v-53c01102] {
    color: pink;
    font-size: 1.7rem;
    line-height: 48px;
    margin-right: 0;
    padding: 0rem 0rem 0rem 1.3rem;
    width: 100%;
    margin-left: -15px;
    margin-top: 8px;
}
.sidebar .nav .nav-item .nav-link a:hover{
  color: #f1f1f1;
}
.sidebar .nav .nav-item.active > .nav-link {
    background: #0f1015;
    position: relative;
}

.sidebar .sidebar-brand-wrapper .sidebar-brand img {
    width: calc(244px - 120px);
    max-width: 100%;
    height: 39px;
    WIDTH: 45px;
    margin: auto;
    vertical-align: middle;
}

</style>