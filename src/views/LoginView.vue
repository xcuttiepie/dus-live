<template>

  <title>Login</title>
  
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
        <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9; background-image: url('assets/images/faces/bg.jpg')">
          <div class="box-root padding-top-- -48 padding-bottom--24 flex-flex flex-justifyContent--center">
          </div>
          <div class="formbg-outer">
            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15"><img src="assets/images/gifs/huh-looking.gif" alt="">Sign in to your account</span>
                
                  <div class="field padding-bottom--24">
                    <label for="email">Username/Email</label>
                    <input type="text" v-model="emails" @blur="myFunction()" required>
                  </div>
                  <div class="field padding-bottom--24">
                    <div class="grid--50-50">
                      <label for="password">Password</label>
                      <div class="reset-pass" >
                        <a  class="forgot" href="https://ticket.fastlogistics.com.ph/" target="_blank">Forgot your password?</a>
                      </div>
                    </div>
                    <input type="password" v-model="psw" required>
                  </div>
                  
          
                  <div class="field padding-bottom--24">
                    <label for="email">Sites:</label>
                    <select name="s" id="s" class="dropdown" v-model="sites" @change="switchSelect($event)" required>
                      <option value="" disabled selected hidden>---Select Sites---</option>
                      <option v-for="(branch, index) in branchs" :key="index">{{branch.branchName}}</option>   
                    </select>
                  </div> <br>
                  <img src="assets/images/gifs/smea-select-music.gif" alt="" class="here">
                  <div class="field padding-bottom--24">
                    
                    <button @click="login" type="submit" id="button" class="logins"> <i class="fa-solid fa-arrow-right-to-bracket"></i> Login</button>
                  </div>
                  <h2><span></span></h2>
          
                  <div class="social-login">
                    <div class="footer-link padding-top-- 24">
                      <span>Don't have an account?<a class="request"  href="https://ticket.fastlogistics.com.ph/" target="_blank">Request</a></span>
                    </div>
                
                  </div>
                    
                  
              </div>
            </div>
           <!--<div class="footer-link padding-top--24">
              <div class="footer">
                <span><a href="#">© PROJECT1</a></span>
                <span><a href="#">Contact</a></span>
                <span><a href="#">Privacy & terms</a></span>
              </div>
            </div>--> 
          </div>
        </div>
      </div>
    </div>
  </body>
  </template>
  
  <script setup>
    import router from '@/router';
    import axios from 'axios';
    import { connecttoapi } from '../services/httpService'
    import { ref, onMounted  } from 'vue' ;

    const Swal = require('sweetalert2')

    const emails = ref ('')
    const psw = ref ('')
    const status = ''
    const email  = ref([])
    const sites = ref([])
    const branchs = ref([])
    const DetailsID = ref([])
    const selectsites = ref([])

    sites.value = ""

    onMounted(() =>{
      myFunction()
      fetchBRANCHID()
     
  })

  function switchSelect($event)
{
  selectsites.value = $event.target.value;
  localStorage.Site = selectsites.value
  fetchBRANCHID()
}

function fetchBRANCHID()
{
    if(emails.value != "" || psw.value != "")
    {
            //FETCH BRANCHID
      axios.get('https://localhost:7168/api/Branch/Fetch/BranchID/' + selectsites.value).then((res) => {
          DetailsID.value = res.data
          localStorage.SitesID = DetailsID.value.at(0).id
          console.log(localStorage.SitesID)
      })
    }   
}

