const featuresEl = document.getElementById("features");
const feature = axios
  .get("assets/js/features.json")
  .then(data => console.log(data))
  .catch(err => console.log(err));
