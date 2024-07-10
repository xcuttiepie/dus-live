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
              <h3 class="page-title"> Register User </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <router-link to='/UserView' href="#"> User List</router-link>
                  <li class="breadcrumb-item active" aria-current="page"> / Register User</li>
                </ol>
              </nav>
            </div>
                    <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
          <div class="container">
        <div class="row">
        <div class="x_panel col-md-12 col-sm-12">
        <div class="x_content">
        <br/>

        <div class="row">
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
              <div class="form-group">
                <label>Username</label>
                <input type="email"  class="form-control" v-model="username" required>
              </div>
            </div>
            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Lastname</label>
                <input type="text"  class="form-control" v-model="lastname" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
              <div class="form-group">
                <label>Email</label>
                <input type="email"  class="form-control" v-model="email" required>
              </div>
            </div>
            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Firstname</label>
                <input type="text"  class="form-control" v-model="firstname" required>
              </div>
            </div>
          </div>

         <div class="row">
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" required>
              </div>
            </div>
            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Middlename</label>
                <input type="text"  class="form-control" v-model="middlename" required>
              </div>
            </div>
          </div>
          
          <div class="row">
         
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
                <div class="form-group">
                  <label>Contact number</label>
                  <input type="email" class="form-control" v-model="contact" required>
                </div>
            </div>

            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Address</label>
                <input type="text"  class="form-control" v-model="address" required>
              </div>
            </div>
            <div class="row">
                
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
                <div class="form-group">
                  <label class="lbl">User Type: </label><br>
                <select v-model="usertype" class="select"  >
                    <option class="trues" value="" selected="true" disabled="disabled">-Select User Type-</option>    
                    <option class="true" value="ADMIN">ADMIN</option>
                    <option class="true" value="USER">USER</option>
                </select>
                </div>
            </div>

            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label class="lbls">Account Type:</label><br>
                <select  class="selects" id="select-id" v-model= "accounttype" >
                    <option class="trues" disabled value="">-Select Account Type-</option>    
                    <option class="true" >Internal</option>
                    <option class="true" >External</option>
                </select>
              
              </div>
            </div>

            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label class="lbl">Status: </label><br>
                <select v-model="statustype"  class="select" >
                    <option class="trues" value="" selected disabled="disabled">-Select User Status-</option>    
                    <option class="true"  value="Active">Active</option>
                    <option class="true" value="Inactive">Inactive</option>
                </select>
              
              </div>
            </div>

            </div>
            
            <div class="field padding-bottom--24">
                    <button @click.once="Signup" type="submit" class="save">Save</button>
                  </div>
                  <div class="field padding-bottom--24">
                    <button @click="back" type="submit" class="back">Back</button>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import SideNav from './SideNav.vue';
import TopNavView from './TopNavView.vue';


import router from '@/router';
    import axios from 'axios'
    import {ref , onMounted} from 'vue'
    
    const Swal = require('sweetalert2')
    
    const username = ref ('')
    const lastname = ref ('')
    const email = ref ('')
    const firstname = ref ('')
    const password = ref ('')
    const middlename = ref ('')
    const contact = ref ('')
    const address = ref ('')
    const usertype = ref([])
    const accounttype = ref([])
    const statustype = ref([])
    const EmailID = localStorage.EmailID

    const status1 =  'A'
    const status2 = 'I'
    
    usertype.value = "",
    accounttype.value = "",
    statustype.value = ""

    onMounted(() =>{

    /*  document.getElementById("maintenance").classList.remove("collapse");
      document.getElementById("ui-basic").classList.add("show");
      document.getElementById("mainID").classList.add("active");
      document.getElementById("usr").classList.add("active"); */
    
  })

