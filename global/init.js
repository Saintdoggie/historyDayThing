/*

init file


adds a bunch of tags that would usually clog up a html file

*/

//load global css file
var file = location.pathname.split("/").pop();

var link = document.createElement("link");
link.href = file.substr( 0, file.lastIndexOf( "." ) ) + "/global/global.css";
link.rel = "stylesheet";
try {
    document.getElementsByTagName( "head" )[0].appendChild( link );
}
catch {
    throw Error("Failed to load global css file");
}

//load page icon

var link = document.createElement("link");

link.href = file.substr( 0, file.lastIndexOf( "." ) ) + "/global/topBar/bash.png";
link.type = "image/x-icon";
link.rel = "icon";

try {
    document.getElementsByTagName( "head" )[0].appendChild( link );
}
catch {
    throw Error("Failed to load logo image");
}


//stuff to do after body is loaded

document.addEventListener("DOMContentLoaded", function() {
    
    //load topbar

    var topBar = document.createElement("div");

    topBar.class = "menuBar";

    
    //try to grab the html at /global/topBar/topBar.html the push it into the body tag
    try {
        fetch("/global/topBar/topBar.html")
        .then(response => response.text())
        .then((data) => {
            topBar.innerHTML = data;
        })

    }
    catch {
        throw Error("Failed to load topBar");

    }
    document.body.prepend(topBar);
        
});
