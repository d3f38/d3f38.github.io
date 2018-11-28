var header = document.querySelector('header');
var div = document.querySelector('div');
var requestURL = 'tablo.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var tablo = request.response;
  var label = document.querySelector('.search-form__label');
  // showFlights(tablo);
  departureTab.style.color = '#FDE261';
  showFlightsDeparture(tablo);
  departureTab.onclick = function() {
    departureTab.style.color = '#FDE261';
    arrivalTab.style.color = '#fff';
    delayTab.style.color = '#fff';
    label.style.color = '#fff';
    document.querySelector('.searchTab').style.color = '#fff';
    clearTable();
    showFlightsDeparture(tablo);
  };
  arrivalTab.onclick = function() {
    arrivalTab.style.color = '#FDE261';
    departureTab.style.color = '#fff';
    delayTab.style.color = '#fff';
    label.style.color = '#fff';
    document.querySelector('.searchTab').style.color = '#fff';
    clearTable();
    showFlightsArrival(tablo);
  };
  delayTab.onclick = function() {
    arrivalTab.style.color = '#fff';
    departureTab.style.color = '#fff';
    delayTab.style.color = '#FDE261';
    label.style.color = '#fff';
    document.querySelector('.searchTab').style.color = '#fff';
    clearTable();
    showFlightsDelay(tablo);
  };

  document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {      
      arrivalTab.style.color = '#fff';
      departureTab.style.color = '#fff';
      delayTab.style.color = '#fff';
      label.style.color = '#fff';
      document.querySelector('.searchTab').style.color = '#FDE261';
      clearTable();
      showFlightsSearch(tablo);
    }
    return false;
  }

  searchTab.onclick = function() {
    arrivalTab.style.color = '#fff';
    departureTab.style.color = '#fff';
    delayTab.style.color = '#fff';
    label.style.color = '#fff';
    document.querySelector('.searchTab').style.color = '#FDE261';
    clearTable();
    showFlightsSearch(tablo);
  };

  label.onclick = function() {
    arrivalTab.style.color = '#fff';
    departureTab.style.color = '#fff';
    delayTab.style.color = '#fff';
    label.style.color = '#FDE261';
  }; 
}

function clearTable() {
  document.getElementById('tableFlights').innerHTML = '';
}

function showFlightsDeparture(jsonObj) {
  var tablo = jsonObj;
  var flightTable = document.createElement('table');  
  tableFlights.appendChild(flightTable);  
  var dateNow =  new Date();
  for (var i = 0; i < tablo.length; i++) {
    var flightInfo = document.createElement('tr');
    var flight = document.createElement('td');
    var way = document.createElement('td');
    var time = document.createElement('td');
    var status = document.createElement('td');
    var terminal = document.createElement('td');
    if (tablo[i].fly == 'fly') {
      flight = document.createElement('th');
      way = document.createElement('th');
      time = document.createElement('th');
      status = document.createElement('th');
      terminal = document.createElement('th');
    } 
    var dateFlight =  new Date();
    dateFlight = dateFlight.setHours.apply(dateFlight, tablo[i].time.split(":")); 
    if ((dateFlight > dateNow) || (tablo[i].fly == 'fly')){
      if (tablo[i].fly == 'departure' || tablo[i].fly == 'fly'){
        flight.textContent = tablo[i].flight;
        way.textContent = tablo[i].way;
        time.textContent = tablo[i].time;
        status.textContent = tablo[i].status;
        terminal.textContent = tablo[i].terminal;
        flightInfo.appendChild(flight);
        flightInfo.appendChild(way);
        flightInfo.appendChild(time);
        flightInfo.appendChild(status);
        flightInfo.appendChild(terminal);
        flightTable.appendChild(flightInfo);
          
      }
    }
  }
}

