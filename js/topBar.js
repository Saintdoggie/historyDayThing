if (page == "home") {
    fetch("/files/topBar.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("topBar").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
}
else if (page == "unixBeginning") {
    fetch("/files/topBar.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("topBar").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
}
else {
    error.log("current page not found")
}