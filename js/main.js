var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


//showcase slider

let sliderImages = document.querySelectorAll(".slide");

if(sliderImages){
  let arrowLeft = document.querySelector("#left-arrow"),
  arrowRight = document.querySelector("#right-arrow"),
  current = 0;
// Clear all images
  function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
}

// Init slider
function startSlide() {
  reset();
  if(sliderImages[0]){
    sliderImages[0].style.display = "block";
  }
}

if(arrowLeft){
  arrowLeft.addEventListener('click', slideLeft);
}
if(arrowRight){
  arrowRight.addEventListener('click', slideRight);
}

// Show prev
function slideLeft() {
  reset();
  current--;

  if(current < 0){
    current = sliderImages.length - 1;
}
  sliderImages[current].style.display = "block";
  
}

// Show next
function slideRight() {
  reset();
  current++;
  if(current == sliderImages.length){
    current = 0;
  }
  if(sliderImages[current]){
    sliderImages[current].style.display = "block";
  }

  
}
 function slides() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  };

startSlide();

setInterval(slides, 15000);

}

// When the user scrolls the page, execute myFunction 


// Get the navbar
var navbar = document.getElementById("top-navbar");
var topnavbar = document.getElementById("sticky-navbar");

// Get the offset position of the navbar
var sticky = topnavbar.offsetTop;

if(navbar){
  window.onscroll = function() {myFunction()};
}
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky + 50) {
    navbar.classList.add("sticky");
    navbar.classList.remove("not-sticky");
    document.getElementById("myBtn").style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("not-sticky");
    document.getElementById("myBtn").style.display = "none";
  }

}

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {topscrollFunction()};

// function topscrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }

// scroll to top btn function
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// show search menu and close search menu functions
let searchBtn = document.querySelector('.search-btn');
let closeSearchBtn = document.querySelector('.search-close-btn');
let searchMenu = document.querySelector('.search-menu');
if(searchBtn){
    searchBtn.addEventListener('click', function(){
        searchMenu.classList.add('show');
    });
}

if(closeSearchBtn){
    closeSearchBtn.addEventListener('click', function(){
        searchMenu.classList.remove('show');
    });
}

function initMap(){
  // Map options
  var options = {
    zoom:8,
    center:{lat:-6.3690,lng:34.8888}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  // google.maps.event.addListener(map, 'click', function(event){
  //   // Add marker
  //   addMarker({coords:event.latLng});
  // });

  /*
  // Add marker
  var marker = new google.maps.Marker({
    position:{lat:42.4668,lng:-70.9495},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Lynn MA</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
  */

  // Array of markers
  var markers = [
    {
      coords:{lat:-6.3690,lng:34.8888},
      content:'<h5 class="text-dark">Tanzania</h5>'
    },
    // {
    //   coords:{lat:0.325960,lng:32.591200},
    //   content:'<h5>Rwenzori Tower, ESBC 5th Floor, Kampala - Uganda</h5>'
    // },
    // {
    //   coords:{lat:-1.940278,lng:29.873888},
    //   content:'<h5>Rwanda</h5>'
    // }
  ];

  // Loop through markers
  for(var i = 0;i < markers.length;i++){
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if(props.iconImage){
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('mouseover', function(){
        infoWindow.open(map, marker);
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });

      marker.addListener('mouseout', function(){
        infoWindow.close(map, marker);
      });
    }
  }
}

  


