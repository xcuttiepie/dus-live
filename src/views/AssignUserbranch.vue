<template>
    <head>
<title>Assign User-Branch</title>

</head>
<div id="mySidenav" class="container-scroller">
      <!-- partial:partials/_sidebar.html -->
      <SideNav/>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_navbar.html -->
        <TopNavView/>
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row ">
              <div class="col-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                  
                    <div class="page-header">
                      <h3 class="page-title"> USERLIST </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active"><router-link to='/DashboardView'>Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Maintenance</li>
                  <li class="breadcrumb-item active">Appoint User-Right´s</li>
                </ol>
              </nav>
            </div>
                
                    <div class="table-responsive">
                      <table class="table" id="userlist">
                        <thead>
                          <tr>
                                  <th>ID</th>
                                  <th>Username</th>
                                  <th>Full Name</th>
                                  <th>User Type</th>
                                  <th>Account Type</th>
                                  <th>Action</th>
                                  
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(user, index) in users" :key="index">
                        <td>{{user.id}}</td>
                        <td>{{user.username}}</td>
                        <td>{{user.lastname}}, {{user.firstname}} {{user.middlename}} </td>
                        <td>{{user.userType}}</td>
                        <td>{{user.accountType}}</td>
                        <td>
                          <button v-if="isEdit == 1" type="button" @click="view(user)" class="btn btn-warning ml-2"><i class="fa-solid fa-pen-to-square"></i></button>
                        </td>
                    </tr> 
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-row justify-content-between">
                      <h4 class="card-title">TEST</h4>
                      <p class="text-muted mb-1 small">TEST</p>
                    </div>
                    <div class="preview-list">
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <img src="assets/images/faces/face6.jpg" alt="image" class="rounded-circle" />
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">TEST</h6>
                              <p class="text-muted text-small">TEST</p>
                            </div>
                            <p class="text-muted">TEST</p>
                          </div>
                        </div>
                      </div>
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <img src="assets/images/faces/face8.jpg" alt="image" class="rounded-circle" />
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">TEST</h6>
                              <p class="text-muted text-small">TEST</p>
                            </div>
                            <p class="text-muted">TEST</p>
                          </div>
                        </div>
                      </div>
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <img src="assets/images/faces/face9.jpg" alt="image" class="rounded-circle" />
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">TEST</h6>
                              <p class="text-muted text-small">TEST</p>
                            </div>
                            <p class="text-muted">TEST</p>
                          </div>
                        </div>
                      </div>
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <img src="assets/images/faces/face11.jpg" alt="image" class="rounded-circle" />
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">TEST</h6>
                              <p class="text-muted text-small">TEST</p>
                            </div>
                            <p class="text-muted">TEST</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">TEST</h4>
                    <div class="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                      <div class="item">
                        <img src="assets/images/dashboard/Rectangle.jpg" alt="">
                      </div>
                      <div class="item">
                        <img src="assets/images/dashboard/Img_5.jpg" alt="">
                      </div>
                      <div class="item">
                        <img src="assets/images/dashboard/img_6.jpg" alt="">
                      </div>
                    </div>
                    <div class="d-flex py-4">
                      <div class="preview-list w-100">
                        <div class="preview-item p-0">
                          <div class="preview-thumbnail">
                            <img src="assets/images/faces/face12.jpg" class="rounded-circle" alt="">
                          </div>
                          <div class="preview-item-content d-flex flex-grow">
                            <div class="flex-grow">
                              <div class="d-flex d-md-block d-xl-flex justify-content-between">
                                <h6 class="preview-subject">TEST</h6>
                                <p class="text-muted text-small">TEST</p>
                              </div>
                              <p class="text-muted">TEST</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">TEST</p>
                    <div class="progress progress-md portfolio-progress">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">TEST</h4>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <footer class="footer">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
              <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © project.com 2022</span>
            </div>
          </footer>
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
</template>

<script setup>
    //Bootstrap and jQuery libraries
  //import 'bootstrap/dist/css/bootstrap.min.css'; //for table good looks
  import 'jquery/dist/jquery.min.js';
  //Datatable Modules
  import "datatables.net-dt/js/dataTables.dataTables"
  import "datatables.net-dt/css/jquery.dataTables.min.css"
  import "datatables.net-buttons/js/dataTables.buttons.js"
  import "datatables.net-buttons/js/buttons.colVis.js"
  import "datatables.net-buttons/js/buttons.flash.js"
  import "datatables.net-buttons/js/buttons.html5.js"
  import "datatables.net-buttons/js/buttons.print.js"
  import $ from 'jquery'; 
import SideNav from "./SideNav.vue";
import TopNavView from "./TopNavView.vue";
import router from '@/router';
import {ref, onMounted} from 'vue'
import axios from 'axios'
import { connecttoapi } from '../services/httpService'

const users = ref([])
const branches = ref([])
const buttonrole = ref([])
const isDelete = ref('')
const isAdd = ref('')
const isEdit = ref('')
 const menu = "Appoint User-Right´s"

onMounted(() =>{
      fetchData()
      fetchDatas()
      fetchButton()
      /*document.getElementById("maintenance").classList.remove("collapse");
      document.getElementById("ui-basic").classList.add("show");
      document.getElementById("mainID").classList.add("active");
      document.getElementById("ssgn").classList.add("active");*/
  })

  async function fetchButton(){
      await connecttoapi().get('https://localhost:7168/api/Module/Fetch/Button/User/'+  localStorage.Name +'/'+  menu).then((res) => { 
          buttonrole.value = res.data

          isAdd.value =  buttonrole.value.at(0).isAdd
          isEdit.value =  buttonrole.value.at(0).isEdit
          isDelete.value =  buttonrole.value.at(0).isDelete

          console.log(buttonrole.value)
      })
    }

async function fetchDatas(){
    axios.get("https://localhost:7168/api/Branch/isDelete/Branches")
      .then((res)=>
      {
        branches.value = res.data
        setTimeout(function(){
        $('#branches').DataTable(
          {
                  retrieve: true,
                  pagingType: 'full_numbers',
                  pageLength: 5,
                  processing: true,
                  dom: 'Bfrtip',
                      buttons: ['csv', 'print']
            }
            
        );
        },
          1000
          );
      })
  
    }

  async function fetchData(){
    axios.get("https://localhost:7168/api/User/isDelete/Userlist")
      .then((res)=>
      {
        users.value = res.data
        setTimeout(function(){
        $('#userlist').DataTable(
            {
                  pagingType: 'full_numbers',
                  pageLength: 5,
                  processing: true,
                 
                  dom: 'Bfrtip',
                      
                      buttons: 
                      [
                      'csv', 'print'
                      ],
            }
        );
        },
          1000
          );
      })
    }
    
    function view(user)
      {
        localStorage.USERID = user.id
        localStorage.USERNAME = user.username
        localStorage.FULLNAME = user.firstname +user.lastname
        localStorage.USERTYPE = user.userType
        localStorage.ACCTTYPE = user.accountType
       router.push('/AddUserBranch')
      
      }


</script>

<style scoped>
.branchtable
{
  border: 1px solid;
  width: 100%;
}

</style>