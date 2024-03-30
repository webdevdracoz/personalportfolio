var img = document.getElementById('try');

var slides = ['goldie.png', 'lemon.png', 'lemon.jpg', 'bg.png'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);


    
