
function showBiceps() {
    var x = document.getElementById("biceps");
    var y = document.getElementById("body");
    var z = document.getElementById("james");
    if (y.style.display == "block" && x.style.display != "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.backgroundColor = "white";
    } else {
        y.style.display = "none";
        x.style.display = "block";
        z.style.backgroundColor = "#e0ebeb";

    }
}

function showJames() {
    var x = document.getElementById("message");
    var y = document.getElementById("james");
    if (x.style.display != "block") {
        x.style.display = "block";
        y.style.backgroundColor = "#e0ebeb";
    } else {
        y.style.backgroundColor = "white";
        x.style.display = "none";
    }
}
function showMcq() {
    var x = document.getElementById("multichoice");
    var z = document.getElementById("mcq");
    if (x.style.display != "block") {
        x.style.display = "block";
        z.style.backgroundColor = "#e0ebeb";
    } else {
        x.style.display = "none";
        z.style.backgroundColor = "white";

    }
}

function showSaq() {
    var x = document.getElementById("shortanswer");
    var y = document.getElementById("saq");

    if (x.style.display != "block") {
        x.style.display = "block";
        y.style.backgroundColor = "#e0ebeb";
    } else {
        x.style.display = "none";
        y.style.backgroundColor = "white";
    }
}

function showPost() {
    var x = document.getElementById("review");
    var z = document.getElementById("james");

    if (x.style.display != "block") {
        x.style.display = "block";
        z.style.backgroundColor = "#e0ebeb";
    } else {
        x.style.display = "none";
        z.style.backgroundColor = "white";

    }
}

function showTopics1() {
    var x = document.getElementById("topic1");
    var y = document.getElementById("questionsList")
    if (x.style.display != "block" && y.style.display != "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function showTopics2() {
    var x = document.getElementById("topic2");
    var y = document.getElementById("questionsList");
    if (x.style.display != "block" && y.style.display != "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}