function myFunction()
{
    localStorage.setItem('emails', emails.value)
    if(localStorage.getItem('emails') == "")
    {
    }
    else
    {
      axios.get('https://localhost:7168/api/Branch/Fetch/Email/' + localStorage.getItem('emails')).then((res) => {
        branchs.value = res.data
      })
    }
}

  function login()
    {
       if(emails.value =="" || psw.value == "")
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
                    title: 'input your credentials.'
                  })
       }
         else if(emails.value !="" && psw.value != "")
        {
              axios.post('https://localhost:7168/api/User/Login/User', {
              Email: emails.value,
              Username: emails.value,
              Password: psw.value,
              Status: status
              })
              .then(function(response) 
              {
                console.log(response.data)
              
              if(response.data == "Correct Details")
                {
                  localStorage.Name = emails.value;

                  axios.get('https://localhost:7168/api/User/Fetch/Email/' + localStorage.Name).then((res) => {
                    email.value = res.data
                    localStorage.EmailID = email.value.at(0).id
                    localStorage.Nameacc  = email.value.at(0).username
          
                  })

                    if(sites.value == "")
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
                    title: 'Site is required '
                  })
                    }
                    else
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
                    icon: 'success',
                    title: 'Signed in successfully'
                  }).then(function(){
                      router.push('/DashboardView')
                    })  
                    }

                   
                }
                else if(response.data == "Incorrect Password")
                {
                  console.log(response.data)
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
                    icon: 'error',
                    title: 'Incorrect Password'
                  })
                }
                else if(response.data == "No existing users")
                {
                  
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    iconColor: 'white',
                    customClass: {
                      popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 2500,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                  })
                  Toast.fire({
                    icon: 'info',
                    title: 'No existing user.\nPlease signup first.'
                  })
               
                }
                else if (response.data == "Inactive Account")
                {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    iconColor: 'white',
                    customClass: {
                      popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 2500,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                  })
                  Toast.fire({
                    icon: 'error',
                    title: 'Your account is inactive.\nPlease tell your adminstrator.'
                  })
                }   
              })
        }

        
        }
  </script>
  
  <style scoped>
  .here
  {
    margin-left: 152px;
    margin-top: -43px;
    width: 100px;
    height: auto;
}
    
  
  img {
      width: 50px;
      height: auto;
      margin-top: -35px;
    }
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
      background-color: #faf9f9;
  }
  h1 {
      letter-spacing: -1px;
      color: #5469d4;
    text-decoration: unset;
  }

  .request , .forgot
  {
    color: #3333ff;
  }
  .login-root {
      background: #fff;
      display: flex;
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
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
    padding-top: 30px;
  }
  .padding-top--48 {
    padding-top: 48px;
  }
  .padding-bottom--24 {
    padding-bottom: 24px;
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
      max-width: 448px;
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
  }
  .reset-pass a,label {
      font-size: 14px;
      font-weight: 600;
      display: block;
  }
  .reset-pass > a {
      text-align: right;
      margin-bottom: 10px;
  }
  .grid--50-50 {
      display: grid;
      grid-template-columns: 50% 50%;
      align-items: center;
  }
  
  .field input , .dropdown {
      font-size: 16px;
      line-height: 28px;
      padding: 8px 16px;
      width: 100%;
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
  
  a.ssolink {
      display: block;
      text-align: center;
      font-weight: 600;
  }
  .footer-link span {
      font-size: 14px;
      text-align: center;
  }
  .footer a {
      color: #697386;
      font-weight: 600;
      margin: 0 10px;
  }
  
  .footer{
  padding-top: 110px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
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
    margin-left: 100px;
  }
  .logins:hover 
  {
    background-color: gray;
    transition: 1s;
  }
  h2 {
     width: 100%; 
     text-align: center; 
     border-bottom: 1px solid #000; 
     line-height: 0.1em;
     margin: 10px 0 20px; 
  } 
  
  h2 span { 
      background:#fff; 
      padding:0 10px; 
  }
  
  h3{
      display: block;
      font-size: 1.17em;
      font-weight: bold;
      margin-left: -200px;
  }
  
  .social-login {	
    height: 50px;
    width: 150px;
    text-align: center;
    bottom: 0px;
    right: 0px;
    color:black;
    margin-left: 100px;
  }
  
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .social-login__icon {
    padding: 14px 12px;
    color:gray;
    text-decoration: none;	
    text-shadow: 0px 0px 8px #7875B5;
    height: 25px;
  }
  
  .social-login__icon:hover {
    transform: scale(1.5);	
  }
  </style>