
//load global css file
var file = location.pathname.split("/").pop();

var link = document.createElement("link");
link.href = file.substr( 0, file.lastIndexOf( "." ) ) + "/global/global.css";
link.type = "text/css";
link.rel = "stylesheet";
try {
    document.getElementsByTagName( "head" )[0].appendChild( link );
}
catch {
    console.log("Failed to load global css file");
}

//stuff to do after body is loaded

document.addEventListener("DOMContentLoaded", function(event) {
    
    //load topbar

    var topBar = document.createElement("div");
    
    //try to grap the html at /global/topBar/topBar.html the push it into main html body
    try {
        fetch("/global/topBar/topBar.html")
        .then(response => response.text())
        .then((data) => {
            topBar.innerHTML = data;     
        })
    
    }
    catch {
        console.log("Failed to get topBar")
    }
    document.body.prepend(topBar); 
        
});
