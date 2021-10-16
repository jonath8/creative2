function onClick(e) {
  debugger
  e.preventDefault();
  // get form values
  let elephantInput = document.getElementById('elephantInput').value;
  let s = document.getElementById('selector');
  let type = s.options[s.selectedIndex].value;


  // setup URL
  //let url = "http://numberapi.com/" + number + "/" + "type" + "?json";
  let url = "https://elephant-api.herokuapp.com/";
  if (type === "random") {
    url += "elephants/random";
  } elseif (type === "name") {
    url += "elephants/name/" + elephantInput;
  } elseif (type === "sex") {
    url += "elephants/sex/" + elephantInput;
  } elseif (type === "species") {
    url += "species/" + elephantInput;
  } else {
    url += "elephants";
  }
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      console.log("this functioned")
    });
}

document.getElementById('elephants').addEventListener('click', onClick);
