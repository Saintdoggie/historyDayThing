var page = "home";
function redirect(toWhere) {
    if (toWhere == "unixBeginning") {
        window.location.replace("/historyDayThing/unix/beginning");
        page = "unixBeginning"
        
    }
    if (toWhere == "home") {
        window.location.replace("/historyDayThing/home")
        page = "home"
    }
    else {
        console.log("no place to go")
    }
}
