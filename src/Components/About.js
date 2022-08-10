import React from 'react'
import Navbar from './Navbar'
import "./About.css"
const About = () => {
  return (
    <div>
    <Navbar/>
    <h1 class="head text-center">About Us</h1>
    <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://raw.githubusercontent.com/rahamantauhid2002/about.githubio/main/dd.jpeg" class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">What is Workers Website?</h4>
              <p class="card-text">An underestimated service worker feature is its extensibility Service workers are designed to be the backbone that supports additional functionality. The first two features shipping in browsers are native push notifications and background sync. More new APIs are currently being debated and should start appearing in browsers in the near future.

                Service workers live in their own thread and do not have access to the DOM. They also have their own global scope, referred to using the 'self' object.
                
                The also require a site is served using HTTPS. This requirement is due to the powerful features service workers offer. HTTPS prevents many common attacks. Today all sites should be served using HTTPS as the barriers to implement have been lifted and the minimal amount of security they offer.
                
                They are also asynchronous. This means all APIs support promises. This also means certain APIs and functions are not accessible in service workers. The most notable is localStorage. Instead, data should be stored using IndexedDB.</p>
  
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://raw.githubusercontent.com/rahamantauhid2002/about.githubio/main/ss.jpeg" class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">Why is this Website?</h4>
              <p class="card-text">A Service Worker is a script that executes in the background, in a separate thread from the browser UI. Service worker cache makes it possible for a web site to function offline. They are the technical powerhouse that levels up a website to a progressive web app. They enable deep platform integration, like rich caching, push notifications and background sync.</p>
  
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://raw.githubusercontent.com/rahamantauhid2002/about.githubio/main/emp.jpg" class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">How it will Affect Workers and Owners</h4>
              <p class="card-text">A Service Worker is a JavaScript File
                They execute on a separate thread from the UI
                They cannot access the DOM directly
                There is a life cycle or series of events a service worker flows through to become active, explained later
                They are only live while being used, so no battery strain
                They are isolated to the origin or domain they are registered with
                Service Workers require HTTPS
                Can send messages to and from the UI
                Do not require an open web page to function
                Are supported by all major browsers, including iOS Safari
                Are similar to Web Workers, but better in many ways</p>  
            </div>
          </div>
        </div>
      </div>
      <footer class="footer-14398">
    
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-3">
              <a href="#" class="footer-site-logo">Kajer Sondhan</a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit officiis corporis optio natus. </p>
            </div>
            <div class="col-md-2 ml-auto">
              <h3>Shop</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Sell online</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Examples</a></li>
                <li><a href="#">Website editors</a></li>
                <li><a href="#">Online retail</a></li>
              </ul>
            </div>
            <div class="col-md-2 ml-auto">
              <h3>Press</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Events</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Online retail</a></li>
              </ul>
            </div>
            <div class="col-md-2 ml-auto">
              <h3>About</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </div>
          </div>
  
          <div class="row mb-4">
            <div class="col-12 pb-4">
              <div class="line"></div>
            </div>
            <div class="col-md-6 text-md-left">
              <ul class="list-unstyled link-menu nav-left">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Code of Conduct</a></li>
              </ul>
            </div>
            <div class="col-md-6 text-md-right">
              <ul class="list-unstyled social nav-right">
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-instagram"></span></a></li>
                <li><a href="#"><span class="icon-facebook"></span></a></li>
                <li><a href="#"><span class="icon-pinterest"></span></a></li>
              </ul>
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-7">
              <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, fuga. Ex at maxime eum odio quibusdam pariatur expedita explicabo harum! Consectetur ducimus delectus nemo, totam odit!</small></p>
            </div>
          </div>
        </div>
        
      
    </footer>
    
    </div>
  )
}

export default About