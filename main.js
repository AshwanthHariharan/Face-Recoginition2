
Webcam.set({

    width:350,
    
    height:300,
    
    image_format:'png',
    
    png_quality:90
    
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function takesnap() {
    
    Webcam.snap(function(datauri){
    
    document.getElementById("result").innerHTML = '<img id="capture_image" src="'+datauri+'"/>'
    
    });
        
    }
    
    console.log("ml5 version:",ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/M-Ez-WdOl/model.json',modelLoaded);
    
    function modelLoaded() {
    
    console.log("Model Loaded!");
    
    }
    
/*
function check() {

    img = document.getElementById("capture_image");

    classifier.classify(img, gotResult);

}

function gotResult(error, result) {

if(error) {  

console.error(error);

}

else { 

console.log(result);

document.getElementById("result_name_object").innerHTML = result[0].label;

document.getElementById("result_name_accuracy").innerHTML = result[0].confidence.toFixed(3);

}

}*/