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

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("top-navbar");
var topnavbar = document.getElementById("sticky-navbar");

// Get the offset position of the navbar
var sticky = topnavbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky + 66) {
    navbar.classList.add("sticky")
    navbar.classList.remove("not-sticky")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("not-sticky");
  }
}



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

  


