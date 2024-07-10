<template>
  <head>
  <title>Add New</title>
  </head>
  
  
  <div class="body-content">
    <div class="container">
      <h3 class="click" @click="back"><i class="fa-solid fa-arrow-left"></i> Back</h3>
  
      
        <div class="login-form">
  
         <!-- <input type="hidden" v-model="first" placeholder="">-->  
            <div class="form-item-email">
                <label for="document" class="documents">Choose Type of Document: </label>
                  <select v-model="document">
                    <option v-for="(permit, index) in permits" :key="index">{{permit.name}}</option>
                  </select>
            </div>
            <div class="form-item-password">
            <!-- <label for="dateuploaded" class="dateuploaded">Date Uploaded:</label>---> 
             <!-- <input v-model="date" type="text" disabled><br>---> 
              <p><label for="fulldetails" class="fulldetails">Full Details</label></p>
              <textarea class="textarea" v-model="fulldetail" rows="4" cols="50">WRITE YOUR DETAILS HERE</textarea><br>
        
                <br><label for="myfile" class="file">Select a file:</label>
                <input  type="file" id="files" ref="file"  v-on:change="handleFileUpload($event)" multiple> 
        
  
              </div>
              
            <div class="form-btns">
                <button @click="sbmt" class="signup" type="submit">ADD</button>   
            </div>
      </div>
    </div>
  </div>
  
  </template>
  
  <script>
    import router from '@/router';
    import axios from 'axios'
    export default {
          data(){
  
              return {
                files: ([]),
                document: '',
                  date: sessionStorage.Year,
                  fulldetail: '',
               // first: sessionStorage.LoginData,  
                  permits: ([]),
                  firsts: ([]),
                  Status: 'A',
      
              }
          }, 
          methods: 
            {
              getUser(){
                const URL = 'https://localhost:7168/api/Document';
                axios
                .get(URL)
                  .then(res => {
                    this.permits = res.data;
                    console.log(res.data);
                })
              },
              handleFileUpload(event){
                  this.files = event.target.files;
                     //var filenames = event.target.files.name;
                     //this.file = this.$refs.file.files[0];
                     //var filename = this.$refs.file.files[0].name;
                     //localStorage.files = filenames
                     //console.log(this.files)
                     //console.log(filenames)
              },
              sbmt()
              {
                if (this.files == "" || this.document =="" || this.fulldetail =="" )
                {
                  alert("Complete the details.")
                }
                else
                {
                  try {
                                             // let firsts = sessionStorage.LoginData
                      let formData = new FormData();
                      for (var i = 0; i < this.files.length; i++)
                      {
                          
                          let file = this.files[i];
                          var filename = file.name
         
                          formData.append('uploadAttachments', file);
                         // formData.append('folder', firsts)
                        
                          localStorage.Filename = filename
                          console.log(filename)
                       //WS   console.log(firsts)
  
  
                          axios.post('https://localhost:7168/api/PrmtAttachment/Inserting/Table',
                      {
                          filename: localStorage.Filename,
                          newFilename: localStorage.Filename,
                          filepath: filename,
                          //newFilename: localStorage.Filename
               
                          
                      }
                          )
                      .then(function() {
                          console.log('AttachmentFileName Uploaded!')
                          router.push('/HomeView')
                      });
                      }
                      
                      let config = {
                          header : {
                              'Content-Type' : 'multipart/form-data'
                          }
                      };
                      console.log(formData)
                      axios.post('https://localhost:7168/api/PrmtDetail/MultipleUpload/files/Table',
                      formData, config
                      ).then(function(){
                      console.log('SUCCESS!!');
                      });
  
                    axios.post('https://localhost:7168/api/PrmtDetail/Inserting/Data/Table', 
                    {
                          document: this.document,
                          fullDetails: this.fulldetail,
                          status: this.Status,
          
                    })
                    .then(function() {
                          console.log('AttachmentFileName Uploaded!')
                          alert("Successfully Added")
                          router.push('/HomeView')
                      })
                      .catch(function(f){
                          console.log(f)
                      });
                      }

                    
                  catch (error) 
                  {
                  console.log(error)
                  }
                }
              },
                back(){
                router.push('/HomeView')
              }
          },
          mounted(){
              this.getUser();
              },
      }
  </script>
  
  <style scoped>
  
  .dateuploaded , .fulldetails , .file , .documents{
    font-size: 20px;
  }
  
  .file{
    margin-top: -20px;
  }
  
  .textarea{
    margin-top: -20px;
    resize: none;
  }
  
  .click{
    cursor: pointer;
    margin-left: -400px;
    color: black;
    margin-top: 40px;
  }
  
  
  .body-content {
    padding-top: 10vh;
    padding-left: -35%;
    align-content: center;
    text-align: center;
  }
  .container {
    margin: auto;
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
    text-align: center;
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