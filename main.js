peterpan="music2.mp3";
harrypotter="music2.mp3";
function preload(){
    songhp = loadSound("music2.mp3");
    songpp=loadSound("music.mp3");

}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modalloaded);
    posenet.on('pose', gotresult);
}
function draw(){
image(video, 0, 0, 600, 500);
}
function modalloaded(){

}
function gotresult(){
    
}