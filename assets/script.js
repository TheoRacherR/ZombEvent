const mymap = L.map('mapid').setView([48.874715, 2.433742], 15);
        
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

 
//


const popup = L.popup()
    .setLatLng([48.874715, 2.411842])
    .setContent("You're here")
    .openOn(mymap);

//

//Fonction click pour positon
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);

//

for (let i = 0; i < 20; i++) {
    
    let randx = Math.floor((Math.random() * 44029))*0.000001 + 48.856583;
    let randy = Math.floor((Math.random() * 85831))*0.000001 + 2.37133;

    let marker = L.marker([randx, randy]).addTo(mymap);
    marker.bindPopup("<b>Coming Soon</b><br>website v1").openPopup();
    console.log(randx, randy);

}

//
const marker1 = L.marker([48.875583, 2.399311]).addTo(mymap);
marker1.bindPopup("<a target='_blank' href='clan1.html'><b>La Horde</b></a>").openPopup();

//
const marker2 = L.marker([48.878123, 2.406478]).addTo(mymap);
marker2.bindPopup("<a target='_blank' href='clan2.html'><b>Bloody Hunterz</b></a>").openPopup();

//
const marker3 = L.marker([48.879845, 2.417078]).addTo(mymap);
marker3.bindPopup("<a target='_blank' href='clan3.html'><b>Croque Monsieur</b></a>").openPopup();


//
const marker4 = L.marker([48.871095, 2.416906]).addTo(mymap);
marker4.bindPopup("<a target='_blank' href='clan4.html'><b>The Runnerz</b></a>").openPopup();




//Marker position
const markers = L.marker([48.874715, 2.411842]).addTo(mymap);
markers.bindPopup("<b>Position</b><br><a target='_blank' href='https://www.estiam.com/'>Estiam</a>").openPopup();

//


