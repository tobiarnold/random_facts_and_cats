"use strict";
function get_data() {
   Promise.all([
      fetch("https://uselessfacts.jsph.pl/random.json?language=de").then(res => res.json()),
      fetch("https://cataas.com/cat?json=true").then(res => res.json())
    ])
      .then(data => {
        document.querySelector("#text").innerHTML = data[0].text;
        document.querySelector("#cat-image").src = data[1].file;
      })
      .catch(error => console.error(error));
  }
