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
            <div class="page-header">
              <h3 class="page-title">  UPDATE USER RIGHT'S </h3>
              <input type="hidden" v-model="hts">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active"><router-link to='/AssignUserbranch' href="#" @click="s"> Appoint User Right´s</router-link></li>
                  <li class="breadcrumb-item active" aria-current="page">Add User-Branch-Menu-Right's</li>
                </ol>
              </nav>
            </div>
            <div class="row">
              <div class="col-md-6 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">User Details</h4>
                    <p class="card-description">Basic Information </p>
                    <form class="forms-sample">
              
                      <div class="form-group">
                        <label for="exampleInputUsername1">User ID:</label>
                        <input type="text" class="form-control" v-model="useid" disabled>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Username:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" v-model="usrnm" disabled>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Fullname: </label>
                        <input type="email" class="form-control" id="exampleInputConfirmPassword1" v-model="fllnm" disabled>
                     
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">User Role:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"  v-model="usrl" disabled>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">User Type:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" v-model="srtyp" disabled>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 grid-margin stretch-card">
                
                <div class="card">
                  <div class="card-body">
                    <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" style="color: white; font-size: 18px;" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <i class="fa-solid fa-code-branch"></i>  Assign User-Branch
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <button type="button" class="button-1" data-toggle="modal" data-target="#adddocument" data-whatever="@getbootstrap"><i class="fa-solid fa-plus"></i> Assign Branch</button>
                        <div class="modal fade" id="adddocument" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header" style="background-color: #0090e7;">
                                <h5 class="modal-title" id="exampleModalLabel" ><i class="fa-solid fa-pen-to-square"></i> Please select</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
                                  
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <form>
                                  <div class="login-form">
                        
                                    <div class="form-item-email">
                                   
                                            <label for="document" class="documents">Choose Branches: </label><br>
                                            <div class="drop-down">
                                              <select v-model="branches" name="document"  id="documents" class="js-example-basic-single" @change="switchSelectBranch($event)">
                                                <option value="" selected disabled>---Select Branches---</option>
                                                <option v-for="(isDeletes, index) in isDelete" :key="index" >{{isDeletes.branchname}}</option>
                                              </select>
                                      </div>
                                    </div><br>
     
                                        <div class="status">
                                        <label class="asd" for="email" style="font-size:20px;">Status:</label><br>
                                        <select name="status" id="status" class="statuss">
                                          <option selected="true" disabled="disabled" >Active</option>   
                                        </select>
                                        </div>
                                        </div>
                                </form>
                              </div>
                              <div class="modal-footer">
                          
                                <button type="button" class="btn btn-primary p-2" @click="save()">Save</button>
                                <button type="button" class="btn btn-danger p-2" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>


                   <br><h4 class="card-title">List Of your Branches</h4>
                    <p class="card-description"> Basic Information</p>
                    <form class="forms-sample">
                      <div class="form-group row">
                        <table class="table">
                          <thead>
                          <tr>
                            <th>Branch Code</th>
                            <th>Branch Name</th>
                            <th>Action</th>
                          </tr>
                          </thead>
                        <tbody>
                          <tr v-for="(branch, index) in branchs" :key="index">
                          <td>{{branch.branchCode}}</td>
                          <td>{{branch.branchName}}</td>
                          <td><button @click="deletes(branch)" class = "btn btn-danger ml-2" type="button"><i class="fa-solid fa-trash"></i></button></td>
                          </tr> 
                        </tbody>
                      </table>
                      </div>
                    </form>
      </div>
    </div>
  </div>
  
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <!--assign menus-->
        <button class="btn btn-link collapsed" style="color: white; font-size: 18px;" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <i class="fa-solid fa-bars" ></i> Assign User-Menu Right's
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
                      <button type="button" class="button-1" data-toggle="modal" data-target="#menus" data-whatever="@getbootstrap"><i class="fa-solid fa-plus"></i> Assign Menus</button>
                        <div class="modal fade" id="menus" tabindex="-1" role="dialog" aria-labelledby="examplemenus" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header" style="background-color: #0090e7;">
                                <h5 class="modal-title" id="examplemenus" ><i class="fa-solid fa-pen-to-square"></i> Please select</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
                                  
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <form>
                                  <div class="login-form">
                        
                                    <div class="form-item-email">
                                   
                                            <label for="document" class="documents">Choose Menus: </label><br>
                                            <div class="drop-down">
                                              <select v-model="rights" name="document"  id="documents" class="js-example-basic-single" @change="switchSelectMenus($event)">
                                                <option value="" selected disabled>---Select Menus---</option>
                                                <option v-for="(isDeleteMenus, index) in isDeleteMenu" :key="index" >{{isDeleteMenus.menus}}</option>
                                              </select>
                                      </div>
                                    </div><br>
     
                                        <div class="status">
                                        <label class="asd" for="email" style="font-size:20px;">Status:</label><br>
                                        <select name="status" id="status" class="statuss">
                                          <option selected="true" disabled="disabled" >Active</option>   
                                        </select>
                                        </div>
                                        </div>
                                </form>
                              </div>
                              <div class="modal-footer">
                                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                                <button type="button" class="btn btn-primary p-2" @click="savemenus()">Save</button>
                                <button type="button" class="btn btn-danger p-2" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div> 
                      <br><h4 class="card-title">List of your Menus</h4>
                    <p class="card-description"> Basic Information</p>
                    <form class="forms-sample">
                      <div class="form-group row">
                        <table class="table">
                          <thead>
                          <tr>
                            <th>Menus</th>
                            <th>Un-Assign</th>
                          </tr>
                          </thead>
                        <tbody>
                          <tr v-for="(usermenus, index) in usermenu" :key="index" >
                          <td>{{usermenus.subMenu}}</td>
                          <td><button class ="btn btn-danger ml-2" type="button" @click="removemenu(usermenus)"><i class="fa-solid fa-minus"></i></button></td>
                          </tr> 
                        </tbody>
                      </table>
                      </div>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" id="buttons" style="color: white; font-size: 18px;" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" @click="buttonstay">
          <i class="fa-solid fa-bars" ></i> Assign User-Buttons Right's
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion" >
      <div class="card-body">
       <h4 class="card-title">List Of your Button Rights</h4>
                    <p class="card-description">Instructions</p>
                          <ul>
                            <li style="color: green;">Green Button = Assign</li>
                            <li style="color: red;">Button Red = Un-assign</li>
                         
                          </ul>
                    <form class="forms-sample">
                      <div class="form-group row">
                        <table class="table">
                          <thead>
                          <tr>
                            <th>Menu</th>
                            <th>Add</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                          </thead>
                        <tbody>
                          <tr v-for="(buttons, index) in button" :key="index">
                          <td>{{buttons.menu}}</td>
                          <td><button v-if="buttons.isAdd == 0" class ="btn btn-success ml-2" type="button" @click="addbutton(buttons)"><i class="fa-solid fa-add"></i></button><button v-if="buttons.isAdd == 1" class ="btn btn-danger ml-2" type="button" @click="deleteaddbutton(buttons)"><i class="fa-solid fa-minus"></i></button></td>
                          <td><button v-if="buttons.isEdit == 0" class ="btn btn-success ml-2" type="button"  @click="editbutton(buttons)"><i class="fa-solid fa-add"></i></button><button v-if="buttons.isEdit == 1" class ="btn btn-danger ml-2" type="button" @click="deleteeditbutton(buttons)"><i class="fa-solid fa-minus"></i></button></td>
                          <td><button v-if="buttons.isDelete == 0" class ="btn btn-success ml-2" type="button"  @click="removebutton(buttons)"><i class="fa-solid fa-add"></i></button><button v-if="buttons.isDelete == 1" class ="btn btn-danger ml-2" type="button" @click="deleteremovebutton(buttons)"><i class="fa-solid fa-minus"></i></button></td>
                          </tr> 
                        </tbody>
                      </table>
                      </div>
                    </form>
                      </div>
                    </div>
                    </div>    
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

