/<template>

  <!-- partial:partials/_navbar.html -->
  <nav class="navbar p-0 fixed-top d-flex flex-row">
    <div class="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
      <h1 class="navbar-brand brand-logo-mini" href="index.html">D</h1>
    </div>
    <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
      <button class="navbar-toggler navbar-toggler align-self-center" type="buttons" data-toggle="minimize" @click="sidenav">
        <span class="mdi mdi-menu"></span>
      </button>
      <p class="site">Branch: {{site}}</p>
      <ul class="navbar-nav navbar-nav-right">

        


        <li class="nav-item dropdown">
          <a class="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
            <div class="navbar-profile">
              
              <img src="assets/images/gifs/HELLO.gif" alt="" class="hello">
              <p class="mb-0 d-none d-sm-block navbar-profile-name">Annyeong, {{user}}</p>
              
              <i class="mdi mdi-menu-down d-none d-sm-block"></i>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
            <h6 class="p-3 mb-0">Account</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-dark rounded-circle">
                  <i class="fa-solid fa-globe text-primary"></i>
                </div>
              </div>
              <div class="preview-item-content">
                <p class="preview-subject mb-1" data-toggle="modal" data-target="#selectsites" data-whatever="@getbootstrap">Change Site</p>
              </div>
            </a>
         
            <div class="dropdown-divider"></div>
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-dark rounded-circle">
                  <i class="fa-solid fa-gear text-success"></i>
                </div>
              </div>
              <div class="preview-item-content">
                <p class="preview-subject mb-1" data-toggle="modal" data-target="#accountsettings" data-whatever="@getbootstrap">Account Settings</p>
              </div>
            </a>

            <div class="dropdown-divider"></div>
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-dark rounded-circle">
                  <i class="mdi mdi-logout text-danger"></i>
                </div>
              </div>
              <div class="preview-item-content">
                <p class="preview-subject mb-1" v-on:click="handleLogout">Log out</p>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <p class="p-3 mb-0 text-center"><i class="fa-solid fa-hands ml-2"></i> HELLO THERE</p>
          </div>
        </li>
      </ul>
      <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span class="mdi mdi-format-line-spacing"></span>
      </button>
    </div>
  </nav>

  <!--CHANGE SITES-->
  <div class="modal fade" id="selectsites" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"><i class="fa-solid fa-globe"></i> Change Branch</h5>
                                <button type="button" class="xxx" data-dismiss="modal" aria-label="Close" @click="close">
                                  
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <form>
                                  <div class="login-form">
                        
                                    <div class="form-item-email">
                                            <label for="document" class="documents">Choose Sites: </label><br>
                                              <select v-model="sites" name="documents" id="documents" class="permitdr" @change="switchSelect($event)">
                                                <option class="trues" value="" selected disabled="disabled" >---Change Sites---</option>
                                                <option class="true"  v-for="(branch, index) in branchs" :key="index">{{branch.branchName}}</option>   
                                              </select>
                                          </div><br>
                                        </div>
                                </form>
                              </div>
                              <div class="modal-footer">
                                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                                <button type="button" class="btn btn-primary" @click="save">Save</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>

<!--ACCOUNT SETTINGS-->

<div class="modal fade" id="accountsettings" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-contentx">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"><i class="fa-solid fa-gear"></i> Settings</h5>
                                <button type="button" class="xxx" data-dismiss="modal" aria-label="Close" @click="close">
                                  
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <form>
                                  <input type="hidden" v-model="ID" placeholder="">

                                    <hr data-v-18a008e6="" style="width: 100%;text-align: left;background-color: gray;margin-left: 3px;">

                                    <div class="form-item-password">

                                      <p><label for="fulldetails" class="new">New Password</label></p>
                                      <input type="password" class="form-control" v-model="newpassword"><br>

                                      <p><label for="fulldetails" class="confirm">Confirm Password</label></p>
                                      <input type="password" class="form-control" v-model="confirmpassword" >
                                    
                                  </div>
                                
                                  <hr data-v-18a008e6="" style="width: 100%;text-align: left;background-color: gray;margin-left: 3px;">
                                </form>
                              </div>
                              <div class="modal-footerx">
                                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                                <button type="button" class="btn btn-primary" style="padding: 10px; margin-right: 10px; margin-bottom: 50px;" @click="update">Save</button>
                                <button type="button" class="btn btn-danger " style="padding: 10px; margin-bottom: 50px;" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
</template>

<script setup>
import router from '@/router';
import { ref, onMounted  } from 'vue' ;
import axios from 'axios';

const user = localStorage.Nameacc
const site  =  localStorage.Site

const sites = ref([])
const branchs = ref([])
const DetailsID = ref([])
const selectsites = ref([])
const active = 'A'
const ID = localStorage.EmailID

const newpassword = ref('')
const confirmpassword = ref('')

const Swal = require('sweetalert2')

sites.value = ""




localStorage.sites = sites.value

onMounted(() =>{
      myFunction()
    //  fetchBRANCHID()
     
  })
