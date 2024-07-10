<template>
  <head>
<title>Branch Update</title>
</head>
<div class="body-content">
  <div class="container">
    <h3 class="click" @click="back"><i class="fa-solid fa-arrow-left"></i> Back</h3>

    
      <div class="login-form">
          <div class="form-item-email">
            <input type="hidden" v-model="ID" placeholder="">
            <label for="dateuploaded" class="dateuploaded">Branch Code</label>
            <input type="datetime" class="form-control" v-model="brnchcd" ><br>
              
          </div>
	        <div class="form-item-password">
            <label for="dateuploaded" class="dateuploaded">Branch Name:</label>
            <input type="datetime" class="form-control" v-model="brnchnm" ><br>
           
    
              <p><label for="fulldetails" class="fulldetails">Branch Address:</label></p>
              <textarea class="textarea" v-model="brnchddrss" rows="4" cols="50">WRITE YOUR DETAILS HERE.</textarea><br>
            </div>

            <div class="col-sm-6 no-pading">
              <div class="form-group">
                <label class="lbl">Status: </label><br>
                <select v-model="statustype"   class="select" >
                    <option class="trues" value="" selected disabled="disabled">-Select User Status-</option>    
                    <option class="true"  value="Active">Active</option>
                    <option class="true" value="Inactive">Inactive</option>
                </select>
              
              </div>
            </div>
          <div class="form-btns">
              <button @click="sbmt" class="signup" type="submit">UPDATE</button>   
          </div>
    </div>
  </div>
</div>

</template>

<script setup>
  import axios from 'axios'
  import router from '@/router';
  import { ref,onMounted } from 'vue'
  import { connecttoapi } from '../services/httpService'
  import Swal from 'sweetalert2/dist/sweetalert2.js'

  

  const ID = ref('')
  const brnchcd = ref('')
  const brnchnm = ref('')
  const brnchddrss = ref('')
  const EmailID = localStorage.EmailID
  const statustype = ref([])
  const status1 =  'A'
  const status2 = 'I'

  
  const updatedbrnchcd = localStorage.branchcode
  const updatedbrnchnm = localStorage.branchname
  const updatedbrnchddrss = localStorage.branchAddress
  const updatedId =  localStorage.BranchId 



  ID.value = updatedId
  brnchcd.value = updatedbrnchcd
  brnchnm.value = updatedbrnchnm
  brnchddrss.value = updatedbrnchddrss



  function sbmt(){

    localStorage.BranchId  = ID.value
    localStorage.branchAddress = brnchcd.value
    localStorage.branchname = brnchnm.value
    localStorage.branchcode = brnchddrss.value

        if( statustype.value == "Active")
        {
            const statustype = status1
              axios({
              method: 'post',
              url: 'https://localhost:7168/api/Branch/Update/Branch/Table',
              data: 
              {
                id:  ID.value,
                branchcode: brnchcd.value,
                branchname: brnchnm.value,
                branchAddress: brnchddrss.value,
                status: statustype,
                modifiedBy: EmailID
              }
            })

            router.push('/BranchView')
        }

        else if( statustype.value == "Inactive")
        {
          const statustype = status2
            axios({
            method: 'post',
            url: 'https://localhost:7168/api/Branch/Update/Branch/Table',
            data: 
            {
              id:  ID.value,
              branchcode: brnchcd.value,
              branchname: brnchnm.value,
              branchAddress: brnchddrss.value,
              status: statustype,
              modifiedBy: EmailID
            }
          })

          router.push('/BranchView')
        }

        else{
          alert("No Data Changes")
        }
  }
  function back(){
    router.push('/BranchView')
  }
</script>

<style scoped>
.dateuploaded , .fulldetails, .documents , .lbl{
  font-size: 20px;

}

.lbl{
 margin-bottom: 10%;
 margin-left: 90%;
}
.select{
  margin-left: 67%;
}
.login-form{
  margin-bottom: 0;
  margin-top: 10px;
}

.textarea{
  resize: none;
  margin-top: -20px;
}

.click{
  cursor: pointer;
  margin-left: -400px;
  color: black;
  margin-bottom: 1%;
  
}
.body-content {
  padding-top: 10vh;
  padding-left: -35%;
  align-content: center;
  text-align: center;
  
}
.container {
  
  width: 550px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
              
  border: 2px solid rgba(255, 255, 255, 0.049);
  border-radius: 15px;
  background:#ffccd4;
  color: black;
}

form {      
  display: flex;
  flex-direction: column;
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

.form-btns {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px 0;
  margin-top: 20px;
}
        
.form-btns button {
  margin: auto;
  font-size: 20px;
  padding: 5px 15px;
  border: 0;
  border-radius: 15px;
  color: white;
  background: #404040;
  width: 280px;
  cursor: pointer;
}

.form-btns button:hover {
  background: white;
  color: black;
}
</style>