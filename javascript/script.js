document.getElementById("gameSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("gameInput").value;
  if (value === "")
  return;
  const url = "https://acnhapi.com/v1/";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
    });


  document.getElementById("gameResults").innerHTML = results;
  });
