<template>
  <div class="float-container">
    <div class="float-child">
      <label class="click" @click="back"><i class="fa-solid fa-arrow-left"></i> Back</label>
          <div class="login-form">
            <div class="form-item-email">
                <input type="hidden" v-model="attachmntID" placeholder="">
                <label for="document" class="documents">Type of Document: </label>
                  <select v-model="documents"  class= "select" disabled>
                    <!--<option v-for="(list, index) in lists" :key="index">{{list.permits}}</option>-->
                    <option values="Business Permit">Business Permit</option>
                    <option values="FSIC">FSIC</option>
                    <option values="Sanitary Permit">Sanitary Permit</option>
                    <option values="Barangay Permit">Barangay Permit</option>
                    <option values="Dole 1020 Registration">DOLE</option>
                  </select>
            </div> 
            <div class="form-item-password">
              <label for="dateuploaded" class="dateuploaded">Date & Time Uploaded:</label>
              <input type="email" class="form-control" v-model="date" disabled>
            
              <p><label for="fulldetails" class="fulldetails" >Full Details</label></p>
              <textarea class="textarea" v-model="fulldetails" rows="12" cols="50" disabled>WRITE YOUR DETAILS HERE</textarea><br>
            </div>
          <div>
        </div>
      </div>
    </div> 
          <div class="float-child">
            <div class="blue">FILES</div><br>
            <ul class="b">
              <li>Click the file to download.</li>
            </ul><br>
            <table class="table">
              <thead>
              <tr>
                <th>Attachment</th>
                <th>Action</th>
              </tr>
              </thead>
  
  
            <tbody>
              <tr v-for="(Attachment, index) in Attachments" :key="index">
                <td href="" @click="download(Attachment)" class="attach">{{Attachment.filename}}</td>
              
                <td><button @click="deletes(Attachment)" class="delete" type="delete"><i class="fa-solid fa-trash"></i></button></td>
  
              </tr> 
            </tbody>
          </table>
        </div>
    </div>
  </template>
  
  <script setup>
  import router from "@/router";
  import axios from 'axios'
  import { connecttoapi } from '../services/httpService'
  import { ref , onMounted} from 'vue'
  
  
  const documents = ref([])
  const date = ref([])
  const fulldetails = ref([])
  const Attachments = ref([])
  const attachmntID = ref('')
  const transid = localStorage.transid
  

  documents.value = localStorage.document
  date.value = localStorage.dateUploaded
  fulldetails.value = localStorage.fullDetails

  const isdelete = 1
  const EmailID = localStorage.EmailID


  onMounted(() =>{
      fetchData()
  })

  
  async function fetchData(){
    
          await connecttoapi().get('https://localhost:7168/api/PrmtAttachment/Fetch/TransactionID/' + transid).then((res) => {
            Attachments.value = res.data
              console.log(res.data)
  
            return{
              Attachments
            }
          })   
  
  }
  
  function download(Attachment){
    
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
  .float-child {
      width: 45%;
      float: left;
      padding: 10px;
      margin: 30px;
      border: 2px solid gray;
      border-radius: 15px;
      background-color: pink;
  } 
  
  
  .float-container {
      padding: 0px;
      margin: 0px;
      color: black;
  }
  
  .login-form{
    margin-top: 30px;
  }
  
  table {
    width: 100%;
    margin-top: -500px;
  }
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
    background:gray;
    text-align: center;
   
  }
  .table th, .table td{
    padding: 12px 15px;
    text-align: center;
    color: black;
  }
  
  tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper)
  {
      background: #e6e6e6;
  }
  
  .select, .textarea , .form-item-password input[data-v-698d1c24]
  {
    cursor: not-allowed;
  }
  
  .fulldetails, .documents , .dateuploaded{
    font-size: 20px;
  }
  
  
  
  .click{
    cursor: pointer;
    color: black;
    margin-left: 0;
    margin-top: 10px;
    font-size: 20px;
  }
  .form-item {
    margin: 10px;
    padding-bottom: 10px;
    display: flex;
  }
          
  .form-item input {
    width: 190px;
    height: 30px;
    border: 2px solid #e1dede69;
    border-radius: 5px;
    background: white;
    color: black;
    text-align: left;
    margin: 0 5px;
  }
  .form-item-email {
    margin: 0 5px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
  .form-item-email input {
    height: 30px;
    border: 2px solid #e1dede69;
    border-radius: 5px;
    background: white;
    color: black;
    text-align: left;
    margin: 0 5px;
  }
  .form-item-password {
    margin: 5px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;  
  } 
  .form-item-password input {
    height: 30px;
    border: 2px solid #e1dede69;
    border-radius: 5px;
    background: white;
    color: black;
    text-align: left;
    margin: 5px 5px;
  }
  </style>