function showFlightsArrival(jsonObj) {
  var tablo = jsonObj;
  var flightTable = document.createElement('table');  
  tableFlights.appendChild(flightTable);  
  var dateNow =  new Date();
  for (var i = 0; i < tablo.length; i++) {
    
    var flightInfo = document.createElement('tr');
    var flight = document.createElement('td');
    var way = document.createElement('td');
    var time = document.createElement('td');
    var status = document.createElement('td');
    var terminal = document.createElement('td');
    if (tablo[i].fly == 'fly') {
      flight = document.createElement('th');
      way = document.createElement('th');
      time = document.createElement('th');
      status = document.createElement('th');
      terminal = document.createElement('th');
    } 

    var dateFlight =  new Date();
    dateFlight = dateFlight.setHours.apply(dateFlight, tablo[i].time.split(":")); 
    if ((dateFlight > dateNow) || (tablo[i].fly == 'fly')){
      if (tablo[i].fly == 'arrival' || tablo[i].fly == 'fly'){
        flight.textContent = tablo[i].flight;
        way.textContent = tablo[i].way;
        time.textContent = tablo[i].time;
        status.textContent = tablo[i].status;
        terminal.textContent = tablo[i].terminal;
            
        flightInfo.appendChild(flight);
        flightInfo.appendChild(way);
        flightInfo.appendChild(time);
        flightInfo.appendChild(status);
        flightInfo.appendChild(terminal);
        
        flightTable.appendChild(flightInfo);
             

      }
    }
  }
}

function showFlightsDelay(jsonObj) {
  var tablo = jsonObj;
  var flightTable = document.createElement('table');  
  tableFlights.appendChild(flightTable);  
  for (var i = 0; i < tablo.length; i++) {
    
    var flightInfo = document.createElement('tr');
    var flight = document.createElement('td');
    var way = document.createElement('td');
    var time = document.createElement('td');
    var status = document.createElement('td');
    var terminal = document.createElement('td');
    if (tablo[i].fly == 'fly') {
      flight = document.createElement('th');
      way = document.createElement('th');
      time = document.createElement('th');
      status = document.createElement('th');
      terminal = document.createElement('th');
    } 
    if ((tablo[i].fly == 'fly') || (tablo[i].fly == 'arrival' && tablo[i].status == 'задержан')){
      
      flight.textContent = tablo[i].flight;
      way.textContent = tablo[i].way;
      time.textContent = tablo[i].time;
      status.textContent = tablo[i].status;
      terminal.textContent = tablo[i].terminal;
          
      flightInfo.appendChild(flight);
      flightInfo.appendChild(way);
      flightInfo.appendChild(time);
      flightInfo.appendChild(status);
      flightInfo.appendChild(terminal);
      
      flightTable.appendChild(flightInfo);
         
      // flightTable.style.border = '10px solid #066781'; 
    }
  }
}
  
function showFlightsSearch(jsonObj) {
    var searchField = document.querySelector('.search-form__field').value;
    var tablo = jsonObj;
    var flightTable = document.createElement('table');  

    tableFlights.appendChild(flightTable);  

    for (var i = 0; i < tablo.length; i++) {
        // var searchVal = searchValue();
        var flightInfo = document.createElement('tr');
        var flight = document.createElement('td');
        var way = document.createElement('td');
        var time = document.createElement('td');
        var status = document.createElement('td');
        var terminal = document.createElement('td');
        if (tablo[i].fly == 'fly') {
            flight = document.createElement('th');
            way = document.createElement('th');
            time = document.createElement('th');
            status = document.createElement('th');
            terminal = document.createElement('th');
        } 
        if ((tablo[i].flight.indexOf(searchField) !== -1) || (tablo[i].fly == 'fly')) {
            flight.textContent = tablo[i].flight;
            way.textContent = tablo[i].way;
            time.textContent = tablo[i].time;
            status.textContent = tablo[i].status;
            terminal.textContent = tablo[i].terminal;
                
            flightInfo.appendChild(flight);
            flightInfo.appendChild(way);
            flightInfo.appendChild(time);
            flightInfo.appendChild(status);
            flightInfo.appendChild(terminal);
            flightTable.appendChild(flightInfo);
        }
    }
}
