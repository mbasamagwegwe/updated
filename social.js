function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    
    mapLink.href = '';
    mapLink.textContent = '';
    
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
    
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
    
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
    
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
    
    }
    document.querySelector('#find-me').addEventListener('click', geoFindMe);



        function myFunction() {
      var  x = Math.random() * 5;
        document.getElementById('social').innerHTML = x;
       
      var user = Math.random() * 2.5;
        document.getElementById('social').innerHTML = user;
 
var user1 = user - x;



if( user1 >= 1.60){
  alert( user1 +" :" + "Social distance is  maintained in your North");
} else{
alert( user1 +" :" + "Social distance is not  maintained in your North");
}
        }
function myFunction1() {  
var y = Math.random() * 5;
document.getElementById('social2').innerHTML = y;

var userr = Math.random() * 2.5;
  document.getElementById('social2').innerHTML = userr;
 
  var user2 = userr - y;

  if( user2 >= 1.50){
    alert( user2 +" :" + "Social distance is  maintained in your South");
  } else{
    alert( user2 +" :" + "Social distance is not  maintained in your South");
  }

}

