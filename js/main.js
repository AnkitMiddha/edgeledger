function initMap() {
    const loc = { lat: 28.022936, lng:73.311913  };

const map = new google.maps.Map(document.querySelector('.map')
, {
    zoom: 14,
    center: loc
});
const marker = new google.maps.Marker ({ position: loc,map:map});
} 