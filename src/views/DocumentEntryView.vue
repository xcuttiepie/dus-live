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
              <h3 class="page-title"> Document Entry View </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <router-link to='/HomeView' href="#"> Permit Entry</router-link>
                  <li class="breadcrumb-item active" aria-current="page"> / Document Entry View</li>
                </ol>
              </nav>
            </div>
            <div class="row">
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Details</h4>
                    <p class="card-description">Basic Information </p>
                    <form class="forms-sample">
                      <input type="hidden" v-model="attachmntID" placeholder="">
                      <div class="form-group">
                        <label for="exampleInputUsername1">Type of Document:</label>
                        <input type="text" class="form-control" v-model="documents" disabled>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Date & Time Uploaded:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="date" disabled>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Full Details: </label>
                        <textarea id="exampleInputConfirmPassword1" class="form-control" v-model="fulldetails" rows="12" cols="100" disabled></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Files</h4>
                    <p class="card-description"> Click the file to download</p>
                    <form class="forms-sample">
                      <div class="form-group row">
                        <table class="table">
                          <thead>
                          <tr >
                            <th>Attachment</th>
                            <th>Action</th>
                          </tr>
                          </thead>
                        <tbody>
                          <tr v-for="(Attachment, index) in Attachments" :key="index">
                            <td href="" @click="download(Attachment)" class="attach" style="font-size:15px;">{{Attachment.filename}}</td>
                            <td><button @click="deletes(Attachment)" class = "btn btn-danger ml-2" type="delete" v-if="isDelete == 1"><i class="fa-solid fa-trash"></i></button></td>
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
import router from "@/router";
import axios from 'axios'
import { connecttoapi } from '../services/httpService'
import { ref , onMounted} from 'vue'
const Swal = require('sweetalert2')
const documents = ref('')
const date = ref('')
const fulldetails = ref('')
const attachmntID = ref('')
const Attachments = ref([])

const transid = localStorage.transid
documents.value = localStorage.document
date.value = localStorage.dateUploaded
fulldetails.value = localStorage.fullDetails

const isdelete = 1
const EmailID = localStorage.EmailID
const buttonrole = ref([])
const isDelete = ref('')
const isAdd = ref('')
const isEdit = ref('')

  
const menu = "Document Entry"

onMounted(() =>{
      fetchData()
      fetchButton()
     /* document.getElementById("transasctions").classList.remove("collapse");
      document.getElementById("auth").classList.add("show");
      document.getElementById("mainID2").classList.add("active");
      document.getElementById("entry").classList.add("active");*/
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
    
          await connecttoapi().get('https://localhost:7168/api/PrmtAttachment/Fetch/TransactionID/' + localStorage.transid).then((res) => {
            Attachments.value = res.data
              console.log(res.data)

          })   
  
  }
  
  function download(Attachment){
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
                    title: 'File Downloaded'
                  })
         axios({
          url: 'https://localhost:7168/api/PrmtAttachment/Download/files?files='+ Attachment.filename +'&folder=' + transid,
          method: 'POST',
          responseType: 'blob',
         }).then((res) => {
          var fileURL = window.URL.createObjectURL(new Blob([res.data]));
          var fileLink = document.createElement('a');
          console.log(res.data)
          fileLink.href = fileURL;
          fileLink.setAttribute('download', Attachment.filename);
          document.body.appendChild(fileLink);
      
          fileLink.click();
         })
      }

    function deletes(Attachment){
    localStorage.ttchmntD = Attachment.id
    attachmntID.value = localStorage.ttchmntD
    console.log(isdelete)
    console.log(EmailID)
    console.log(attachmntID.value)


    
    if(confirm("Do you really want to delete?"))
    {

    axios({ 
          method: 'post',
          url: 'https://localhost:7168/api/PrmtAttachment/Delete/Attachment/Table',
          data: 
          {
            id: attachmntID.value,
            isDelete: isdelete,
            modifiedBy: EmailID
          }
        });
        alert("Successfully Deleted.")
        window.location.reload()
    } 
  }

  function back()
  {
    router.push('/HomeView')
  }
</script>

<style scoped>

.blue[data-v-6ce7c692] {
    margin-top: -55px;
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
    height: 49px;
    line-height: 20px;
    list-style: none;
    outline: none;
    padding: -5px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    -moz-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-left: 93%;
    top: -52px;
    width: 80px;
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
.textarea
{
  width: 453px;
  margin-top: -12px;
  cursor: not-allowed;
  color: black;

}

hr.solid {
  border-top: 1px solid #bbb;
  margin-top: -2rem;
    margin-bottom: .8rem;
}
hr.solids
{
  border-top: 1px solid #bbb;
}
.blue
{
  margin-top: 5px;
}

.documents,.fulldetails,.dateuploaded
{
  font-size: 20px;
}
.documents[data-v-6ce7c692] {
    margin-left: 0px;
}
.fulldetails
{
  margin-left: 0px;
}
.dateuploaded
{
  margin-left: 0px;
}
.select
{
  margin-left: 20px;
}

</style>