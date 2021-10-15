window.onload = function()
{   var canvas1Width = 900;
    var canvas1Height = 600;
    var canvas1;
    var ctx;
    var delay = 1000;
    var xCoord=0;
    var yCoord=0;
    
    init();

    function init(){
        canvas1 = document.createElement('canvas');
        canvas1.width = canvas1Width;
        canvas1.height = canvas1Height;
        canvas1.style.border = "1px solid";
        document.body.appendChild(canvas1);
        ctx = canvas1.getContext('2d');
        refrechCanvas();
       
    }
    function refrechCanvas(){
        
        ctx.clearRect(0,0,canvas1Width,canvas1Height);
        xCoord += 2;
        yCoord += 2;
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xCoord,yCoord,100,50);
        setTimeout(refrechCanvas,delay);
    }

    function Snake (body) {
        
    }
    
}