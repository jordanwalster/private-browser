// Set the homepage URL.
var homepage = "https://jrdn.website";

// Automatically update the URL bar with the current page URL.
setInterval(function(){
    if(document.getElementById("search-bar") !== document.activeElement){
        document.getElementById("search-bar").value = document.getElementById("tab-active").src; 
    }
}, 100);

// Display secure or unsecure
setInterval(function(){
    // If the search bar is not focused - then check for https vs http
    if(document.getElementById("search-bar") !== document.activeElement){
        // If the search bar contains HTTPS, then change colour to green and display a lock symbol.
        if(document.getElementById("search-bar").value.includes("https://")){
            document.getElementById("secure").style.display = "block";
            document.getElementById("search-bar").style.color = "#9dff9d";
            document.getElementById("unsecure").style.display = "none";
            document.getElementById("unknown").style.display = "none";
            // If the search bar contains HTTP and NOT HTTPS, change colour to red and display an unlock symbol.
        } else if(document.getElementById("search-bar").value.includes("http://")) {
            document.getElementById("search-bar").style.color = "#ff9d9d";
            document.getElementById("secure").style.display = "none";
            document.getElementById("unsecure").style.display = "block";
            document.getElementById("unknown").style.display = "none";
        } else {
            console.log("add http? but how");
        }
        // If the search bar is focused - change colour to grey and display a question mark.
    } else {
        document.getElementById("search-bar").style.color = "#d7d7d7";
        document.getElementById("unknown").style.display = "block";
        document.getElementById("secure").style.display = "none";
        document.getElementById("unsecure").style.display = "none";
        
    }
}, 200);

// Wait for webview to be ready, then call for title.
document.getElementById("tab-active").addEventListener("dom-ready", function(){
    var tabTitle = document.getElementById("tab-active").getTitle();
    if(tabTitle.length > 26) document.getElementById("tab-active-title").innerHTML = tabTitle.substring(0,10);
});

// (Back Button) Reload the content in the current tab.
function backBtn(){
    document.getElementById("tab-active").goBack();
}

// (Forward Button) Reload the content in the current tab.
function fwdBtn(){
    document.getElementById("tab-active").goForward();
}

// (Home Button) Change tab content to the homepage.
function homeBtn(){
    var tab = document.getElementById("tab-active");
    tab.src = homepage
    var searchBar = document.getElementsByClassName("search-bar");
    searchBar.value = homepage;
}

// (Reload Button) Reload the content in the current tab.
function reloadBtn(){
    document.getElementById("tab-active").reload();
}

// No Cache Reload
function noCacheReload(){
    document.getElementById("tab-active").reloadIgnoringCache();
}

// Update the location of the active tab when the URL is changed.
function setLocation(){
    var tab = document.getElementById("tab-active");
    var location = document.getElementById("search-bar").value;

    tab.src = location;
}
// Open Dev Tools for the webview only.
function devTools(){
    var activeTab = document.getElementById("tab-active");
    if(activeTab.isDevToolsOpened() === false){
        activeTab.openDevTools();
    } else {
        activeTab.closeDevTools();
    }
}
// Menu button 
function browserMenu(){
    if(document.getElementById("menu-container").style.visibility == "hidden"){
        document.getElementById("menu-container").style.visibility = "visible";
    } else {
        document.getElementById("menu-container").style.visibility = "hidden";
    }

}
