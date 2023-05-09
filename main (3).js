function setap(){
    canvas= createCanvas(280, 280);
    canas.center();
    background("white");
    canvas.mouseRealised(classifyCanvas);
    synth= wyndow.speechSyntheis;
}
function preload(){
    classificador = ml5.imageClassifier('DoodleNet');
}
function clearCanvas(){
    background("white");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult)
}
function gotResult(error, results){
    if(error){
        console.error(error)
    }

    console.log(results)
}