import SideNav from "./SideNav.vue";
import TopNavView from "./TopNavView.vue";
import { ref , onMounted} from 'vue'
import axios from 'axios'
const useid =  ref('')
const usrnm = ref('')
const fllnm =  ref('')
const usrl =  ref('')
const srtyp = ref('')
const branchs = ref([])
const isDelete = ref([])
const selectbranch = ref('')
const selectmenus = ref('')
const BranchID = ref([])
const menuID = ref([])
const branches=ref([])
const status = "A"
const hts = ref([])
const button = ref ([])
const isDeleteMenu = ref([])
const defaultdelete = 1
const inactive = 'I'
const active = 'A'
const notdeleted = 0
const usermenu = ref([])
const check = ref([])
const Swal = require('sweetalert2')
const Menu = ref ([])
const mainte = 1
const trans = 6
const rights = ref ([])
useid.value = localStorage.USERID 
usrnm.value =  localStorage.USERNAME
fllnm.value  = localStorage.FULLNAME
usrl.value  =  localStorage.USERTYPE
srtyp.value =  localStorage.ACCTTYPE


localStorage.USERID

branches.value = ""
rights.value = ""

const EmailID = localStorage.EmailID
const user = localStorage.USERID


onMounted(() =>{
      fetchBranches()
      fetchBranchEmail()
      myFunction()
      

      fetchMenus()
      fetchMenusID()
      fetchUsermenus()



      fetchuserbutton()
      /*document.getElementById("maintenance").classList.remove("collapse");
      document.getElementById("ui-basic").classList.add("show");
      document.getElementById("mainID").classList.add("active");
      document.getElementById("ssgn").classList.add("active");*/
  })
