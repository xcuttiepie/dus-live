<template>
  <PageLoader/>
  <head>
<title>Dashboard</title>
</head>
<div id="mySidenav" class="container-scroller">
  
      <!-- partial:partials/_sidebar.html -->
          <!---start SIDENAV-->
          <SideNav/>
      <!---END SIDENAV-->
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
                    <h4 class="card-title">DASHBAORD</h4> 
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-row justify-content-between">
                      <h4 class="card-title">DOCUMENTS</h4>
                    </div>
                    <div class="preview-list">
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <i class="fa-solid fa-file"></i>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">PERMITS ENTRY</h6>
                            </div>
                            <p class="text-muted">{{permitentry}}</p>
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
                    <div class="d-flex flex-row justify-content-between">
                      <h4 class="card-title">BRANCH</h4>
                    </div>
                    <div class="preview-list">
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <i class="fa-solid fa-code-branch"></i>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">TOTAL BRANCHES</h6>
                            </div>
                            <p class="text-muted">{{branch}}</p>
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
                    <div class="d-flex flex-row justify-content-between">
                      <h4 class="card-title">USER</h4>
                    </div>
                    <div class="preview-list">
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <i class="fa-solid fa-users"></i>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">REGISTERED USERS</h6>
                            </div>
                            <p class="text-muted">{{user}}</p>
                          </div>
                        </div>
                      </div>
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
                    
                      <h4 class="card-title" href="https://www.fast.com.ph/contact-us/" target="_blank">CONTACTS</h4>
                      <p class="text-muted mb-1 small">+63 2 8784 3278</p>
                 
                      
                     
                    </div>
                    <div class="preview-list">
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <img src="assets/images/faces/face6.jpg" alt="image" class="rounded-circle" />
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">FASTCARGO LOGISTICS CORPORATION</h6>

                            </div>
                            <p class="text-muted text-small">BACOLOD</p>
                            <ul>
                              <li class="text-muted text-small">Magsaysay Ave., Singcang, Bacolod City</li>
                              <li class="text-muted text-small">Tel No. : (034) 433.0558 Fax No. : (034) 433.0689</li>
                            </ul>

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
                              <h6 class="preview-subject">FAST SERVICES CORPORATION</h6>
                            </div>
                            <p class="text-muted text-small">BATINO</p>
                            <ul>
                              <li class="text-muted text-small">Nestle – South Distribution Center, Brgy. Batino,</li>
                              <li class="text-muted text-small">Calamba Laguna Tel No. : (049) 545.0123 Fax No. : N/A</li>
                            </ul>
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
                              <h6 class="preview-subject">FAST DISTRIBUTION</h6>
                            </div>
                            <p class="text-muted text-small">BACOLOD</p>
                            <ul>
                              <li class="text-muted text-small">Building I-Villasor Warehouse, Villa Milagros Brgy.</li>
                              <li class="text-muted text-small">Tangub, Bacolod City, Negros Occidental</li>
                              <li class="text-muted text-small">Tel No. : (034) 444.0693/444.0037; (035) 225-8839</li>
                              <li class="text-muted text-small">Fax No. : (034) 444.0693</li>
                            </ul>
                           
                          </div>
                          
                        </div>
                      </div>
                      <a class="see" href="https://www.fast.com.ph/contact-us/" target="_blank">See more</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="preview-item border-bottom">
                    <h4 class="card-title">GALLERY</h4>
                    </div><br>
                    <h4 class="card-title">Photos</h4>
                    <div class="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                      <div class="item">
                        <img src="assets/images/dashboard/image5.png" alt="">
                      </div>
                      <div class="item">
                        <img src="assets/images/dashboard/image1.jpg" alt="">
                      </div>
                      <div class="item">
                        <img src="assets/images/dashboard/image2.jpg" alt="">
                      </div>
                      <div class="item">
                        <img src="assets/images/dashboard/image3.jpg" alt="">
                      </div>
                      <div class="item">
                        <img src="assets/images/dashboard/image4.jpg" alt="">
                      </div>
                      <div class="item">
                        <img src="assets/images/dashboard/image7.jpg" alt="">
                      </div>
                    </div>
                    <h4 class="videos">Video</h4>
                  </div>
                  <video width="320" height="200" controls class="video" autoplay loop muted>
                        <source src="assets/images/dashboard/VID1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>
                </div>
              </div>

              <div class="col-md-12 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Announcements</h4>
                    
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
  import SideNav from './SideNav.vue';
  import TopNavView from './TopNavView.vue';

  import { connecttoapi } from '../services/httpService'
  import { ref, onMounted } from 'vue'

  const branch = ref([])
  const user = ref([])
  const permitentry = ref([])
  


  onMounted(() =>{
    branches()
    users()
    permits()
    document.getElementById("dashbaord").classList.add("active");
 
  })
  
  async function branches(){
      await connecttoapi().get('https://localhost:7168/api/Branch').then((res) => {
       
          branch.value = res.data
       
      })
    }

    async function users(){
      await connecttoapi().get('https://localhost:7168/api/User/Count/User').then((res) => {
        
          user.value = res.data
      })

    }

    async function permits(){
      await connecttoapi().get('https://localhost:7168/api/PrmtDetail/Count/Document').then((res) => {
         
          permitentry.value = res.data
         
      })
    }
    
</script>

<style scoped>
.item{
  margin-top: 0px;
}
.video
{
  margin-left: 30px;
  margin-bottom: 45px;
  padding-top: 10px;
  border-radius: 10px;
  border: 2px solid pink;
}
.videos{
  margin-top: 10px;
  margin-bottom: -20px;
}
.see{
  color: white;
  margin-left: 240px;
}

</style>