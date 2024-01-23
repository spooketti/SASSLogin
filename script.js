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

function sendLogin(un,pw)
{
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://f3bbc04a-027d-4662-b0c3-314fd8a29b82-00-36k060m6zrig0.spock.replit.dev/api/login");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    const body = JSON.stringify({
      "username": un,
      "password": crap 
    });
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
    xhr.send(body);
}
