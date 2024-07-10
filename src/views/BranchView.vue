<template>
  <head>
  <title>Branch</title>
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
                      <h3 class="page-title"> BRANCH </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active"><router-link to='/DashboardView'>Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Maintenance</li>
                  <li class="breadcrumb-item active">Branches</li>
                </ol>
              </nav>
              </div>

                      <button type="button" class="button-1" data-toggle="modal" data-target="#createbranch" data-whatever="@getbootstrap" v-if="isAdd == 1"><i class="fa-solid fa-plus"></i> Create New Branch</button>
                          <div class="modal fade" id="createbranch" tabindex="-1" role="document" aria-labelledby="examplecreatebranch" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header" style="background-color: #0090e7; ">
                                  <h5 class="modal-title" id="examplecreatebranch"><i class="fa-solid fa-code-branch"></i> Add Branch</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <input type="hidden" v-model="id" placeholder="">
                                  <input type="hidden" v-model="ids" placeholder="">
                                  <form>
                                    <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl6">Branch Code: </label>
                                              <input style="font-size:20px;" type="text" v-model="branchcode" class="branchnames4">
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl7">Branch Name: </label>
                                              <input style="font-size:20px;" type="text" v-model="branchname" class="branchnames5">
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl8">Branch Address: </label>
                                              <textarea style="font-size:20px;" class="branchnames6" v-model="branchaddress" rows="4" cols="20"></textarea>
                                            </div>
                                           </div>
                                                
                                            <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl9" >Status: </label><br>
                                              
                                                  <select style="font-size:20px;" name="status"  class="statusss">
                                                  <option selected="true" disabled="disabled" >Active</option>   
                                                </select>
                                                
                                            </div>
                                           </div>
                                  </form>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-primary p-2" @click="sbmt">Upload</button>
                                  <button type="button" class="btn btn-danger p-2" data-dismiss="modal">Close</button>
                                  
                                </div>
                              </div>
                            </div>
                          </div><br>
  
                      <div class="table-responsive">
                        <table class="table" id="branch">
                          <thead>
                            <tr>
                                    
                                    <th>Branch Code</th>
                                    <th>Branch Name</th>
                                    <th>Branch Address</th>
                                    <th>Created By</th>
                                    <th>Created Date</th>
                                    <th>Action</th>
                                
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(branch, index) in branches" :key="index">
                          
                          <td>{{branch.branchcode}}</td>
                          <td>{{branch.branchname}}</td>
                          <td style="white-space: nowrap; text-overflow:ellipsis; overflow: hidden; max-width:26ch;">{{branch.branchAddress}}</td>
                          <td>{{branch.createdBy}}</td>
                          <td>{{branch.createdDate}}</td>
                          <td>
                          <button  type="button" class="btn btn-info ml-2" @click="view(branch)" data-toggle="modal" data-target="#viewbranch" data-whatever="@getbootstrap"><i class="fa-solid fa-eye"></i></button>
                          <div class="modal fade" id="viewbranch" tabindex="-1" role="branch" aria-labelledby="viewModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="branch">
                              <div class="modal-content">
                                <div class="modal-header" style="background-color: #0090e7; ">
                                  <h5 class="modal-title" id="viewModalLabel" style="color: white; "><i class="fa-solid fa-eye"></i> View Branch</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <form>
                                    <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl10">Branch Code: </label>
                                              <input style="font-size:20px;" type="text" v-model="viewbc" class="branchnames7" disabled>
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl11">Branch Name: </label>
                                              <input style="font-size:20px;" type="text" v-model="viewbn" class="branchnames8" disabled>
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl12">Branch Address: </label>
                                              <textarea style="font-size:20px;" class="branchnames9" v-model="viewba" rows="4" cols="20" disabled></textarea>
                                            </div>
                                           </div>
                                                
                                            <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl13" >Status: </label><br>
                                              
                                                  <select style="font-size:20px;" name="status" id="status" class="branchnames10" v-model="viewss" disabled>
                                                  <option selected="true" disabled="disabled" >Active</option>  
                                                  <option selected="true" disabled="disabled" >Inactive</option>  
                                                </select>
                                                
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl14">Created By: </label>
                                              <input style="font-size:20px;" type="text" v-model="viewcby" class="branchnames11" disabled>
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl14">Created Date: </label>
                                              <input style="font-size:20px;" type="text" v-model="viewcbdt" class="branchnames13" disabled>
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl14">Modified By: </label>
                                              <input style="font-size:20px;" type="text" v-model="viewmdfby" class="branchnames14" disabled>
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label style="font-size:20px;" class="lbl15">Modified Date: </label>
                                              <input style="font-size:20px;" type="text" v-model="viewmdfdt" class="branchnames12" disabled>
                                            </div>
                                           </div>
                                  </form>


                                </div>
                                <div class="modal-footer">
                                 
                           
                                  <button type="button" class="btn btn-danger p-2" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>


                          <!--EDIT BUTTON MODAL-->
                          <button v-if="isEdit == 1" type="button" class="btn btn-warning ml-2" @click="edits(branch)" data-toggle="modal" data-target="#updatebranch" data-whatever="@getbootstrap"><i class="fa-solid fa-pen-to-square"></i></button>
                          <div class="modal fade" id="updatebranch" tabindex="-1" role="branch" aria-labelledby="updateModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="branch">
                              <div class="modal-content">
                                <div class="modal-header" style="background-color: #0090e7; ">
                                  <h5 class="modal-title" id="updateModalLabel"  style="color: white; "><i class="fa-solid fa-pen-to-square"></i> Update Branch</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <input type="hidden" v-model="ID" placeholder="">
                                  <form>
                                    <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label class="lbl2">Branch Code: </label>
                                              <input style="font-size:20px;" type="text" v-model="brnchcd" class="branchnames1">
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label class="lbl3">Branch Name: </label>
                                              <input style="font-size:20px;"  type="text" v-model="brnchnm" class="branchnames2">
                                            </div>
                                           </div>

                                           <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label class="lbl4">Branch Address: </label>
                                              <textarea style="font-size:20px;" class="branchnames3" v-model="brnchddrss" rows="4" cols="20"></textarea>
                                            </div>
                                           </div>
                                                
                                            <div class="col-sm-6 no-pading">
                                            <div class="form-group">
                                              <label class="lbl1">Status: </label><br>
                                                <select v-model="sttstype" class="statuss" style="font-size:20px;" >
                                                    <option class="opts" value="" selected disabled="disabled">-Select User Status-</option>    
                                                    <option class="opts" value="Active">Active</option>
                                                    <option class="opts" value="Inactive">Inactive</option>
                                                </select>
                                            </div>
                                           </div>
                                  </form>
                                </div>
                                <div class="modal-footer">
                                  <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                                  <button type="button" class="btn btn-primary p-2" @click="save">Save</button>
                                  <button type="button" class="btn btn-danger p-2" data-dismiss="modal" @click="closeedit">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button  v-if="isDelete == 1" @click="deletes(branch)"  type="delete" class="btn btn-danger ml-2"><i class="fa-solid fa-trash"></i></button>
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
import axios from 'axios'
import {ref , onMounted} from 'vue'
import { connecttoapi } from '../services/httpService'
import router from '@/router';

