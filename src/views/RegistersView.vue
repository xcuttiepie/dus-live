<template>
  <head>
  <title>Register</title>
  </head>
  <body>
    <div class="login-root">
      <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
        <div class="loginbackground box-background--white padding-top--64">
          <div class="loginbackground-gridContainer">
            <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
              <div class="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
              </div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
              <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
              <div class="box-root box-background--blue800" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
              <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
              <div class="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
              <div class="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
              <div class="box-root box-background--blue animationRightLeft" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
              <div class="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
              <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
            </div>
          </div>
        </div>
        <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
          <div class="box-root padding-top-- -48 padding-bottom--24 flex-flex flex-justifyContent--center">
  
          </div>

            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
          <div class="container">
        <div class="row">
        <div class="x_panel col-md-12 col-sm-12">
     
        <span class="padding-bottom--15"> <i class="fa-regular fa-user"></i> Sign up your account</span>

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
                    <div class="field padding-bottom--24">
                    <button @click="Signup" type="submit" class="logins"> <i class="fa-solid fa-arrow-right-to-bracket"></i> Signup</button>
                  </div>
                  <h2><span></span></h2>
                  
           
  
                  <div class="social-login">
                    <div class="footer-link padding-top-- 24">
                      <span>Have an account?<a href="" @click="lgnhr"> Login here</a></span>
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
  </body>
  
    </template>
    
    <script setup>
    import router from '@/router';
    import axios from 'axios'
    import {ref} from 'vue'
    
    
    const username = ref ('')
    const lastname = ref ('')
    const email = ref ('')
    const firstname = ref ('')
    const password = ref ('')
    const middlename = ref ('')
    const contact = ref ('')
    const address = ref ('')

    const status = ''

    function  validEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
  
    function Signup()
    {
      if(username.value == "" || middlename.value == "" || contact.value == "" || address.value == "" ||  firstname.value == "" || lastname.value == ""  || password.value == ""|| email.value == "")
      {
        alert("Please complete all the details.")
      }
      else if (!validEmail(email.value)) {
          alert('Invalid Email. Use the correct format.');
      }
      else
      {
          axios.post('https://localhost:7168/api/User/Register/User', {
                Username: username.value,
                Password: password.value,
                Email: email.value,
                Lastname: lastname.value,
                Firstname: firstname.value,
                Middlename: middlename.value,
                ContactNumber: contact.value,
                Address: address.value,
                Status: status
              })
              .then(function(response) 
              {
                console.log(JSON.stringify(response.data));
                if(response.data == "Successfully registered" )
                {
                  alert("Successfully Registered")
                 router.push('/')
                }
                else if (response.data == "Email Already Registered")
                {
                  alert("Email Already Registered.")
                }
                else if (response.data == "Minimum 8 password.")
                {
                  alert("Minimum 8 password.")
                }
                else if (response.data == "Username Already Registered")
                {
                  alert("Username Already Registered.")
                }
        })
      }
   }

   function lgnhr(){
    router.push('/')
   }
</script>
    
<style scoped >
  * {
    padding: 0;
    margin: 0;
    color: #1a1f36;
    box-sizing: border-box;
    word-wrap: break-word;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
  }

  body {
      min-height: 100%;
      background-color: #ffffff;
  }
.padding-bottom--15{
  margin-left: 130px;
  font-size: 25px;
}
.form-control{
  background-color: white;
}
input[type="text"], input[type="email"], input[type="password"] {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    -webkit-box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.2);
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.2);

    padding: 5px;
}

.social-login{
  margin-left:  150px;
}
  .login-root {
    top: 50%; /* IMPORTANT */
        left: 50%; /* IMPORTANT */
        display: block;
        position: absolute;
       
        width: 1000px;
        height: 667px;

        margin-top: -333.5px; /* HALF OF THE HEIGHT */
        margin-left: -500px; /* HALF OF THE WIDTH */  
  }
  .loginbackground {
      min-height: 692px;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      z-index: 0;
      overflow: hidden;
  }
  .flex-flex {
      display: flex;
  }
  .align-center {
    align-items: center; 
  }
  .center-center {
    align-items: center;
    justify-content: center;
  }
  .box-root {
      box-sizing: border-box;
  }
  .flex-direction--column {
      -ms-flex-direction: column;
      flex-direction: column;
  }
  .box-divider--light-all-2 {
      box-shadow: inset 0 0 0 2px #e3e8ee;
  }
  .box-background--blue {
      background-color: #5469d4;
  }
  .box-background--white {
    background-color: #ffffff; 
  }
  .box-background--blue800 {
      background-color: #212d63;
  }
  .box-background--gray100 {
      background-color: #e3e8ee;
  }
  .box-background--cyan200 {
      background-color: #7fd3ed;
  }
  .padding-top--64 {
    padding-top: 64px;
  }
  .padding-top--24 {
    padding-top: 10px;
  }
  .padding-top--48 {
    padding-top: 48px;
  }
  .padding-bottom--24 {
    padding-bottom: 20px;
  }
  .padding-horizontal--48 {
    padding: 48px;
  }
  .padding-bottom--15 {
    padding-bottom: 15px;
  }
  
  
  .flex-justifyContent--center {
    -ms-flex-pack: center;
    justify-content: center;
  }
  
  .formbg {
      margin: 0px auto;
      width: 100%;
      max-width: 60%;
      background: white;
      border-radius: 4px;
      box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;

  }
  span {
      display: block;
      font-size: 20px;
      line-height: 28px;
      color: #1a1f36;
  }

  label {
      margin-bottom: 10px;
      margin-top: 10px;
  }

  .grid--50-50 {
      display: grid;
      grid-template-columns: 50% 50%;
      align-items: center;
  }
  
  .field input {
      font-size: 16px;
      line-height: 28px;
      padding: 8px 16px;
      width: 40%;
      min-height: 44px;
      border: unset;
      border-radius: 4px;
      outline-color: rgb(84 105 212 / 0.5);
      background-color: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
  
  .field input:hover{
    color: pink;
  }
  
  input[type="submit"] {
      background-color: rgb(84, 105, 212);
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, 
                  rgb(84, 105, 212) 0px 0px 0px 1px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
  }
  .footer-link span {
      font-size: 15px;
      text-align: center;
  }
  .logins {
    background-color:#5469d4;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, 
                  rgb(84, 105, 212) 0px 0px 0px 1px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                  rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    width: 150px;
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
    margin-left: 180px;
    margin-top: 40px;
    
  }
  .logins:hover 
  {
    background-color: gray;
    transition: 1s;
  }
  </style>