function update()
{

  axios({
          method: 'post',
          url: 'https://localhost:7168/api/User/Update/AccountSetting/User',
          data: 
          {
                id: localStorage.EmailID,
                password:  newpassword.value ,
                confirmpassword: confirmpassword.value,
                status: active,
                modifiedBy: localStorage.EmailID,
          }
        })
              .then(function(response) 
              {
                console.log(JSON.stringify(response.data));
                if(response.data == "Successfully Updated" )
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
                    title: 'Successfully Updated'
                  }).then(function(){
                    location.reload();
                    
                  });
                  localStorage. clear()
                  router.push('/')
                }
                else if(response.data == "Password Doesn't Match")
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
                    title: 'Password Doesnt Match'
                  })
                }
        })
          
}
function switchSelect($event)
{
  selectsites.value = $event.target.value;
  localStorage.Site = selectsites.value
  fetchBRANCHID()
}

function fetchBRANCHID()
{
  if(site.value == "")
  {
    alert("NO SITES")
  }
  else
  {
    //FETCH BRANCHID
    axios.get('https://localhost:7168/api/Branch/Fetch/BranchID/' + sites.value).then((res) => {
          DetailsID.value = res.data
          localStorage.SitesID = DetailsID.value.at(0).id
      })
  }

}
function myFunction()
{
  if(site == "")
  {
    alert("NO SITES")
  }
  else
  {
    axios.get('https://localhost:7168/api/Branch/Fetch/Email/' + user).then((res) => {
    branchs.value = res.data
    })
  }

}

function handleLogout()
{
localStorage. clear()
router.push('/')
}

function sidenav()
{

  var element = document.getElementById("body");
  element.classList.toggle("sidebar-icon-only");
  //document.getElementById("body").classList.add("sidebar-icon-only");

}

function save()
{
  
  location.reload();

}

</script>


<style scoped>

.modal-contentx[data-v-18a008e6] {
  position: relative;
    display: flex;
    flex-direction: column;
    width: 550px;
    pointer-events: auto;
    background-color: #000000;
    background-clip: padding-box;
    border: 1px solid #2c2e33;
    /* border-radius: 0.3rem; */
    outline: 0;
    height: 300px;
}
.form-control[data-v-18a008e6][data-v-18a008e6], .asColorPicker-input[data-v-18a008e6][data-v-18a008e6], .dataTables_wrapper select[data-v-18a008e6][data-v-18a008e6], .jsgrid .jsgrid-table .jsgrid-filter-row input[type=text][data-v-18a008e6][data-v-18a008e6], .jsgrid .jsgrid-table .jsgrid-filter-row select[data-v-18a008e6][data-v-18a008e6], .jsgrid .jsgrid-table .jsgrid-filter-row input[type=number][data-v-18a008e6][data-v-18a008e6], .select2-container--default .select2-selection--single[data-v-18a008e6][data-v-18a008e6], .select2-container--default .select2-selection--single .select2-search__field[data-v-18a008e6][data-v-18a008e6], .typeahead[data-v-18a008e6][data-v-18a008e6], .tt-query[data-v-18a008e6][data-v-18a008e6], .tt-hint[data-v-18a008e6][data-v-18a008e6] {
    border: 1px solid #2c2e33;
    height: calc(2.25rem + 2px);
    font-weight: normal;
    font-size: 0.875rem;
    padding: 0.625rem 0.6875rem;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
    margin-top: -44px;
    margin-left: 194px;
    width: 308px;

}
.modal-footerx {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0.6875rem;
    border-top: 1px solid #f5f5f6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
    /* margin-top: 64px; */
    background-color: #2c2e33;
    width: 550px;
    height: 54px;


    
}
.username
{
  margin-left: 8px;
    margin-top: 5px;
    font-size: 20px;
    font-family: "Rubik", sans-serif;
    display: inline-block;

}
.old
{
  margin-left: 8px;
    font-size: 20px;
    font-family: "Rubik", sans-serif;
    display: inline-block;
}
.new
{
  margin-left: 8px;
    font-size: 20px;
    font-family: "Rubik", sans-serif;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: -148px;
}
.confirm
{
    margin-left: 8px;
    font-size: 20px;
    font-family: "Rubik", sans-serif;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: -148px;
}
.navbar .navbar-menu-wrapper .navbar-nav .nav-item.dropdown .dropdown-menu.navbar-dropdown {
    position: absolute;
    font-size: 0.9rem;
    margin-top: 0;
    top: 48px;
    right: 0;
    left: auto;
    -webkit-box-shadow: 0px 0px 35px -3px black;
    -moz-box-shadow: 0px 0px 35px -3px black;
    box-shadow: 0px 0px 35px -3px black;
    padding: 0;
    margin-top: 31px;
}
.navbar .navbar-menu-wrapper .navbar-nav .nav-item .nav-link .navbar-profile .navbar-profile-name {
    white-space: nowrap;
    margin-left: 0.5rem;
    margin-top: 15px;
}
.mdi-menu-down::before {
    content: "\F35D";
    margin-top: 15px;
}
img
{
  width: 58px;
    height: auto;
    margin-left: 161px;
    padding-top: 9px;
}
.xxx
{
  color: red;
  background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    padding: 2px;
}
.modal-header  {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #2c2e33;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
    padding: 8px;
    background-color: #0090e7;
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
.permitdr
{
  margin-left: 92px;
  border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
    padding: 7px;
  
}
.trues
{
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
.navbar .navbar-brand-wrapper .navbar-brand {
    color: #2150d3;
    font-size: 30px;
    line-height: 48px;
    margin-right: 0;
    padding: 0rem 0rem 0rem 1.3rem;
    width: 100%;
}
.site
{
  margin-left: 4%;
  margin-top: 2%;
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
  
  color: pink;
}
</style>