//FOR BRANCH
function switchSelectBranch($event)
{
  selectbranch.value = $event.target.value;
  localStorage.BranchName = selectbranch.value
  myFunction() 
}


//FETCH USER BUTTON
async function fetchuserbutton(){
axios.get('https://localhost:7168/api/Module/Fetch/Button/User/' + localStorage.USERNAME).then((res) => {
        button.value = res.data
        console.log(button.value)
     
      })
    }


//FETCH BRANCH
async function fetchBranches(){
axios.get('https://localhost:7168/api/Branch/Fetch/NotExistingbranch/' + localStorage.USERNAME).then((res) => {
        isDelete.value = res.data
        console.log(isDelete.value)
      })

      fetchBranchEmail()
                  
    }

//FETCH USER BRANCH
async function fetchBranchEmail(){
axios.get('https://localhost:7168/api/Branch/Fetch/Email/' + localStorage.USERNAME).then((res) => {
        branchs.value = res.data
        console.log(branchs.value)
      })
    }


function myFunction()
{ 
    if(localStorage.BranchName == "")
    {
    }
    else
    {
          //FETCH BRANCHID
          axios.get('https://localhost:7168/api/Branch/Fetch/BranchID/' + localStorage.BranchName).then((res) => {
                  BranchID.value = res.data
                  localStorage.BranchID = BranchID.value.at(0).id
                })        
    }
}
function deletes(branch)
{
localStorage.branchCode = branch.id
hts.value = localStorage.branchCode            
axios({ 
          method: 'post',
          url: 'https://localhost:7168/api/Branch/Delete/UserBranch/rights',
          data: 
          {
            status: inactive,
            isDelete: defaultdelete,
            modifiedBy: localStorage.EmailID,
            id: hts.value
          }
        })
        fetchBranchEmail() 
        fetchBranches()
}

function save()
{

  if(branches.value == "")
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
                    title: 'Please complete all the details.'
                  })
  }

  else
  {
    axios.post('https://localhost:7168/api/Branch/Inserting/Branch/User', {
      branchCode: localStorage.BranchID,
            branchId: localStorage.BranchID,
            userId:  localStorage.USERID,
            emailId:  localStorage.USERID,
            status: status,
            createdBy: localStorage.EmailID,
              }).then(function(response) 
              {
                console.log(JSON.stringify(response.data));
              
              if(response.data == "Data Inserted")
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
                    title: 'Successfully Added'
                  })
                    fetchBranchEmail()
                    fetchBranches()
                }

               else if(response.data == "Data Exisiting")
                {
                  axios.post('https://localhost:7168/api/Branch/Delete/User/Branch', {
                    branchCode: localStorage.BranchID ,
                    emailId: localStorage.USERID ,
                    status: status,
                    isDelete: notdeleted ,
                    modifiedBy:  localStorage.USERID,


              })
              .then(function(response) 
              {
                console.log(JSON.stringify(response.data));
                  
                if(response.data == "Successfully Deleted")
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
                    title: 'Successfully Added'
                  })
                  fetchBranchEmail()
                  fetchBranches()
                }
               });
                }
              })
  }
}

function addbutton(buttons)
{
  const add = 1
  const emailid = localStorage.USERID
  const modified = localStorage.EmailID


                  axios.put('https://localhost:7168/api/Module/Insert/Button/IsAdd', {
                    id:buttons.id,
                    emailId:emailid,
                    isAdd:add,
                    modifiedBy:modified ,
                  }).then(function(response)
                  {
                    console.log(JSON.stringify(response.data));
                    if(response.data == "Data Updated")
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
                            title: 'Successfully Assigned'
                          })
                          fetchuserbutton()
                      }
                      else
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
                            title: 'Not Updated'
                          })
                      }
                  })
                 
}
       

function editbutton(buttons)
{
  const add = 1
  const emailid = localStorage.USERID
  const modified = localStorage.EmailID

                  axios.put('https://localhost:7168/api/Module/Insert/Button/IsEdit', {
                    id:buttons.id,
                    emailId:emailid,
                    isEdit:add,
                    modifiedBy:modified ,
                  }).then(function(response)
                  {
                    console.log(JSON.stringify(response.data));
                    if(response.data == "Data Updated")
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
                            title: 'Successfully Assigned'
                          })
                          fetchuserbutton()
                      }
                      else
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
                            title: 'Not Updated'
                          })
                      }
                  })
                
                }
     



