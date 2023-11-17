
//GLOBALS
let selectedLocation = "";
let selectedParkType = "";

// window.addEventListener("load", e => {
document.addEventListener("DOMContentLoaded", e => {
    locationsArray.forEach(location => locationsList.innerHTML += `<option>${location}</option>`);
    parkTypesArray.forEach(pt => parkTypeList.innerHTML += `<option>${pt}</option>`);

    locationsList.addEventListener("change", e => {
        selectedLocation = e.target.value;
        showResults();
    });

    parkTypeList.addEventListener("change", e => {
        selectedParkType = e.target.value;
        showResults();
    });

    function isMatch(p) {
        return (selectedLocation == "" || p.State == selectedLocation) &&
            (selectedParkType == "" || p.LocationName.includes(selectedParkType));
    }

    function getCard(p) {
        if(p.Phone == 0) {
            p.Phone = ""
        }
        let visit = ""
        if (p.Visit != undefined){
            visit = `<a href="${p.Visit}">More Info.</a>`
        }
        return `<div class="card">
        ${p.LocationName}
        <div><b>${p.State}</b> </div>
        <div><b>${p.City}</b> </div>
        <div><b>${p.Phone}</b> </div>
        <div><b>${p.Latitude}</b> </div>
        <div><b>${p.Longitude}</b></div>
       ${visit}
        </div>`;
    }

    function showResults() {
        results.innerHTML = "";
        const filtered = nationalParksArray.filter(isMatch);
        filtered.forEach(p => results.innerHTML += getCard(p));
    }

    showResults();
}); //END LOADED