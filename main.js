//https://teachablemachine.withgoogle.com/models/Jr2abY2mp/
Webcam.set({
    width:350, 
    height:300,
    image_format:'png',
    png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "capture_image" src = "'+data_uri+'">'
    })
}
console.log('ml5 version', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j221oOd_e/model.json',  modelLoaded);
function modelLoaded(){
    console.log('model is loaded.')
}
function check(){
    image = document.getElementById("capture_image");
    classifier.classify(image,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = (results[0].confidence * 100).toFixed(3)
    };
}
