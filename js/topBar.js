fetch("js/files/topBar.html")
.then((response) => response.text())
.then((html) => {
    document.getElementById("topBar").innerHTML = html;
})
.catch((error) => {
    console.warn(error);
});
// var element = document.getElementById('topBar');
// element.style.opacity = "0";
// var elements = document.getElementsByClassName('TheTopBarmenus');
// elements.style.opacity = "1";