function  validEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
  
    function Signup()
    {
      if(statustype.value == ""||accounttype.value == ""||usertype.value == ""||username.value == "" || middlename.value == "" || contact.value == "" || address.value == "" ||  firstname.value == "" || lastname.value == ""  || password.value == ""|| email.value == "")
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
      else if (!validEmail(email.value)) {
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
                    icon: 'error',
                    title: 'Invalid Email. Use the correct format.'
                  })
      }
      else if( statustype.value == "Active")
      {
          const statustypes = status1;

          axios.post('https://localhost:7168/api/User/Register/userlist/User', {
                Username: username.value,
                Password: password.value,
                Email: email.value,
                Lastname: lastname.value,
                Firstname: firstname.value,
                Middlename: middlename.value,
                ContactNumber: contact.value,
                Address: address.value,
                Status: statustypes,
                CreatedBy: EmailID,
                UserType: usertype.value,
                AccountType: accounttype.value
              })
              .then(function(response) 
              {
                console.log(JSON.stringify(response.data));
                if(response.data == "Successfully registered" )
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
                    title: 'Successfully Registered'
                    
                  })
                  username.value = "",
                  password.value = "",
                  email.value = "",
                  lastname.value = "",
                  firstname.value = "",
                  middlename.value = "",
                  contact.value = "",
                  address.value = "",
                  usertype.value = "",
                  accounttype.value = "",
                  statustype.value = ""

                }
                else if (response.data == "Email Already Registered")
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
                    icon: 'error',
                    title: 'Email Already Registered.'
                  })
           
                }
                else if (response.data == "Minimum 8 password.")
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
                    icon: 'error',
                    title: 'Minimum 8 password.'
                  })
              
                }
                else if (response.data == "Username Already Registered")
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
                    icon: 'error',
                    title: 'Username Already Registered.'
                  })
                }
        })
          

     }
     else if( statustype.value == "Inactive")
      {
          const statustypes = status2

          axios.post('https://localhost:7168/api/User/Register/userlist/User', {
                Username: username.value,
                Password: password.value,
                Email: email.value,
                Lastname: lastname.value,
                Firstname: firstname.value,
                Middlename: middlename.value,
                ContactNumber: contact.value,
                Address: address.value,
                Status: statustypes,
                CreatedBy: EmailID,
                UserType: usertype.value,
                AccountType: accounttype.value
              })
              .then(function(response) 
              {
                console.log(JSON.stringify(response.data));
                if(response.data == "Successfully registered" )
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
                    title: 'Successfully Registered'
                    
                  })
                  username.value = "",
                  password.value = "",
                  email.value = "",
                  lastname.value = "",
                  firstname.value = "",
                  middlename.value = "",
                  contact.value = "",
                  address.value = "",
                  usertype.value = "",
                  accounttype.value = "",
                  statustype.value = ""
                }
                else if (response.data == "Email Already Registered")
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
                    icon: 'error',
                    title: 'Email Already Registered.'
                  })
                }
                else if (response.data == "Minimum 8 password.")
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
                    icon: 'error',
                    title: 'Minimum 8 password.'
                  })
                }
                else if (response.data == "Username Already Registered")
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
                    icon: 'error',
                    title: 'Username Already Registered.'
                  })
                }
        })

     }    
        }

      
   
   function back(){
    router.push('/UserView')
   }
</script>

<style scoped>

.select{
  background-color: transparent;
  color: white;
  font-family: "Rubik", sans-serif;
  padding: 10px;
  margin-left: 12px;
}
.selects{
  background-color: transparent;
  color: white;
  font-family: "Rubik", sans-serif;
  padding: 10px;
  margin-left: -50px;
}
.true {
  color: black;
}
.trues{
  color: gray;
}
.lbl{
  margin-left: 12px;
}

.lbls{
  margin-left: -50px;
}

.save {
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
    margin-left: 240%;
    margin-top: 150%;
    width: 100px;
  }
  .save:hover 
  {
    background-color:#ff6680;
  }

  .back {
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
    margin-left: 250%;
    margin-top: 150%;
    width: 100px;
  }
  .back:hover 
  {
    background-color:#ff6680;
  }
</style>