<template>
  <head>
<title>User</title>
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
                  <li class="breadcrumb-item active">Users</li>
                </ol>
              </nav>
              </div>
                  <input type="hidden" v-model="id" placeholder="">

                  <button @click="adduser" class ="button-1" v-if="isAdd == 1"><i class="fa-solid fa-plus"></i> Create New User</button>
                    <div class="table-responsive">
                      <table class="table" id="example">
                        <thead>
                          <tr>
                                  <th>ID</th>
                                  <th>Username</th>
                                  <th>Full Name</th>
                                  <th>Contact Number</th>
                                  <th>Address</th>
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
                        <td>{{user.contactNumber}}</td>
                        <td>{{user.address}}</td> 
                        <td>{{user.userType}}</td>
                        <td>{{user.accountType}}</td>
                        <td>
                        <button @click="view(user)" class = "btn btn-info ml-2"><i class="fa-solid fa-eye"></i></button>
                        <button v-if="isEdit == 1"  @click="edits(user)" class = "btn btn-warning ml-2" type="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button v-if="isDelete == 1" @click="deletes(user)" class = "btn btn-danger ml-2" type="delete"><i class="fa-solid fa-trash"></i></button>

                        </td>
                        <!--<td>
                          {{list.createdBy}}
                        </td>-->
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
import SideNav from './SideNav.vue';
import TopNavView from './TopNavView.vue';
import axios from 'axios'
import {ref, onMounted} from 'vue'
import router from '@/router';
import { connecttoapi } from '../services/httpService'
const Swal = require('sweetalert2')
const users = ref([])
const id = ref('')

const buttonrole = ref([])
const isDelete = ref('')
  const isAdd = ref('')
  const isEdit = ref('')
 const menu = "Users"


onMounted(() =>{
      fetchData()
      fetchButton()

      /*document.getElementById("maintenance").classList.remove("collapse");
      document.getElementById("ui-basic").classList.add("show");
      document.getElementById("mainID").classList.add("active");
      document.getElementById("usr").classList.add("active");*/
    
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

  async function fetchData(){
    axios.get("https://localhost:7168/api/User/isDelete/Userlist")
      .then((res)=>
      {
        users.value = res.data
        setTimeout(function(){
        $('#example').DataTable(
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
function view(user){
    localStorage.srnm = user.username
    localStorage.ml = user.email
    localStorage.lstnm = user.lastname
    localStorage.frstnm = user.firstname
    localStorage.mddlnm = user.middlename
    localStorage.cntctnmbr = user.contactNumber
    localStorage.ddrss = user.address
    localStorage.sttts = user.status
    localStorage.crtdby = user.createdBy
    localStorage.crtddte = user.createdDate
    localStorage.mdfdby = user.modifiedBy
    localStorage.mdfddt = user.modifiedDate
    localStorage.srtyp = user.userType
    localStorage.ccnttype = user.accountType
    router.push('/UserlistView')
}

 function adduser(){
  router.push('/RegisterUser')
 }
 
 function edits(user)
 {
    localStorage.srID = user.id
    localStorage.srnm = user.username
    localStorage.ml = user.email
    localStorage.lstnm = user.lastname
    localStorage.frstnm = user.firstname
    localStorage.mddlnm = user.middlename
    localStorage.cntctnmbr = user.contactNumber
    localStorage.ddrss = user.address
    localStorage.sttts = user.status
    localStorage.srtyp = user.userType
    localStorage.ccnttype = user.accountType
    router.push('/UserlistUpdate')
 }


 function deletes(user){
    localStorage.Id = user.id
    const defaultdelete = 1
    const inactive = 'I'
    const EmailID = localStorage.EmailID
    id.value = localStorage.Id
    
    Swal.fire({
              title: "<h1 style='color:red;font-size:25px'>Are you sure?</h1>",
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) 
              {
                
axios({ 
          method: 'post',
          url: 'https://localhost:7168/api/User/Delete/Userlist/Table',
          data: 
          {
            status: inactive,
            isDelete: defaultdelete,
            modifiedBy: EmailID,
            id: id.value
            
          }
        });
        axios({ 
          method: 'post',
          url: 'https://localhost:7168/api/Branch/Delete/User/Branch',
          data: 
          {
            status: inactive,
            isDelete: defaultdelete,
            modifiedBy: EmailID,
            branchCode: ids.value
            
          }
        });
        const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 900,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                  })
                  Toast.fire({
                    icon: 'error',
                    title: 'Successfully Deleted'
                  }).then(function(){
                      location.reload();
                  });
              }
              else if(!result.isConfirmed)
              {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 900,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                  })
                  Toast.fire({
                    icon: 'info',
                    title: 'Cancelled'
                  })
              }
            })
  }
</script>

<style>
.close
{
color: red;
}
.branchcodes
{
margin-left: 25px;
}
.branchnames
{
margin-left: 20px;
}
.branchaddresss
{
margin-left: 4px;
}

.statuss
{
margin-left: 72px;
}



.fulldetails , .file , .documents
{
    font-size: 20px;
  }
  .view , .edit , .delete , .menu-title
  {
  cursor: pointer; 
  }
  .close{
    color: red;
  }
  .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
      cursor: default;
      color: white !important;
      border: 1px solid transparent;
      background: transparent;
      box-shadow: none;
  }
  .dataTables_wrapper .dataTables_paginate .paginate_button {
      box-sizing: border-box;
      display: inline-block;
      min-width: 1.5em;
      padding: 0.5em 1em;
      margin-left: 2px;
      text-align: center;
      text-decoration: none !important;
      cursor: pointer;
      color: white !important;
      border: 1px solid transparent;
      border-radius: 2px;
  }
  .dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {
      color: #e21c1c;
  }
    .dataTables_wrapper .dataTable thead .sorting:before, .dataTables_wrapper .dataTable thead .sorting:after, .dataTables_wrapper .dataTable thead .sorting_asc:before, .dataTables_wrapper .dataTable thead .sorting_asc:after, .dataTables_wrapper .dataTable thead .sorting_desc:before, .dataTables_wrapper .dataTable thead .sorting_desc:after, .dataTables_wrapper .dataTable thead .sorting_asc_disabled:before, .dataTables_wrapper .dataTable thead .sorting_asc_disabled:after, .dataTables_wrapper .dataTable thead .sorting_desc_disabled:before, .dataTables_wrapper .dataTable thead .sorting_desc_disabled:after {
      line-height: 2.5;
      font-family: Material Design Icons;
      font-size: .65rem;
      color: red;
  }
    .dataTables_wrapper .dataTables_filter input
    {
      border:1px solid #aaa;border-radius:3px;padding:5px;background-color:white;margin-left:3px
    }
    .dataTables_wrapper label {
      font-size: .8125rem;
      color: white;
  }
  /*truncate*/
  .limit{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  /* FOR TABLES */
  .table{
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 14px;
    min-width: 100%;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    text-align: center;
  }
  .table, th, td {
    border: 1px solid #ddd;
  }
  
  table thead tr{
    color: black;
    background: pink;
    text-align: center;
   
  }
  .table th, .table td{
    padding: 12px 15px;
    text-align: center;
  }
  
  tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper)
  {
      background: #e6e6e6;
      cursor: pointer; 
  }
  
  .button-1 {
    background-color: pink;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
  
    outline: none;
    padding: 10px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-left: 0px;
    margin-bottom: 20px;
  }
  .button-1:hover 
  {
    background-color:#ff6680;
  
  }
  
  
</style>