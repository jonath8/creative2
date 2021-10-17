function onClick(e) {
  debugger
  e.preventDefault();
  console.log("HI");
  // get form values
  let elephantInput = document.getElementById('elephantInput').value;
  let s = document.getElementById('selector');
  let type = s.options[s.selectedIndex].value;


  // setup URL
  //let url = "http://numberapi.com/" + number + "/" + "type" + "?json";
  let url = "https://cors-anywhere.herokuapp.com";
  url += "/elephant-api.herokuapp.com/";
  //let url = "https://elephant-api.herokuapp.com/";
  if (type === "random") {
    url += "elephants/random";
  }
  if (type === "name") {
    url += "elephants/name/" + elephantInput;
  }
  if (type === "sex") {
    url += "elephants/sex/" + elephantInput;
  }
  if (type === "species") {
    url += "species/" + elephantInput;
  }
  if (type === "all") {
    url += "elephants";
  }
  // call API
  fetch(url, {mode: 'cors'})
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      if (json.text === undefined) {
        let results = ""
        if (type === "random") {

        }
        if (type === "name") {

        }
        if (type === "sex") {

        }
        if (type === "species") {

        }
        if (type === "all") {
          for (let i=0; i < 47; i++) {
            results += "<p>" + json[i].name + "</p>";
          }
        }
        document.getElementById("elephantResults").innerHTML = results;
      }
      else {
        console.log(json.text)
      }
    });
}

document.getElementById('elephants').addEventListener('click', onClick);