function removebutton(buttons)
{
  const add = 1
  const emailid = localStorage.USERID
  const modified = localStorage.EmailID
                  axios.put('https://localhost:7168/api/Module/Insert/Button/IsDelete', {
                    id:buttons.id,
                    emailId:emailid,
                    isDelete:add,
                    modifiedBy:modified ,
                  }).then(function(response)
                  {
                    console.log(JSON.stringify(response.data));
                    if(response.data == "Data Updated")
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
                            title: 'Successfully Assigned'
                          })
                          fetchuserbutton()
                      }
                      else
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
                            title: 'Not Updated'
                          })
                      }
                  })
                  
                }
function deleteaddbutton(buttons)
{
  const add = 0
  const emailid = localStorage.USERID
  const modified = localStorage.EmailID


                  axios.put('https://localhost:7168/api/Module/Insert/Button/IsAdd', {
                    id:buttons.id,
                    emailId:emailid,
                    isAdd:add,
                    modifiedBy:modified ,
                  }).then(function(response)
                  {
                    console.log(JSON.stringify(response.data));
                    if(response.data == "Data Updated")
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
                            title: 'Successfully Un-Assigned'
                          })
                          fetchuserbutton()
                      }
                      else
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
                            title: 'Not Updated'
                          })
                      }
                  })
                  fetchuserbutton()
}
function deleteeditbutton(buttons)
{
  const add = 0
  const emailid = localStorage.USERID
  const modified = localStorage.EmailID

                  axios.put('https://localhost:7168/api/Module/Insert/Button/IsEdit', {
                    id:buttons.id,
                    emailId:emailid,
                    isEdit:add,
                    modifiedBy:modified ,
                  }).then(function(response)
                  {
                    console.log(JSON.stringify(response.data));
                    if(response.data == "Data Updated")
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
                            title: 'Successfully Un-Assigned'
                          })
                          fetchuserbutton()
                      }
                      else
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
                            title: 'Not Updated'
                          })
                      }
                  })
                  
}
function deleteremovebutton(buttons)
{
  const add = 0
  const emailid = localStorage.USERID
  const modified = localStorage.EmailID
                  axios.put('https://localhost:7168/api/Module/Insert/Button/IsDelete', {
                    id:buttons.id,
                    emailId:emailid,
                    isDelete:add,
                    modifiedBy:modified ,
                  }).then(function(response)
                  {
                    console.log(JSON.stringify(response.data));
                    if(response.data == "Data Updated")
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
                            title: 'Successfully Un-Assigned'
                          })
                          fetchuserbutton()
                      }
                      else
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
                            title: 'Not Updated'
                          })
                          
                      }
                  })
                 
}

//FOR MENUS
function switchSelectMenus($event)
{
  selectmenus.value = $event.target.value;
  localStorage.MenusName = selectmenus.value
  fetchMenusID()
}

//FETCH MENUSID
async function fetchMenusID(){
axios.get('https://localhost:7168/api/Module/Fetch/MenusID/' + localStorage.MenusName).then((res) => {
        menuID.value = res.data
        localStorage.menuID = menuID.value.at(0).id
      })
}


//FETCH MENU
async function fetchMenus(){
axios.get('https://localhost:7168/api/Module/Fetch/NotExistingmenus/' + localStorage.USERNAME).then((res) => {
        isDeleteMenu.value = res.data
        console.log(isDeleteMenu.value)
      })
 
    }

//FETCH USER MENUS
async function fetchUsermenus(){
axios.get('https://localhost:7168/api/Module/Fetch/Email/Menu/' + localStorage.USERNAME).then((res) => {
        usermenu.value = res.data
        console.log(usermenu.value)
      })
      
    }



function removemenu(usermenus)
{
axios({ 
          method: 'delete',
          url: 'https://localhost:7168/api/Module/Delete/Users/Menus',
          data: 
          {
            status: inactive,
            isDelete: defaultdelete,
            modifiedBy: localStorage.EmailID,
            id:  usermenus.id
          }
        })
        fetchUsermenus()
        fetchMenus()
        fetchuserbutton()
axios({ 
          method: 'put',
          url: 'https://localhost:7168/api/Module/Update/Delete/ButtonUser',
          data: 
          {
            id: usermenus.id,
            emailId: localStorage.USERID,
            status: inactive,
            modifiedBy: localStorage.EmailID
          }
        })
        fetchUsermenus()
        fetchMenus()
        fetchuserbutton()
}


