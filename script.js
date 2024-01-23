let siteURL = "https://f3bbc04a-027d-4662-b0c3-314fd8a29b82-00-36k060m6zrig0.spock.replit.dev/api/nasa"
var req = new XMLHttpRequest();
req.open("GET", siteURL);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	let response = JSON.parse(req.responseText);
    document.getElementById("BG").style.backgroundImage = `url(${response.url})`
  }
})