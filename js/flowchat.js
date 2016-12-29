/**
 * Created by think on 2016/12/29
 * auth:Super T HH.
 */

var bodyFlag = false;
var d1,d2,d3;

$(function(){
    $(".dragView").mousedown(function(e){
        this.setAttribute("dragFlag",true);
        bodyFlag = true;
    });
    $(".dragView").mouseup(function(e){
        this.setAttribute("dragFlag",false);
        bodyFlag = false;
    });
    $(".drawarea").mouseup(function(e){
       if(true == bodyFlag){
           var newView = document.createElement("div");
           var views = document.getElementsByName("component");
           for(var i=0;i<views.length;i++){
               if("true" == views[i].getAttribute("dragFlag")){
                   newView.className = views[i].getAttribute("class").split(" ")[0];
                   if(newView.className == "cylindrical"){
                       d1 = document.createElement("div");
                       d1.className = "cylindricalround";
                       newView.appendChild(d1);
                       d2 = document.createElement("div");
                       d2.className = "cylindricalroundbottom";
                       newView.appendChild(d2);
                   }
                   if(newView.className == "hexagon"){
                       d1 = document.createElement("div");
                       d1.className = "hexagonleft";
                       d2 = document.createElement("div");
                       d2.className = "hexagonmiddle";
                       d3 = document.createElement("div");
                       d3.className = "hexagonright";
                       newView.appendChild(d1);
                       newView.appendChild(d2);
                       newView.appendChild(d3);
                   }
                   if(newView.className == "datestore"){
                       d1 = document.createElement("div");
                       d1.className = "datestoreleft";
                       d2 = document.createElement("div");
                       d2.className = "datestoreright";
                       newView.appendChild(d1);
                       newView.appendChild(d2);
                   }
                   if(newView.className == "allarrow"){
                       d1 = document.createElement("span");
                       d1.className = "arrow arrow-up";
                       newView.appendChild(d1);
                   }
                   if(newView.className == "arrowbottom" || newView.className == "arrowleft" || newView.className == "arrowright"){
                       d1 = document.createElement("span");
                       d1.className = "arrow arrow-up";
                       newView.appendChild(d1);
                   }
                   views[i].setAttribute("dragFlag",false);
               }
           }
           newView.style.top = (parseInt(e.screenY)-120)+"px";
           newView.style.left = (parseInt(e.screenX)-200)+"px";
           document.getElementById('drawarea').appendChild(newView);
       }
        bodyFlag = false;
    });
});
