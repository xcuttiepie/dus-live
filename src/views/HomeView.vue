<template>
   
  <head>
  <title>Permits</title>
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
                      <h3 class="page-title"> PERMITS </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active"><router-link to='/DashboardView'>Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Transaction</li>
                  <li class="breadcrumb-item active">Document Entry</li>
                </ol>
              </nav>
              </div>
                        

                      
                      <button type="button" class="button-1" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap" v-if="isAdd == 1"><i class="fa-solid fa-plus"></i> Upload Documents</button>
                          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header" style="background-color: #0090e7; ">
                                  <h5 class="modal-title" id="exampleModalLabel"><i class="fa-solid fa-file"></i> Permits</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <form>
                                    <div class="login-form">
                                         <input type="hidden" v-model="id" placeholder="">

                                          <div class="form-item-email">
                                            <label for="document" class="documents">Choose Type of Document: </label><br>
                                              <select v-model="documents" name="documents" class="permitdr">
                                                <option value="" selected disabled hidden>---Select Documents---</option>
                                                <option v-for="(permit, index) in permits" :key="index" >{{permit.name}}</option>
                                              </select>
                                          </div><br>
                                     
                                          <div class="form-item-password">
                                              <label for="fulldetails" class="fulldetails">Full Details</label>
                                              <textarea class="textarea" v-model="fulldetails" rows="4" cols="50">WRITE YOUR DETAILS HERE</textarea><br>
                                              <br><label for="myfile" class="file">Select a file:</label><br>
                                              <input class="files"  type="file" id="files" ref="file" v-on:change="handleFileUpload($event)" multiple>
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
                        <table class="table" id="homeview">
                          <thead>
                            <tr>
                              
                                    <th>Document</th>
                                    <th>Date Uploaded</th>
                                    <th>Full Details</th>
                                    <th>Created By</th>
                                    <th>Modified By</th>
                                    <th>Modified Date</th>
                                    <th>Action</th>
                                    
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(list, index) in lists" :key="index">
                    
                          <td>{{list.document}}</td>
                          <td>{{list.dateUploaded}}</td>
                           <td style="white-space: nowrap; text-overflow:ellipsis; overflow: hidden; max-width:40px">
                           {{list.fullDetails}}</td>
                           <td>{{list.createdBy}}</td>
                           <td>{{list.modifiedBy}}</td>
                           <td>{{list.modifiedDate}}</td>

                          <td>
                          <button @click="view(list)" class = "btn btn-info ml-2"><i class="fa-solid fa-eye"></i></button>
                          <!--UPDATE BUTTON-->
                          <button type="button"  @click="edits(list)" class = "btn btn-warning ml-2" data-toggle="modal" data-target="#updateModal" data-whatever="@getbootstrap" v-if="isEdit == 1"><i class="fa-solid fa-pen-to-square"></i></button>
                          <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header"  style="background-color: #0090e7; ">
                                  <h5 class="modal-title" id="updateModalLabel"><i class="fa-solid fa-pen-to-square"></i>  UPDATE DOCUMENT ENTRY</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <div class="login-form">
                                  <div class="form-item-email">
                                    <input type="hidden" v-model="ID" placeholder="">
                                      <label for="document" class="dcmnts1">Choose Type of Document: </label>
                                        <select v-model="DOCUMENTS" class="dcmnts5">
                                          <option v-for="(permit, index) in permits" :key="index" >{{permit.name}}</option>
                                        </select><br>
                                  </div>
                                  <div class="form-item-password">
                                    <label for="dateuploaded" class="dcmnts2">Date Uploaded:</label>
                                    <input type="datetime" class="form-control" v-model="DATE" disabled ><br>
                                  
                            
                                      <p><label for="fulldetails" class="dcmnts3">Full Details</label></p>
                                      <textarea class="dcmnts7" v-model="FULLDETAILS" rows="4" cols="50">WRITE YOUR DETAILS HERE.</textarea><br>
                                    </div><br>

                                    <div class="col-sm-6 no-pading">
                                      <div class="form-group">
                                        <label class="dcmnts4">Status: </label><br>
                                        <select v-model="statustype"   class="dcmnts8">
                                            <option class="trues" value="" selected disabled="disabled">-Select User Status-</option>    
                                            <option class="true"  value="Active">Active</option>
                                            <option class="true" value="Inactive">Inactive</option>
                                        </select><br>
                                      
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  
                                  <button type="button" class="btn btn-primary p-2" @click="updates">Update</button>
                                  <button type="button" class="btn btn-danger p-2" data-dismiss="modal">Close</button>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                  
                          <button @click="deletes(list)" class = "btn btn-danger ml-2" type="delete" v-if="isDelete == 1"><i class="fa-solid fa-trash"></i></button>
  
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
  import router from '@/router';
  import axios from 'axios'
  import { connecttoapi } from '../services/httpService'
  import { ref, onMounted } from 'vue'
  import SideNav from './SideNav.vue';
  import TopNavView from './TopNavView.vue';


  const Swal = require('sweetalert2')
  
  const lists = ref([])
  const permits = ref([])
  const fulldetails = ref('')
  const documents = ref('')
  const files = ref([])
  const id = ref('')
  const sssss = 1
  const buttonrole = ref([])


  const DOCUMENTS = ref([])
  const DATE = ref('')
  const ID = ref('')
  const FULLDETAILS = ref('')
  const statustype = ref([])
  const status1 =  'A'
  const status2 = 'I'

  const stats = 'A'
  const inactive = 'I'

  const EmailID = localStorage.EmailID

  const menu = "Document Entry"
  localStorage.DocumentTransactionID = Math.floor(Math.random() *2000000 )

  const isDelete = ref('')
  const isAdd = ref('')
  const isEdit = ref('')

  onMounted(() =>{
      fetchData()
      fetchDatas()
      fetchButton()
      /*document.getElementById("transasctions").classList.remove("collapse");
      document.getElementById("auth").classList.add("show");
      document.getElementById("mainID2").classList.add("active");
      document.getElementById("entry").classList.add("active");*/
  })
  
  async function fetchDatas(){
      await connecttoapi().get('https://localhost:7168/api/Document').then((res) => { 
          permits.value = res.data
      })
    }

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
    axios.get("https://localhost:7168/api/PrmtDetail/isDelete/PermitEntry/" + localStorage.Site)
      .then((res)=>
      {
        lists.value = res.data
        setTimeout(function(){
        $('#homeview').DataTable(
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
function handleFileUpload(event)
{
                  files.value = event.target.files;
}

 function sbmt(){
  if (files.value == "" || documents.value =="" || fulldetails.value =="" )
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
                    title: 'Complete the details.'
                  })
             
                }
                else
                {
                  try {
                                           
                      let formData = new FormData();
                      for (var i = 0; i < files.value.length; i++)
                      {
                          
                          let file = files.value[i];
                          var filename = file.name
         
                          formData.append('uploadAttachments', file);
                          formData.append('folder', localStorage.DocumentTransactionID)
                        
                          localStorage.Filename = filename

                          axios.post('https://localhost:7168/api/PrmtAttachment/Inserting/Table',
                      {
                          transactionId: localStorage.DocumentTransactionID,
                          filename: localStorage.Filename,
                          newFilename: localStorage.Filename,
                          filepath: filename,
                          createdBy: EmailID,
                          branch: localStorage.SitesID
                          //newFilename: localStorage.Filename
                      }
                          )
                      .then(function() {
                      
                      });
                      }
                      
                      let config = {
                          header : {
                              'Content-Type' : 'multipart/form-data'
                          }
                      };
                   
                      axios.post('https://localhost:7168/api/PrmtDetail/MultipleUpload/files/Table?folder='+ localStorage.DocumentTransactionID,
                      formData, config
                      ).then(function(){
                 
                      });
  
                    axios.post('https://localhost:7168/api/PrmtDetail/Inserting/Data/Table', 
                    {
                          transactionId: localStorage.DocumentTransactionID,
                          document: documents.value,
                          fullDetails: fulldetails.value,
                          status: stats,
                          createdBy: EmailID,
                          branch: localStorage.SitesID
          
                    })
                    .then(function(response) {
                        
                          if(response.data == "Full Details are exceed on 255 characters.")
                          {
                          
                            alert("Full Details are exceed on 255 characters.")
                          }
                          else{
                     
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
                            title: 'Successfully Uploaded!'
                          }).then(function(){
                            location.reload();
                        });
                          }
     
                    
                      })
                      .catch(function(e){
                      
                      });
                      }

                    
                  catch (error) 
                  {
               
                  }
                }
 }
  function homevue(){
    router.push('/HomeView')
  }
  function close()
  {
    window.location.reload()
  }
  function view(list){
    localStorage.transid = list.transactionId
    localStorage.document = list.document
    localStorage.dateUploaded = list.dateUploaded
    localStorage.fullDetails = list.fullDetails


    router.push('/DocumentEntryView')
  }

  function edits(list)
  {
    localStorage.id = list.id
    localStorage.document = list.document
    localStorage.dateUploaded = list.dateUploaded
    localStorage.fullDetails = list.fullDetails
    localStorage.documententrystatus = list.status
    
    const updatedDocument = localStorage.document
    const updatedDate = localStorage.dateUploaded
    const updatedDetails = localStorage.fullDetails
    const updatedId =  localStorage.id 
    const updatedstss = localStorage.documententrystatus
   

    if(updatedstss == 'A')
    {
      const updatedstss = "Active"
      ID.value = updatedId
      DOCUMENTS.value = updatedDocument
      DATE.value = updatedDate
      FULLDETAILS.value = updatedDetails
      statustype.value = updatedstss
    }
    else if(updatedstss == 'I')
    {
      const updatedstss = "Inactive"
      ID.value = updatedId
      DOCUMENTS.value = updatedDocument
      DATE.value = updatedDate
      FULLDETAILS.value = updatedDetails
      statustype.value = updatedstss
    }


}
function updates()
{

        localStorage.id  = ID.value
        localStorage.dateUploaded = DATE.value
        localStorage.document = DOCUMENTS.value
        localStorage.fullDetails = FULLDETAILS.value

       if(statustype.value == "" || ID.value == "" || DOCUMENTS.value == "" || FULLDETAILS.value == "")
       
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
                    title: 'Please complete the details.'
                  })
       }
    

       else if( statustype.value == "Active"){
          const statustype = status1

            axios({
            method: 'post',
            url: 'https://localhost:7168/api/PrmtDetail/Update/Data/Table',
            data: 
            {
              id:  ID.value,
              document: DOCUMENTS.value,
              fullDetails: FULLDETAILS.value,
              status: statustype,
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

        else if(statustype.value == "Inactive"){
          const statustype = status2
          axios({
            method: 'post',
            url: 'https://localhost:7168/api/PrmtDetail/Update/Data/Table',
            data: 
            {
              id:  ID.value,
              document: DOCUMENTS.value,
              fullDetails: FULLDETAILS.value,
              status: statustype,
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

        else
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
                    title: 'No Data Changes'
                  })
        }


}

  
  function addnessw(){
    router.push('/AddView')
  }
  
  function permit(){
    router.push('/HomeView')
  }
  
  function add(){
    router.push('/AddView')
  }
  
  function deletes(list){
    localStorage.Id = list.id
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
                      url: 'https://localhost:7168/api/PrmtDetail/Delete/Data/Table',
                      data: 
                      {
                        status: inactive,
                        isDelete: sssss,
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
.textarea
{
  border: 1px solid #2c2e33;
  background-color: #2A3038;
  border-radius: 2px;
  color: #ffffff;
}
  .permitdr
  {
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
    padding: 8px;
  }
  .dcmnts7[data-v-9ea40744][data-v-9ea40744] {
    margin-left: -1px;
    margin-top: -19px;
    width: 467px;
    height: 140px;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}
.dcmnts5[data-v-9ea40744] {
    margin-left: 1px;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}
.dcmnts8[data-v-9ea40744] {
    margin-left: -9px;
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
}
.form-control
{
    border: 1px solid #2c2e33;
    background-color: #2A3038;
    border-radius: 2px;
    color: #ffffff;
    cursor: not-allowed;
}
.dcmnts1[data-v-9ea40744][data-v-9ea40744] {
    margin-left: -221px;
    font-size: 20px;
    margin-bottom: 15px;
}
.dcmnts2[data-v-9ea40744][data-v-9ea40744][data-v-9ea40744][data-v-9ea40744] {
    margin-left: -326px;
    font-size: 20px;
    margin-bottom: 15px;
}
.dcmnts3[data-v-9ea40744][data-v-9ea40744] {
    margin-left: -368px;
    font-size: 20px;
    margin-bottom: 15px;
}
.dcmnts4[data-v-9ea40744][data-v-9ea40744] {
    margin-left: -166px;
    font-size: 20px;
    margin-bottom: 15px;
}
  .modal-title
  {
    color: white;
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
.buttonupdate
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

.buttonclose
{
    color: #ffffff;
    font-size: 0.9375rem;
    line-height: 1;
    font-weight: normal;
    cursor: pointer;
    background-color: gainsboro;
    border-color: gainsboro;
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