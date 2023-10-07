
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
 let  a=position.coords.latitude;
 let  b=position.coords.longitude;
  // window.open("https://www.google.com/maps/search/?api=1&query="+a+"%2C"+b);


initMap(a,b);

}


getLocation();


let map;

async function initMap(a,b) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 26.324932147474208,  lng:79.53436940682249 },
    
   
    zoom: 6,
  });

  
  
  const marker = new google.maps.Marker({


    
    
    
    position: { lat:a,  lng:b },

    
    
  
    map,


    
    
    title: "Emergency help",
    icon:{
      url:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      scaledSize:new google.maps.Size(31,31)
    }
  });
  const infowindow = new google.maps.InfoWindow({
    content: "please help",
    ariaLabel: "College",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}


