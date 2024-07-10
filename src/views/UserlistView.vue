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
              <h3 class="page-title"> Userlist View </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page"><router-link to='/UserView' href="#"> User List</router-link></li>
                  <li class="breadcrumb-item active" aria-current="page">Userlist View</li>
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
                <input type="email"  class="form-control" v-model="Username" disabled>
              </div>
            </div>
            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Lastname</label>
                <input type="text"  class="form-control" v-model="Lastname" disabled>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
              <div class="form-group">
                <label>Email</label>
                <input type="email"  class="form-control" v-model="Email" disabled>
              </div>
            </div>
            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Firstname</label>
                <input type="text"  class="form-control" v-model="Firstname" disabled>
              </div>
            </div>
          </div>

         <div class="row">
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
              <div class="form-group">
                <label>Contact Number</label>
                <input type="text" class="form-control" v-model="Contactnumber" disabled>
              </div>
            </div>
            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Middlename</label>
                <input type="text"  class="form-control" v-model="Middlename" disabled>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
              <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" v-model="Address" disabled>
              </div>
            </div>
            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Status</label>
                <input type="text"  class="form-control" v-model="Status" disabled>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
              <div class="form-group">
                <label>Created By</label>
                <input type="text" class="form-control" v-model="CreatedBy" disabled>
              </div>
            </div>
            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Created Date</label>
                <input type="text"  class="form-control" v-model="CreatedDate" disabled>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
              <div class="form-group">
                <label>Modified By</label>
                <input type="text" class="form-control" v-model="ModifiedBy" disabled>
              </div>
            </div>
            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Modified Date</label>
                <input type="text"  class="form-control" v-model="ModifiedDate" disabled>
              </div>
            </div>
          </div>
          
          <div class="row">
         
            <div class="col-sm-6 no-pading" style="padding-right:10px;">
                <div class="form-group">
                  <label>User Type</label>
                  <input type="email" class="form-control" v-model="Usertype" disabled>
                </div>
            </div>

            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label>Account Type</label>
                <input type="text"  class="form-control" v-model="Accountype" disabled>
              </div>
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
import SideNav from "./SideNav.vue";
import TopNavView from "./TopNavView.vue";
import router from '@/router';
import {ref , onMounted} from 'vue'

const Username = ref('')
const Lastname = ref('')
const Email = ref('')
const Firstname = ref('')
const Contactnumber = ref('')
const Middlename = ref('')
const Address = ref('')
const Status = ref('')
const CreatedBy = ref('')
const CreatedDate = ref('')
const ModifiedBy = ref('')
const ModifiedDate = ref('')
const Usertype = ref('')
const Accountype = ref('')

const active = 'Active'
const inactive = 'Inactive'


onMounted(() =>{

/*document.getElementById("maintenance").classList.remove("collapse");
document.getElementById("ui-basic").classList.add("show");
document.getElementById("mainID").classList.add("active");
document.getElementById("usr").classList.add("active");*/

})





Username.value = localStorage.srnm
Lastname.value = localStorage.lstnm
Email.value = localStorage.ml
Firstname.value = localStorage.frstnm
Contactnumber.value = localStorage.cntctnmbr
Middlename.value = localStorage.mddlnm
Address.value = localStorage.ddrss
Status.value = localStorage.sttts
CreatedBy.value = localStorage.crtdby
CreatedDate.value = localStorage.crtddte
ModifiedBy.value = localStorage.mdfdby
ModifiedDate.value = localStorage.mdfddt
Usertype.value = localStorage.srtyp
Accountype.value = localStorage.ccnttype

if(Status.value == 'A')
{
  localStorage.status = active
  Status.value = localStorage.status
}
else if(Status.value == 'I')
{
  localStorage.status = inactive
  Status.value = localStorage.status
}


function back()
{
  router.push('/UserView')
}

</script>

<style scoped>
.form-control , .select ,.selects
{
  cursor: not-allowed;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid pink;
  opacity: 0.5;
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
    margin-left: 980px;
    margin-top: 1%;
    width: 10%;
  }
  .back:hover 
  {
    background-color:#ff6680;
  }

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
</style>