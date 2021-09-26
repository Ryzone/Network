function Caution()
{
    var h1Replace = document.getElementsByTagName("h1");
    h1Replace[0].innerHTML = '作弊有风险，使用需谨慎';
    h1Replace[0].style.color = 'red';
    // alert("注意");
    // h1.removeEventListener
}
Caution();

function writeObj(obj){ 
    var description = ""; 
    for(var i in obj){ 
     var property=obj[i]; 
     description+=i+" = "+property+"\n"; 
    } 
    alert(description); 
}
// Ext.

function Remove()
{
    // var Ext = Ext || {};

    // var Ext = window.getElementById("btn");
    // Ext.removeEventListener("mouseout", ()=>{});
    // window.getElementsByTagName().removeEventListener("mouseout");
    // document.onmouseout;
    // window.onmouseout
    // getEventListeners()
    // document.getEventListeners();
    // window.removeEventListener("mouseout",window.getEventListeners(document.onmouseout));
    // window.onmouseout[0]
    // window.removeEventListener("mouseout",k,false);
    // window.onmouseout = null;
    // alert("mouseout");
    // window.onmouseout = function(event)
    // {
    //     // event.clientX = event.clientY = 2
    //     // if(event.)
    //     // writeObj(event.clientX = event.clientY = 2);
    //     // event.
    // }
    // document.onmouseout = null;

    // var mos = document.getElementById('iframe');
    // ext-gen1042
    // x-border-box x-strict
    // mos.removeEventListener("mouseout",function(){},false)
    // mos.onmouseout = null;
    // window.
    // var 

    // window.getelement
}
Remove();


function Prevent()
{
    document.body.onmouseout = function(event){
        event.preventDefault();
        event.stopPropagation();
    }
}
Prevent();