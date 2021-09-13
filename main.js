var mouse_event="empty";
var last_position_of_x;
var last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "blue";
width_of_line=1;
canvas.addEventListener("touchstart",my_touch);


function my_touch(e){
    current_postion_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_postion_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    
}

function circle(current_postion_of_touch_x, current_postion_of_touch_y){
    
}
