//from tab example
var currentTab = "";

function startup(){
  showTabA();
}

function showTabA() {
   if (currentTab != "TabA") {
      currentTab = "TabA";
      showNoTabs();
//      document.getElementById("TabA").style.backgroundColor = "#d9d9d9";
      document.getElementById("SectionA").style.display = "inline";
      document.getElementById("a").style.outlineStyle = "solid";

   }
}

function showTabB() {
   if (currentTab != "TabB") {
      currentTab = "TabB";
      showNoTabs();
//      document.getElementById("TabB").style.backgroundColor = "#d9d9d9";
      document.getElementById("SectionB").style.display = "inline";
      document.getElementById("b").style.outlineStyle = "solid";

   }
}

function showTabC() {
   if (currentTab != "TabC") {
      currentTab = "TabC";
      showNoTabs();
//      document.getElementById("TabC").style.backgroundColor = "#d9d9d9";
      document.getElementById("SectionC").style.display = "inline";
         document.getElementById("c").style.outlineStyle = "solid";

   }
}

function showTabD() {
   if (currentTab != "TabD") {
      currentTab = "TabD";
      showNoTabs();
      document.getElementById("d").style.outlineStyle = "solid";
      document.getElementById("SectionD").style.display = "inline";
   }
}

function showNoTabs() {
   document.getElementById("TabA").style.backgroundColor = "transparent";
   document.getElementById("TabB").style.backgroundColor = "transparent";
   document.getElementById("TabC").style.backgroundColor = "transparent";
   document.getElementById("TabD").style.backgroundColor = "transparent";

   document.getElementById("a").style.outlineStyle = "none";
   document.getElementById("b").style.outlineStyle = "none";
   document.getElementById("c").style.outlineStyle = "none";
   document.getElementById("d").style.outlineStyle = "none";

   document.getElementById("SectionA").style.display = "none";
   document.getElementById("SectionB").style.display = "none";
   document.getElementById("SectionC").style.display = "none";
   document.getElementById("SectionD").style.display = "none";

}
