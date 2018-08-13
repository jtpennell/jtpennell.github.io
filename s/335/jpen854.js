//from tab example
var currentTab = "";

function showTabA() {
   if (currentTab != "TabA") {
      currentTab = "TabA";
      showNoTabs();
      document.getElementById("TabA").style.backgroundColor = "lightBlue";
      document.getElementById("SectionA").style.display = "inline";
   }
}

function showTabB() {
   if (currentTab != "TabB") {
      currentTab = "TabB";
      showNoTabs();
      document.getElementById("TabB").style.backgroundColor = "lightBlue";
      document.getElementById("SectionB").style.display = "inline";
      getBluray();
   }
}

function showTabC() {
   if (currentTab != "TabC") {
      currentTab = "TabC";
      showNoTabs();
      document.getElementById("TabC").style.backgroundColor = "lightBlue";
      document.getElementById("SectionC").style.display = "inline";
      getBook();
   }
}

function showTabD() {
   if (currentTab != "TabD") {
      currentTab = "TabD";
      showNoTabs();
      document.getElementById("TabD").style.backgroundColor = "lightBlue";
      document.getElementById("SectionD").style.display = "inline";
      getComments();
   }
}

function showTabE() {
   if (currentTab != "TabE") {
      currentTab = "TabE";
      showNoTabs();
      document.getElementById("TabE").style.backgroundColor = "lightBlue";
      document.getElementById("SectionE").style.display = "inline";
   }
}

function showNoTabs() {
   document.getElementById("TabA").style.backgroundColor = "transparent";
   document.getElementById("TabB").style.backgroundColor = "transparent";
   document.getElementById("TabC").style.backgroundColor = "transparent";
   document.getElementById("TabD").style.backgroundColor = "transparent";
   document.getElementById("TabE").style.backgroundColor = "transparent";

   document.getElementById("SectionA").style.display = "none";
   document.getElementById("SectionB").style.display = "none";
   document.getElementById("SectionC").style.display = "none";
   document.getElementById("SectionD").style.display = "none";
   document.getElementById("SectionE").style.display = "none";

}

function getBluray() {
  var xhr = new XMLHttpRequest();
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brlist";
  xhr.open("GET", uri, true);
  xhr.setRequestHeader("Accept", "application/JSON");
  xhr.onload = function() {
    var br = document.getElementById("bluray");
    var mylist = JSON.parse(xhr.responseText);
    showBr(mylist);
  }
  xhr.send(null);
}

function showBr(dest) {
  var tableContent = "";
  for (var i = 0; i < dest.length; i++) {
    var record = dest[i];
    tableContent += "<tr><td><img src=" + "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brimg?id=" + record.Id + "></td><td>" + record.Title + "</td><td>"+"<a  target='_blank' href='http://redsox.uoa.auckland.ac.nz/BC/Closed/Service.svc/brbuy?id="+record.Id +"'>Buy Now</a>"+" </td></tr>";
  }
  document.getElementById("bluray").innerHTML = tableContent;
}

function searchBr() {
  var searchInput = document.getElementById("inputBr").value;
  var xhr = new XMLHttpRequest();
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brsearch?term="+searchInput;
  xhr.open("GET", uri, true);
  xhr.setRequestHeader("Accept", "application/JSON");
  xhr.onload = function() {
    var mylist = JSON.parse(xhr.responseText);
    showBr(mylist);
  }
  xhr.send(null);
}
function searchBk() {
  var searchInput = document.getElementById("inputBk").value;
  var xhr = new XMLHttpRequest();
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booksearch?term="+searchInput;
  xhr.open("GET", uri, true);
  xhr.setRequestHeader("Accept", "application/JSON");
  xhr.onload = function() {
    var mylist = JSON.parse(xhr.responseText);
    showBk(mylist);
  }
  xhr.send(null);
}


function getBook() {
  var xhr = new XMLHttpRequest();
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booklist";
  xhr.open("GET", uri, true);
  xhr.setRequestHeader("Accept", "application/JSON");
  xhr.onload = function() {
    var br = document.getElementById("book");
    var mylist = JSON.parse(xhr.responseText);
    showBk(mylist);
  }
  xhr.send(null);
}

function showBk(dest) {
  var tableContent = "";
  for (var i = 0; i < dest.length; i++) {
    var record = dest[i];
    tableContent += "<tr><td><img src=" + "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + record.Id + "></td><td>" + record.Title + "</td><td>"+"<a  target='_blank' href='http://redsox.uoa.auckland.ac.nz/BC/Closed/Service.svc/bookbuy?id="+record.Id +"'>Buy Now</a>"+" </td></tr>";
  }
  document.getElementById("book").innerHTML = tableContent;
}

function getComments(){
  var content = "<iframe src=" + "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/htmlcomments"+ "></iframe>"
 ;
  document.getElementById("comments").innerHTML = content;
}


function setComments(){
  var xhr = new XMLHttpRequest();
  var name = document.getElementById("namebox").value;
  var comment = document.getElementById("commentbox").value;
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/comment?name="+name;
  xhr.open("POST", uri, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function() {
    getComments();
}
xhr.send(JSON.stringify(comment));
}

function registerUser(){
  var xhr = new XMLHttpRequest();
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/register";
  var n = document.getElementById("username").value;
  var p = document.getElementById("password").value;
  var a = document.getElementById("address").value;
  var data = JSON.stringify({"Address":a,"Name":n,"Password":p});
  xhr.open("POST", uri, true);
  xhr.setRequestHeader("Content-Type", "application/JSON;charset=UTF-8");
  xhr.onload = function() {
    alert(xhr.responseText);
    showTabA();
  }
  xhr.send(data);
}

// dropped this function call after login in case of any errors
function openServ(){
  document.getElementById("versionOpen").style.display = 'none';
  document.getElementById("versionClose").style.display = 'inline';
}
