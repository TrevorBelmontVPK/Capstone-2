
//GLOBALS
let selectedLocation = "";
let selectedParkType = "";

// window.addEventListener("load", e => {
document.addEventListener("DOMContentLoaded", e => {

    searchButton.addEventListener("click", e=>{
        filterText = searchInput.value;
        showResults();
    })

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
        
  

    // searchButton.addEventListener("click", ()=> {

        // console.log(navbar.value)
        // let location = locationsArray.find(m => m.name.includes(navbar.value) ); //FIND DATA
        // results.innerHTML = `<h1>${location.name}</h1>`; //SHOW RESULTS
        // results.innerHTML += location.desc;
        // results.innerHTML += `<h3>Elevation: ${location.elevation} feet</h3>`;
        // results.innerHTML += `<h3>Effort: ${location.effort}</h3>`;
        //results.innerHTML += `<img src="./images/${mountain.img}">`;
    // });
    function showResults() {
        results.innerHTML = "";
        const filtered = nationalParksArray.filter(isMatch);
        filtered.forEach(p => results.innerHTML += getCard(p));
    }
    
    showResults();

}); //END LOADED

