var page = "home";
function redirect(toWhere) {
    if (toWhere == "unixBeginning") {
        if (page == "unixBeginning") {
            window.location.replace("../unix/beginning");
            page = "unixBeginning"

        }
        else if (page == "home") {
            window.location.replace("../unix/beginning");
            page = "unixBeginning"
        }
        
    }
    else if (toWhere == "home") {
        if (page == "unixBeginning") {
            window.location.replace("../home");
            page = "home"

        }
        else if (page == "home") {
            window.location.replace("../home");
            page = "unixBeginning"
        }
    }
    else {
        console.log("no place to go")
    }
}