const Swal = require('sweetalert2')
const branchcode = ref('')
const branchname = ref('')
const branchaddress = ref('')
const branches = ref([])
const active = 'A'
const inactive = 'I'
const EmailID = localStorage.EmailID
const defaultdelete = 1
const id = ref('')
const ids = ref('')

const ID = ref('')
const brnchcd = ref('')
const brnchnm = ref('')
const brnchddrss = ref('')
const sttstype = ref([])
const status1 =  'A'
const status2 = 'I'

 const viewbc = ref('')
 const viewbn = ref('')
 const viewba = ref('')
 const viewss = ref('')
 const viewcby = ref('')
 const viewcbdt = ref('')
 const viewmdfby = ref('')
 const viewmdfdt = ref('')

 const buttonrole = ref([])
 const isDelete = ref('')
  const isAdd = ref('')
  const isEdit = ref('')
 const menu = "Branches"

onMounted(() =>{
      fetchData()
      fetchButton()
     /* document.getElementById("maintenance").classList.remove("collapse");
      document.getElementById("ui-basic").classList.add("show");
      document.getElementById("bra").classList.add("active");
      document.getElementById("mainID").classList.add("active");*/
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
    axios.get("https://localhost:7168/api/Branch/isDelete/Branches")
      .then((res)=>
      {
        branches.value = res.data
        setTimeout(function(){
        $('#branch').DataTable(
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
      if(branchcode.value == "" || branchname.value == "" || branchaddress.value == "")
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
          axios.post('https://localhost:7168/api/Branch/Inserting/Branch', {
                Branchcode: branchcode.value,
                Branchname: branchname.value,
                BranchAddress: branchaddress.value,
                createdBy: EmailID,
                Status: active,
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
                    timer: 1000,
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
                else if(response.data == "Existing Branch Code" )
                {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                  })
                  Toast.fire({
                    icon: 'info',
                    title: 'Existing Branch Code'
                  })
                }
                else if(response.data == "Existing Branch Name" )
                {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                  })
                  Toast.fire({
                    icon: 'info',
                    title: 'Existing Branch Name'
                  })
                }
        })
      }
   }

function edits(branch){
    localStorage.BranchId = branch.id
    localStorage.branchcode = branch.branchcode
    localStorage.branchname = branch.branchname
    localStorage.branchAddress = branch.branchAddress
    localStorage.branchst = branch.status
    

    const updatedbrnchcd = localStorage.branchcode
    const updatedbrnchnm = localStorage.branchname
    const updatedbrnchddrss = localStorage.branchAddress
    const updatedbrnchst = localStorage.branchst
    const updatedId =  localStorage.BranchId 
    
    if( updatedbrnchst == 'A')
    {
      sttstype.value = "Active"
      ID.value = updatedId
      brnchcd.value = updatedbrnchcd
      brnchnm.value = updatedbrnchnm
      brnchddrss.value = updatedbrnchddrss
      
    }
    else if(updatedbrnchst == 'I')
    {
      sttstype.value = "Inactive"
      ID.value = updatedId
      brnchcd.value = updatedbrnchcd
      brnchnm.value = updatedbrnchnm
      brnchddrss.value = updatedbrnchddrss
      
   }
}
  

function view(branch)
{
  viewss.value = branch.status
  const st1 = 'Active'
  const st2 = 'Inactive'

if(viewss.value == 'A'){
viewss.value = st1
viewbc.value = branch.branchcode
viewbn.value = branch.branchname
viewba.value = branch.branchAddress
viewcby.value = branch.createdBy
viewcbdt.value = branch.createdDate
viewmdfby.value = branch.modifiedBy
viewmdfdt.value = branch.modifiedDate
}
else if(viewss.value == 'I'){
viewss.value = st2
viewbc.value = branch.branchcode
viewbn.value = branch.branchname
viewba.value = branch.branchAddress
viewcby.value = branch.createdBy
viewcbdt.value = branch.createdDate
viewmdfby.value = branch.modifiedBy
viewmdfdt.value = branch.modifiedDate
}
}

function save(){

localStorage.BranchId  = ID.value
localStorage.branchAddress = brnchcd.value
localStorage.branchname = brnchnm.value
localStorage.branchcode = brnchddrss.value

    if( sttstype.value == "Active")
    {
        const sttstype = status1
          axios({
          method: 'post',
          url: 'https://localhost:7168/api/Branch/Update/Branch/Table',
          data: 
          {
            id:  ID.value,
            branchcode: brnchcd.value,
            branchname: brnchnm.value,
            branchAddress: brnchddrss.value,
            status: sttstype,
            modifiedBy: EmailID
            
          }
        });
        const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                  })
                  Toast.fire({
                    icon: 'success',
                    title: 'Successfully Updated'
                  }).then(function(){
                  location.reload()
                });
    }

    else if( sttstype.value == "Inactive")
    {
      const sttstype = status2
        axios({
        method: 'post',
        url: 'https://localhost:7168/api/Branch/Update/Branch/Table',
        data: 
        {
          id:  ID.value,
          branchcode: brnchcd.value,
          branchname: brnchnm.value,
          branchAddress: brnchddrss.value,
          status: sttstype,
          modifiedBy: EmailID
        }
      })
      const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                  })
                  Toast.fire({
                    icon: 'success',
                    title: 'Successfully Updated'
                  }).then(function(){
                   location.reload()
                });
      }
    }

