var page = "home";
function redirect(toWhere) {
    if (toWhere == "unixBeginning") {
        window.location.replace("/unix/beginning");
        page = "unixBeginning"
        
    }
    if (toWhere == "home") {
        window.location.replace("/home")
        page = "home"
    }
    else {
        console.log("no place to go")
    }
}
