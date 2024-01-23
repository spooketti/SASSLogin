let adminName = document.getElementById("AdminName")
let elig = document.getElementById("status")
adminName.innerText = "Currently Logged in as " + localStorage.name 
console.log(localStorage.name)
if(localStorage.getItem("name") == "admin")
{
    elig.innerText = "You are elligible now!"
}