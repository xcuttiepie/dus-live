<template>
  <head>
<title>Document Update</title>
</head>
<div class="body-content">
  <div class="container">
    <h3 class="click" @click="back"><i class="fa-solid fa-arrow-left"></i> Back</h3>

    
      <div class="login-form">
          <div class="form-item-email">
            <input type="hidden" v-model="ID" placeholder="">
            <label for="text" class="dateuploaded">Document Name: </label>
            <input type="text" class="dcmntnm" v-model="dcmntnm" ><br>   
      </div>

            
      <div class="form-group">
        <label class="lbl">Status: </label><br>
          <select v-model="statustype" class="select" >
            <option class="trues" value="" selected disabled="disabled">-Select User Status-</option>    
            <option class="true"  value="Active">Active</option>
            <option class="true" value="Inactive">Inactive</option>
          </select>
      </div>
            
          <div class="form-btns">
              <button @click="sbmt" class="update" type="submit">UPDATE</button>   
          </div>
    </div>
  </div>
</div>

</template>

<script setup>
  import axios from 'axios'
  import router from '@/router';
  import { ref} from 'vue'
  import { connecttoapi } from '../services/httpService'
  

  const ID = ref('')
  const dcmntnm = ref('')
  const EmailID = localStorage.EmailID
  const statustype = ref([])
  const status1 =  'A'
  const status2 = 'I'

  
  const updatedprmtd = localStorage.PermitId
  const updatedprmtnm =  localStorage.Permitnm 



  ID.value = updatedprmtd
  dcmntnm.value = updatedprmtnm


  function sbmt(){
        if( statustype.value == "Active")
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
            alert("Successfully Updated")
            router.push('/DocumentView')
        }

        else if( statustype.value == "Inactive")
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
          alert("Successfully Updated")
          router.push('/DocumentView')
        }

        else{
          alert("No Data Changes")
        }
  }
  function back(){
    router.push('/DocumentView')
  }
</script>

<style scoped>
.dateuploaded
{
  font-size: 20px;
  margin-bottom: 5px ;
  padding-top: -150px;
}

.login-form
{
  margin: 0;
  padding: 0;
}
.lbl{
  font-size: 20px;
  margin-left: 67%;
  margin-bottom: -50%;
}

.select
{
  margin-left: 67%;
}



.click
{
  cursor: pointer;
  margin-left: -400px;
  color: black;
  padding-top: 5%;
  padding-bottom: 50px;
  margin-left: -80%;
  
}
.form-group
{
 margin-left: -200%;
 margin-top: -90px;
}
.body-content 
{
  padding-top: 10vh;
  padding-left: -35%;
  align-content: center;
  text-align: center;
}
.container 
{
  width: 38%;
  height: 600%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
              
  border: 2px solid rgba(255, 255, 255, 0.049);
  border-radius: 15px;
  background:#ffccd4;
  color: black;

}

form 
{      
  display: flex;
  flex-direction: column;
}
  
      
.form-item-email 
{
  margin: 0 -5%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20%;
}
.form-item-email input 
{
  height: 100%;
  border: 2px solid #e1dede69;
  border-radius: 5px;
  background: white;
  color: black;
  text-align: left;
  margin: 0 5px;
}


.form-btns 
{
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px 0;
  margin-top: 20px;
}
        
.form-btns button 
{
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
.form-btns button:hover 
{
  background: white;
  color: black;
}
</style>