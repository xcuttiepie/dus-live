<template>
  <head>
<title>Document</title>
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
                      <h3 class="page-title"> Document </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active"><router-link to='/DashboardView'>Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Maintenance</li>
                  <li class="breadcrumb-item active">Document</li>
                </ol>
              </nav>
              </div>
                
                    <button type="button" class="button-1" data-toggle="modal" data-target="#adddocument" data-whatever="@getbootstrap" v-if="isAdd == 1"><i class="fa-solid fa-plus"></i> Create New Document</button>
                        <div class="modal fade" id="adddocument" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header" style="background-color: #0090e7; ">
                                <h5 class="modal-title" id="exampleModalLabel"><i class="fa-solid fa-file-invoice"></i> Add Document</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
                                  
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <form>
                                  <div class="login-form">
                                    <input type="hidden" v-model="id" placeholder="">
                                        <div class="branchcode">
                                          
                                          <label for="document" class="documents">Document Name: </label>
                                          <input type="text" v-model="documentname" class="documentname">
                                        </div><br>

                                        <div class="status">
                                        <label for="email" style="font-size:20px;">Status:</label>
                                        <select name="status" id="status" class="statuss">
                                          <option selected="true" disabled="disabled" >Active</option>   
                                        </select>
                                        </div>
                                        </div>
                                </form>
                              </div>
                              <div class="modal-footer">
                                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                                <button type="button" class="btn btn-primary p-2" @click="sbmt">Upload</button>
                                <button type="button" class="btn btn-danger p-2" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div><br>

                    <div class="table-responsive">
                      <table class="table" id="example1">
                        <thead>
                          <tr>
                                  <th>ID</th>
                                  <th>Document Name</th>
                                  <th>Status</th>
                                  <th>Created By</th>
                                  <th>Created Date</th>
                                  <th>Modified By</th>
                                  <th>Modified Date</th>
                                  <th>Action</th>
                                  
                          </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(permit, index) in permits" :key="index">
                        <td>{{permit.id}}</td>
                        <td>{{permit.name}}</td>
                        <td>{{permit.status}}</td>
                        <td>{{permit.createdBy}}</td>
                        <td>{{permit.createdDate}}</td>
                        <td>{{permit.modifiedBy}}</td>
                        <td>{{permit.modifiedDate}}</td>
                        <td>
                        
                        <button type="button" class = "btn btn-info ml-2" data-toggle="modal" data-target="#updatedocument" data-whatever="@getbootstrap" @click="edits(permit)" v-if="isEdit == 1"><i class="fa-solid fa-pen-to-square"></i></button>
                        <div class="modal fade" id="updatedocument" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header" style="background-color: #0090e7; ">
                                <h5 class="update" id="exampleModalLabel"><i class="fa-solid fa-pen-to-square"></i> Update Document</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
                                  
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <form>
                                  <div class="login-form">
                                    <input type="hidden" v-model="id" placeholder="">
                                        <div class="branchcode">
                                          
                                          <label for="document" class="documentnames">Document Name: </label>
                                          <input type="text" v-model="dcmntnm" class="inputdocument">
                                          
                                        </div><br>
                                        
                                  <div class="status">
                                        <label for="email" class="statuss1">Status:</label>
                                        <select v-model="sttstyp" class="stats1">
                                          <option class="trues" value="" selected disabled="disabled">-Select User Status-</option>    
                                          <option class="true"  value="Active">Active</option>
                                          <option class="true" value="Inactive">Inactive</option>
                                        </select>
                                        </div>          
      
                                        </div>
                                </form>
                              </div>
                              <div class="modal-footer">
                                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                                <button type="button" class="btn btn-primary p-2" @click="save">Save</button>
                                <button type="button" class="btn btn-danger p-2" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button @click="deletes(permit)" class = "btn btn-danger ml-2" type="delete" v-if="isDelete == 1"><i class="fa-solid fa-trash"></i></button>
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
import SideNav from './SideNav.vue';
import TopNavView from './TopNavView.vue';
import { connecttoapi } from '../services/httpService'
import axios from 'axios'
import router from '@/router';
import {ref,onMounted} from 'vue'

const documentname = ref('')
const status = 'A'
const permits = ref([])
const id = ref('')
const EmailID = localStorage.EmailID
const defaultdelete = 1
const inactive = 'I'

const Swal = require('sweetalert2')
const ID = ref('')
const dcmntnm = ref('')
const sttstyp = ref([])
const status1 =  'A'
const status2 = 'I'

const buttonrole = ref([])
const isDelete = ref('')
const isAdd = ref('')
const isEdit = ref('')
 const menu = "Document"

  
