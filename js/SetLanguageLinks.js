var currenturl = window.location.href ;
var ENlink = "";
var PTlink = "";
var newurl = "";
var currenturlend = currenturl.slice(-8,-5);




if(currenturlend=="-en"){
  newurl = currenturl.replace("-en.html","");
} else{
  newurl = currenturl.replace(".html","");
}

newurl = newurl.replace("#","");


ENlink = "\"" + newurl + "-en.html" + "\"";
PTlink = "\"" + newurl + ".html" + "\""  ;


document.getElementById("CollapsedEN").innerHTML =  "<a href=" + ENlink + ">English</a>";
document.getElementById("NotCollapsedEN").innerHTML = "<a href=" + ENlink + ">English</a>";

document.getElementById("CollapsedPT").innerHTML =  "<a href=" + PTlink + ">Português</a>";
document.getElementById("NotCollapsedPT").innerHTML = "<a href=" + PTlink + ">Português</a>";