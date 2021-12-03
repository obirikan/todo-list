
function input(){
    var mess=document.querySelector(".msg")
    var input1=document.querySelector(".info");
    var ul=document.querySelector(".tings")
    if (input1.value==="") {
       mess.innerHTML="PLEASE HAVE SOMETHING TO DO";
       setTimeout(function () {
       mess.remove()
      },2000);
    }
    else{
        //for list
        var lists=document.createElement("li");
        lists.appendChild(document.createTextNode(`${input1.value}`));
        ul.appendChild(lists);
        lists.setAttribute("class","list");
        //for button
       var bu=document.createElement("button");
       bu.appendChild(document.createTextNode("x"));
       bu.setAttribute("class","clr")
       lists.appendChild(bu);
    }
}
addEventListener("click",rev);
function rev(e) {
    if (e.target.classList.contains("clr")){
        var ul=document.querySelector(".tings")
        var ge=e.target.parentElement;
        if (confirm("ARE U SURE?")) {
            ul.removeChild(ge);
        }
        
    }
    
}
var filter=document.getElementById("filter");
filter.addEventListener("keyup",addItem);

function addItem(e) {
    var it=e.target.value.toLowerCase();
    var uls= ul.getElementByTagName("li");
    console.log(uls)

    
}