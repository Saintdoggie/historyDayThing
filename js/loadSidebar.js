

fetch("js/files/sideBar.html")
.then((response) => response.text())
.then((html) => {
    document.getElementById("sideBar").innerHTML = html;
})
.catch((error) => {
    console.warn(error);
});