function deletes(branch){
    localStorage.Id = branch.branchcode
    localStorage.Ids = branch.id
    id.value = localStorage.Id
    ids.value = localStorage.Ids
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
          url: 'https://localhost:7168/api/Branch/Delete/Branch/Table',
          data: 
          {
            status: inactive,
            isDelete: defaultdelete,
            modifiedBy: EmailID,
            branchcode: id.value
            
          }
        })
        axios({ 
          method: 'post',
          url: 'https://localhost:7168/api/Branch/Delete/Users/Branches',
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

<style scoped>
.branchnames4 , .branchnames5 , .branchnames6 , .statusss
{
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
input:disabled {
  background: rgb(253, 251, 251);
  opacity: 1px;
}
.branchnames11[data-v-58b94cbe][data-v-58b94cbe][data-v-58b94cbe] {
    margin-left: 59px;
    cursor: not-allowed;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}


.branchnames13[data-v-58b94cbe] {
    margin-left: 39px;
    cursor: not-allowed;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}

.branchnames14[data-v-58b94cbe] {
    margin-left: 54px;
    cursor: not-allowed;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}


.branchnames7[data-v-58b94cbe] {
    margin-left: 42px;
    cursor: not-allowed;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}
.branchnames8[data-v-58b94cbe][data-v-58b94cbe] {
    margin-left: 35px;
    cursor: not-allowed;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}

.branchnames9[data-v-58b94cbe][data-v-58b94cbe] {
    margin-left: 15px;
    width: 245px;
    cursor: not-allowed;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}

.branchnames10[data-v-58b94cbe][data-v-58b94cbe] {
    margin-left: 167px;
    margin-top: -39px;
    width: 247px;
    background: white;
    color: black;
    cursor: not-allowed;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}

.branchnames12[data-v-58b94cbe][data-v-58b94cbe][data-v-58b94cbe] {
    margin-left: 35px;
    cursor: not-allowed;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}
.lbl13
{
  margin-left: -144px;
}
.branchnames4
{
  width: 450px;
}
.branchnames5
{
  width: 450px;
}
.branchnames6
{
  width: 450px;
}
.statusss
{
  width: 250px;
}
.opts
{
  color: black;
  background: white;
}
.branchnames1
{
  margin-left: 50px;
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}

.branchnames2
{
  margin-left: 45px;
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
.branchnames3
{
  margin-left: 25px;
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
.dataTables_wrapper label[data-v-58b94cbe] {
    font-size: 20px;
    color: white;
}
.lbl2[data-v-58b94cbe] {
    margin-left: 8px;
}
.lbl3[data-v-58b94cbe] {
    margin-left: 8px;
}
.lbl4[data-v-58b94cbe][data-v-58b94cbe] {
    margin-left: 8px;
    margin-top: 19px;
}
.lbl1
{
  margin-left: -80px;
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
.true
{
  color: white;
}
.close
{
  color: red;
}

.statuss
{
  margin-top: -35px;
 margin-left: 185px;
 width: 80%;
 border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
  .close{
    color: red;
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