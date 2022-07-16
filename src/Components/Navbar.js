import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">

        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{color:"white"}}>কাজের সন্ধান</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home" style={{color:"white"}}>হোম পেজ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/recruitorhire" style={{color:"white"}}>কাজের জন্য নিয়োগ করুন</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{color:"white"}}>আমাদের সম্পর্কে জানুন</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" style={{color:"white"}} data-bs-toggle="dropdown" aria-expanded="false">
                    কি ধরনের
                    কাজ আপনি করতে চান
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            
                  <li><a class="dropdown-item" href="/perdayjob"  style={{color:"black"}}>দিনের উপর ভিত্তি করে</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/permonthjob"  style={{color:"black"}}>মাসের উপর ভিত্তি করে</a></li>
                  <li><a class="dropdown-item" href="/perweekjob"  style={{color:"black"}}>সপ্তাহের উপর ভিত্তি করে</a></li>
                </ul>

              </li>
             
            </ul>
      

           
            </div>
         
        </div>
    
      </nav>
      <span id='google_translate_element'></span>
    </div>
  )
}

export default Navbar