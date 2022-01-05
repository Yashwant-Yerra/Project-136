status = "" ;
objectInput = "" ;

function preload() {
    
}
function setup()
{
    canvas = createCanvas(400, 300) ;
    canvas.position(440, 359) ;
    video = createCapture(VIDEO) ;
    video.hide() ;
}
function draw() {
    image(video, 0, 0, 450, 300) ;
}
function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded) ;
    document.getElementById("status").innerHTML = "Status: Detecting objects.";
    objectInput = document.getElementById("object_name_input").value ;
    console.log("Input object: " + objectInput) ;
}
function modelLoaded() {
    console.log("Model is loaded") ;
}