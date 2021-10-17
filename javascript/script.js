function onClick(e) {
  debugger
  e.preventDefault();
  console.log("HI");
  // get form values
  let elephantInput = document.getElementById('elephantInput').value;
  let s = document.getElementById('selector');
  let type = s.options[s.selectedIndex].value;


  // setup URL
  let url = "https://cors-anywhere.herokuapp.com";
  url += "/elephant-api.herokuapp.com/";
  if (type === "name") {
    url += "elephants/name/" + elephantInput;
  }
  if (type === "sex") {
    url += "elephants/sex/" + elephantInput;
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
        if (type === "name") {
//           affiliation: "Adam Forepaugh Circus"
// dob: "1860"
// dod: "1932"
// fictional: "false"
// image: "https://elephant-api.herokuapp.com/pictures/016.jpg"
// index: 16
// name: "John L. Sullivan"
// note: "A boxing elephant in Adam Forepaugh's circus."
// sex: "Male"
// species: "Asian"
// wikilink: "https://en.wikipedia.org/wiki/John_L._Sullivan_(elephant)"
// _id: "5cf1d1ef9bf1ce2d0844d8c6"
          results += "<img src=\'" + json.image + "\'/>";

        }
        if (type === "sex") {
          results += "<div id=\'elephantList\'>";
          results += "<div id=\'elephantItem\'>"
          results += "<a id=\'entry\'>Name</a>";
          results += "<a id=\'entry\'>Sex</a>";
          results += "<a id=\'entry\'>Species</a>";
          results += "<a id=\'entry\'>Born</a>";
          results += "<a id=\'entry\'>Died</a>";
          results += "</div>";
          for (let i=0; i < Object.keys(json).length; i++) {
            results += "<div id=\'elephantItem\'>";
            results += "<a id=\'entry\'>" + json[i].name + "</a>";
            results += "<a id=\'entry\'>" + json[i].sex + "</a>";
            results += "<a id=\'entry\'>" + json[i].species + "</a>";
            results += "<a id=\'entry\'>" + json[i].dob + "</a>";
            results += "<a id=\'entry\'>" + json[i].dod + "</a>";
            results += "</div>";
          }
          results += "</div>";
        }
        if (type === "all") {
          results += "<div id=\'elephantList\'>";
          results += "<div id=\'elephantItem\'>"
          results += "<a id=\'entry\'>Name</a>";
          results += "<a id=\'entry\'>Sex</a>";
          results += "<a id=\'entry\'>Species</a>";
          results += "<a id=\'entry\'>Born</a>";
          results += "<a id=\'entry\'>Died</a>";
          results += "</div>";
          for (let i=0; i < 47; i++) {
            results += "<div id=\'elephantItem\'>";
            results += "<a id=\'entry\'>" + json[i].name + "</a>";
            results += "<a id=\'entry\'>" + json[i].sex + "</a>";
            results += "<a id=\'entry\'>" + json[i].species + "</a>";
            results += "<a id=\'entry\'>" + json[i].dob + "</a>";
            results += "<a id=\'entry\'>" + json[i].dod + "</a>";
            results += "</div>";
          }
          results += "</div>";
        }
        document.getElementById("elephantResults").innerHTML = results;
      }
      else {
        console.log(json.text)
      }
    });
}

document.getElementById('elephants').addEventListener('click', onClick);
