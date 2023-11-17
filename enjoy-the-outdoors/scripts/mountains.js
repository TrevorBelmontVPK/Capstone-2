document.addEventListener("DOMContentLoaded", e => {
    // SECOND MAKE SURE DATA IS LOADED LIKE THIS
    //document.body.innerHTML += mountainsArray.length; //We should se 48 in the show preview

    // FOURTH LOOP THROUGH ALL DATA AND ADD A NEW OPTION FOR EACH TO THE SELECT
    mountainsArray.forEach(mountain => { //USE FOR EACH METHOD OF THE DATA TO GET 1 AT A TIME IN ARROW FUNCTION
        const option = document.createElement("option"); //CREATE BLANK OPTION ELEMENT
        option.innerHTML = mountain.name; // SET DISPLAY OPTION CONTENT TO NAME
        list.appendChild(option); // PLACE OPTION IN THE SELECT LIST
    }); //END FOR EACH

    // SIXTH - LISTEN FOR LIST CHANGE SELECTION
    list.addEventListener("change", event => {
        let mountain = mountainsArray.find(m => m.name == event.target.value); //FIND DATA
        results.innerHTML = `<h1>${mountain.name}</h1>`; //SHOW RESULTS
        results.innerHTML += mountain.desc;
        results.innerHTML += `<h3>Elevation: ${mountain.elevation} feet</h3>`;
        results.innerHTML += `<h3>Effort: ${mountain.effort}</h3>`;
        results.innerHTML += `<img src="./images/${mountain.img}">`;

    }); //END LISTENER

    searchButton.addEventListener("click", ()=> {
     
        console.log(navbar.value)
        let mountain = mountainsArray.find(m => m.name.includes(navbar.value) ); //FIND DATA
        results.innerHTML = `<h1>${mountain.name}</h1>`; //SHOW RESULTS
        results.innerHTML += mountain.desc;
        results.innerHTML += `<h3>Elevation: ${mountain.elevation} feet</h3>`;
        results.innerHTML += `<h3>Effort: ${mountain.effort}</h3>`;
        results.innerHTML += `<img src="./images/${mountain.img}">`;
    });
    
    searchInput.addEventListener("keyup", e=>{
        results.innerHTML = "";
        // let mountain = mountainsArray.find(m => m.desc.toLowerCase().includes(searchInput.value.toLowerCase())); //FIND DATA
        // draw(mountain);
        let mountainArray = mountainsArray.filter(m => m.desc.toLowerCase().includes(searchInput.value.toLowerCase())); //FIND DATA
        mountainArray.forEach(draw);
    })
    

}); // END LOADED