function savemenus()
{
  if(rights.value == "")
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
                    title: 'Please complete all the details.'
                  })
  }
  else
  {
    if(localStorage.menuID == 2 ||  localStorage.menuID == 3 ||localStorage.menuID == 4 || localStorage.menuID == 5)
  {
    axios.post('https://localhost:7168/api/Module/Inserting/Menus', {
              menus:localStorage.menuID,
              type: localStorage.menuID,
              userId: user,
              emailId: user ,
              status: status,
              assignSubmenu: mainte,
              createdBy: EmailID,
              
              }).then(function(response) 
              {
                console.log(JSON.stringify(response.data));
                if(response.data == "Data Inserted into Maintenance" )
                {
                  axios.post('https://localhost:7168/api/Module/Inserting/Button/User', {
                        menu:localStorage.menuID,
                        userId: user,
                        emailId: user ,
                        createdBy: EmailID,
              
              }).then(function(response) 
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
                  })
                  fetchUsermenus()
                  fetchMenus()
                  fetchuserbutton()
                }
                
              })
                }
                else if(response.data == "Data Exisiting")
                {
                  axios.put('https://localhost:7168/api/Module/Update/User/Menu', {
                    menus: localStorage.menuID ,
                    emailId: localStorage.USERID ,
                    status: status,
                    isDelete: notdeleted ,
                    modifiedBy:  localStorage.USERID,
                    }).then(function(response) 
                    {
                      console.log(JSON.stringify(response.data));
                      if(response.data == "Successfully Updated" )
                      {
                        axios.put('https://localhost:7168/api/Module/Update/Deleted/ButtonUser', {
                        menu:localStorage.menuID, 
                        emailId: user ,
                        modifiedBy: EmailID,
                        status: active
                      }).then(function(response) 
                            {
                              if(response.data == "Data Updated" )
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
                                      })
                                  }
                            })
                        fetchUsermenus()
                        fetchMenus()
                        fetchuserbutton()
                      }

                    })
                }
              })

  }
  else
  {
    axios.post('https://localhost:7168/api/Module/Inserting/Menus', {
              menus: localStorage.menuID,
              type: localStorage.menuID,
              userId: user,
              emailId: user ,
              status: status,
              assignSubmenu: trans,
              createdBy: EmailID,
              
              }).then(function(response) 
              {
                if(response.data == "Data Inserted into Transactions")
                {
                  axios.post('https://localhost:7168/api/Module/Inserting/Button/User', {
                        menu:localStorage.menuID,
                        userId: user,
                        emailId: user ,
                        createdBy: EmailID,
              
              }).then(function(response) 
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
                  })
                  fetchUsermenus()
                  fetchMenus()
                  fetchuserbutton()
                }

              })
                }
                else if(response.data == "Data Exisiting")
                {
                  axios.put('https://localhost:7168/api/Module/Update/User/Menu', {
                    menus: localStorage.menuID ,
                    emailId: localStorage.USERID ,
                    status: status,
                    isDelete: notdeleted ,
                    modifiedBy:  localStorage.USERID,


              }).then(function(response) 
              {
                console.log(JSON.stringify(response.data));
                if(response.data == "Successfully Updated" )
                {
                  axios.put('https://localhost:7168/api/Module/Update/Deleted/ButtonUser', {
                        menu:localStorage.menuID, 
                        emailId: user ,
                        modifiedBy: EmailID,
                        status: active
                      }).then(function(response) 
                            {
                              if(response.data == "Data Updated" )
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
                                      })
                                  }
                            })
                                  fetchUsermenus()
                                  fetchMenus()
                                  fetchuserbutton()
                }

              })
                }
          })
  }
  }

}



function s()
{
  localStorage.USERID = ""
  localStorage.USERNAME = ""
  localStorage.FULLNAME = ""
  localStorage.USERTYPE = ""
  localStorage.ACCTTYPE = ""
}

</script>

<style scoped>
table {
  empty-cells: hide;
}
.card-header {
    padding: 6px;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    background-color: #36454F;
}
.trues
{
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    pointer-events: auto;
    background-color: #000000;
    background-clip: padding-box;
    border: 1px solid #2c2e33;
    border-radius: 0.3rem;
    outline: 0;
}
.documents 
{
  margin-left: 107px;
}
.js-example-basic-single
{
  margin-left: 92px;
  border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
    padding: 7px;
  
}
.asd
{
 margin-left: 151px;

}

.statuss
{
  margin-left: 141px;
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
  padding: 7px;
}

.form-control
{
  margin-top: 1px;
  cursor: not-allowed;
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
</style>