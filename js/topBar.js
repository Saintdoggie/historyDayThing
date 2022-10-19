var menuLoaded = false;

fetch("js/files/topBarUnloaded.html")
.then((response) => response.text())
.then((html) => {
    document.getElementById("topBar").innerHTML = html;
})
.catch((error) => {
    console.warn(error);
});

function loadBar() {
    if (menuLoaded == false) {
        fetch("js/files/topBarLoaded.html")
        .then((response) => response.text())
        .then((html) => {
            document.getElementById("topBar").innerHTML = html;
        })
        .catch((error) => {
            console.warn(error);
        });
        menuLoaded = true;
    }
    else {

        fetch("js/files/topBarUnloaded.html")
        .then((response) => response.text())
        .then((html) => {
            document.getElementById("topBar").innerHTML = html;
        })
        .catch((error) => {
            console.warn(error);
        });
        menuLoaded = false;
    }

}