onMounted(() =>{
      fetchData()
      fetchButton()
     /* document.getElementById("maintenance").classList.remove("collapse");
      document.getElementById("ui-basic").classList.add("show");
      document.getElementById("docu").classList.add("active");
      document.getElementById("mainID").classList.add("active"); */

      
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
    axios.get("https://localhost:7168/api/Document/isDelete/Document")
      .then((res)=>
      {
        permits.value = res.data
        setTimeout(function(){
        $('#example1').DataTable(
            {
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
function sbmt()
  {
    if(documentname.value == "")
    {
      const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2500,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                  })
                  Toast.fire({
                    icon: 'info',
                    title: 'Fill up all details.'
                  })

    }
    else
    {
        axios.post('https://localhost:7168/api/Document/Inserting/Branch', {
              Name: documentname.value,
              Status: status,
              createdBy: EmailID
            })
            .then(function(response) 
            {
              console.log(JSON.stringify(response.data));
              if(response.data == "Data Inserted" )
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
                    icon: 'success',
                    title: 'Data Inserted'
                  }).then(function(){
                   location.reload()
                });
         
            
              }
              
      })
    }
    
 }
 
 function edits(permit)
 {
    localStorage.PermitId = permit.id
    localStorage.Permitnm = permit.name
    localStorage.Permitst = permit.status


    const updatedprmtd = localStorage.PermitId
    const updatedprmtnm =  localStorage.Permitnm 
    const updatedstts = localStorage.Permitst 

    if( updatedstts == 'A')
    {
      sttstyp.value = "Active"
      ID.value = updatedprmtd
      dcmntnm.value = updatedprmtnm
    }
    else if(updatedstts == 'I')
    {
      sttstyp.value = "Inactive"
      ID.value = updatedprmtd
      dcmntnm.value = updatedprmtnm
    }

      

}

function save(){
        if( sttstyp.value == "Active")
        {
            const statustype = status1
              axios({
              method: 'post',
              url: 'https://localhost:7168/api/Document/Update/Document/Table',
              data: 
              {
                id:  ID.value,
                name: dcmntnm.value,
                status: statustype,
                modifiedBy: EmailID,

              }
            })
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
                    title: 'Successfully Updated'
                  }).then(function(){
                    location.reload();
                });
                }
        else if( sttstyp.value == "Inactive")
        {
          const statustype = status2
            axios({
            method: 'post',
            url: 'https://localhost:7168/api/Document/Update/Document/Table',
            data: 
            {
              id:  ID.value,
              name: dcmntnm.value,
              status: statustype,
              modifiedBy: EmailID,
            }
          })
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
                    title: 'Successfully Updated'
                  }).then(function(){
                    location.reload();
                });
        }

        else{
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
                    title: 'No Data Changes'
                  }).then(function(){
                    location.reload();
                });
        }
  }
 function deletes(permit){
    localStorage.Id = permit.id
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
          url: 'https://localhost:7168/api/Document/Delete/Document/Table',
          data: 
          {
            status: inactive,
            isDelete: defaultdelete,
            modifiedBy: EmailID,
            id: id.value
            
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

<style scoped>
.Swal{
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
    padding-top: 20px;
}
.btns
{
  color: #ffffff;
    font-size: 0.9375rem;
    line-height: 1;
    font-weight: normal;
    cursor: pointer;
    background-color: #0090e7;
    border-color: #0090e7;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border-radius: 0.1875rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    text-transform: none;
    overflow: visible;

    padding: 10px;
}
.dataTables_wrapper label[data-v-a3a988cc] {
    font-size: 20px;

}
.documentname
{

  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
.statuss1
{
  margin-left: -280px;
}

.update , .documentnames , .stats1
{
  color: white;
  font-size: 20px;
}

.inputdocument
{
  padding: 5px;
  margin-left: 10px;
  margin-top: 1px;
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}

.trues
{
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
.stats1
{
  width: 30%;
  height: 10%;
  font-size: 15px;
  margin-left: 230px;
  margin-top: -30px;
  outline: none;
  outline-width: 0;
  outline-color: transparent;
  box-shadow: none;
  outline-style: none;
}
.close
{
color: red;
}
.documentname{
  margin-left: 10px;
}

.statuss
{
  margin-left: 106px;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
    padding: 7px;
    width: 30%;
    margin-top: -52px;
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
  .btns1
  {
    color: #ffffff;
    font-size: 0.9375rem;
    line-height: 1;
    font-weight: normal;
    cursor: pointer;
    background-color: gray;
    border-color:gray;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border-radius: 0.1875rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    text-transform: none;
    overflow: visible;

    padding: 10px;
  }
</style>