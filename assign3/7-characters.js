// Enter your code here

const url = 'https://swapi.dev/api/people/';
let app = document.querySelector("#results");

let getData = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
          data.results.forEach(element => {
          let list = document.createElement("li");
          list.innerHTML = element.name + " - " + element.birth_year;
          app.append(list);
        });
        if(data.next !== null) {
                getData(data.next);
        }
      })
      .catch(error => {
        console.log("Request failed", error);
      });
  };
  getData(url);
  
