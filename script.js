//from tab example
var currentTab = "";

function startup(){
  showTabA();
}

function showTabA() {
   if (currentTab != "TabA") {
      currentTab = "TabA";
      showNoTabs();
      document.getElementById("SectionA").style.display = "inline";
   }
}

function showTabB() {
   if (currentTab != "TabB") {
      currentTab = "TabB";
      showNoTabs();
      document.getElementById("TabB").style.backgroundColor = "#d9d9d9";
      document.getElementById("SectionB").style.display = "inline";
   }
}

function showTabC() {
   if (currentTab != "TabC") {
      currentTab = "TabC";
      showNoTabs();
      document.getElementById("TabC").style.backgroundColor = "#d9d9d9";
      document.getElementById("SectionC").style.display = "inline";
   }
}
function showTabD() {
   if (currentTab != "TabD") {
      currentTab = "TabD";
      showNoTabs();
      document.getElementById("TabD").style.backgroundColor = "#d9d9d9";
      document.getElementById("SectionD").style.display = "inline";
   }
}

function showNoTabs() {
   document.getElementById("TabA").style.backgroundColor = "#262626";
   document.getElementById("TabB").style.backgroundColor = "transparent";
   document.getElementById("TabC").style.backgroundColor = "transparent";
   document.getElementById("TabD").style.backgroundColor = "transparent";

   document.getElementById("SectionA").style.display = "none";
   document.getElementById("SectionB").style.display = "none";
   document.getElementById("SectionC").style.display = "none";
   document.getElementById("SectionD").style.display = "none";

}
