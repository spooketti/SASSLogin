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

function loginMe()
{
    let un = document.getElementById("username").value
    let pw = document.getElementById("password").value
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://f3bbc04a-027d-4662-b0c3-314fd8a29b82-00-36k060m6zrig0.spock.replit.dev/api/login");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    const body = JSON.stringify({
      "username": un,
      "password": pw 
    });
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let name = JSON.parse(xhr.responseText)
        if(name == "fail")
        {
            alert("Invalid Account")
            return;
        }
        localStorage.name = name
        window.location.href = "user.html"
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
    xhr.send(body);
}
