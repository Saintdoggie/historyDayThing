var menuLoaded = false;

fetch("js/files/topBar.html")
.then((response) => response.text())
.then((html) => {
    document.getElementById("topBar").innerHTML = html;
})
.catch((error) => {
    console.warn(error);
});
