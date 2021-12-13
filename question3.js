//YOU SHOULD INSTALL AXIOS TO DO THIS
const axios = require("axios");

function getTopicCount(topic) {
  var count = 0;
  axios
    .get(
      "https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=" +
        topic
    )
    .then((response) => {
      var temp = response.data.parse.text["*"];
      var regex = new RegExp("(" + topic + ")", "gim");

      console.log(regex);
      let m;
      let cnt = 0;
      while ((m = regex.exec(temp)) !== null) {
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        cnt++;
      }
      console.log(cnt);
    });
}
getTopicCount("Pizza");
