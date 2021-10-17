function onClick(e) {
  e.preventDefault();
  console.log("HI");
  // get form values
  let elephantInput = document.getElementById('elephantInput').value;
  let s = document.getElementById('selector');
  let type = s.options[s.selectedIndex].value;

  debugger

  for(let i = 0; i < elephantInput.length; i++) {
    if(elephantInput.charAt(i) === " ") {
      elephantInput = elephantInput.slice(0, i) + "_" + elephantInput.slice(i+1, elephantInput.length);
    }
  }


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
          results += "<div id=elephantImage>"
          results += "<img src=\'" + json.image + "\'>";
          results += "</div>"
          results += "<h1>" + json.name + "</h1>";
          results += "<h2>" + json.note + "</h2>";
          results += "<div id=\'info\'>"
          results += "<div id=\'dates-header\'>Birth</div>"
          results += "<div id=\'dates\'>" + json.dob + "</div>"
          results += "<div id=\'dates-header\'>Death</div>"
          results += "<div id=\'dates\'>" + json.dod + "</div>";
          results += "</div>"
          results += "<div id=\'otherInfo\'><a>Sex: " + json.sex + "</a>";
          results += "<a>Species: " + json.species + "</a><a>Fictional: " + json.fictional;
          results += "</a><a>Affiliation: " + json.affiliation;
          results += "</a><a href=\'" + json.wikilink + "\'>Wikipedia Article</a></div>";
        }
        if (type === "sex") {
          results += "<div id=\'elephantList\'>";
          results += "<div id=\'elephantItem\'>"
          results += "<a id=\'entry-header\'>Name</a>";
          results += "<a id=\'entry-header\'>Sex</a>";
          results += "<a id=\'entry-header\'>Species</a>";
          results += "<a id=\'entry-header\'>Born</a>";
          results += "<a id=\'entry-header\'>Died</a>";
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
          results += "<a id=\'entry-header\'>Name</a>";
          results += "<a id=\'entry-header\'>Sex</a>";
          results += "<a id=\'entry-header\'>Species</a>";
          results += "<a id=\'entry-header\'>Born</a>";
          results += "<a id=\'entry-header\'>Died</a>";
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
        document.getElementById("elephantResults").innerHTML = json.text;
      }
    });
}

document.getElementById('elephants').addEventListener('click', onClick);
