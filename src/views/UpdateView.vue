<template>
  <head>
<title>Add New</title>
</head>
<div class="body-content">
  <div class="container">
    <h3 class="click" @click="back"><i class="fa-solid fa-arrow-left"></i> Back</h3>

    
      <div class="login-form">
          <div class="form-item-email">
            <input type="hidden" v-model="ID" placeholder="">
              <label for="document" class="documents">Choose Type of Document: </label>
  			        <select v-model="DOCUMENTS">
                  <option v-for="(list, index) in lists" :key="index">{{list.name}}</option>
                </select>
          </div>
	        <div class="form-item-password">
            <label for="dateuploaded" class="dateuploaded">Date Uploaded:</label>
            <input type="datetime" class="form-control" v-model="DATE" ><br>
           
    
              <p><label for="fulldetails" class="fulldetails">Full Details</label></p>
              <textarea class="textarea" v-model="FULLDETAILS" rows="4" cols="50">WRITE YOUR DETAILS HERE.</textarea><br>
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
  
  const lists = ref([])
  const DOCUMENTS = ref([])
  const DATE = ref('')
  const ID = ref('')
  const FULLDETAILS = ref('')
  const EmailID = localStorage.EmailID
  const statustype = ref([])
  const status1 =  'A'
  const status2 = 'I'

  
  const updatedDocument = localStorage.document
  const updatedDate = localStorage.dateUploaded
  const updatedDetails = localStorage.fullDetails
  const updatedId =  localStorage.id 

  console.log(updatedDocument)
  console.log(updatedDate)
  console.log(updatedId)
  console.log(updatedDetails)

  ID.value = updatedId
  DOCUMENTS.value = updatedDocument
  DATE.value = updatedDate
  FULLDETAILS.value = updatedDetails

  console.log(ID.value)
  console.log( DOCUMENTS.value)
  console.log(DATE.value)
  console.log(FULLDETAILS.value)

  onMounted(() =>{
    fetchData()
})

  async function fetchData(){
    await connecttoapi().get('https://localhost:7168/api/Document').then((res) => {
        console.log(res.data)
        lists.value = res.data
    })
  }

  function sbmt(){
        const statuss = " "
        localStorage.id  = ID.value
        localStorage.dateUploaded = DATE.value
        localStorage.document = DOCUMENTS.value
        localStorage.fullDetails = FULLDETAILS.value

        console.log(ID.value)
        console.log( localStorage.dateUploaded)
        console.log(localStorage.document)
        console.log(localStorage.fullDetails)

       if(statustype.value == "" ){
        alert("Please fill the status dropdown.")
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
          alert("Successfully Updated")
          router.push('/HomeView')
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
          alert("Successfully Updated")
          router.push('/HomeView')
        }

        else{
          alert("No Data Changes")
        }


  }



  function back(){
    router.push('/HomeView')
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
.form-control
{
    cursor: not-allowed;
}
.login-form{
  margin-bottom: 10px;
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
  margin-bottom: 40px;
  
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