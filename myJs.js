var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

var myImage = new Image();
myImage.src = "mario.png";
myImage.addEventListener("load", loadImage, false);
function loadImage(e) {
    
    function moveDown() {
        var down = 0;
        var left = 0;
        var id = setInterval(frame, 8);
        
        function frame() {
            if(down == 400) { 
                moveRight();
                clearInterval(id);
                    
                
                
            } else {
                down++;
        context.clearRect(0,0,450,450);        
        context.drawImage(myImage, left, down, 50,50);
}
}
}

function moveRight() {
    var down = 400;
    var left = 0;
    var  id = setInterval(frame, 8);
    
    function frame()
    {
        if(left == 400) {
            moveUp();
            clearInterval(id);
        } else {
            left++;
            context.clearRect(0,0,450,450);
            context.drawImage(myImage,left,down,50,50);
        }
    }
}

function moveUp() {
        var down = 400;
        var left = 400;
        var id = setInterval(frame, 8);
        
        function frame() {
            if(down == 0) {
                moveBack();
                clearInterval(id);
                    
                
                
            } else {
                down--;
        context.clearRect(0,0,450,450);        
        context.drawImage(myImage, left, down, 50,50);
}
}
}
moveDown();
    
    
function moveBack() {
    var down = 0;
    var left = 400;
    var  id = setInterval(frame, 8);
    
    function frame()
    {
        if(left == 0) {
            moveDown();
            clearInterval(id);
        } else {
            left--;
            context.clearRect(0,0,450,450);
            context.drawImage(myImage,left,down,50,50);
        }
    }
}    
}





