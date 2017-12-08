var i = 0; // start point
var images = [];
var time = 3000;

// image list
images[0] = 'images/image1.jpeg';
images[1] = 'images/image2.jpeg';
images[2] = 'images/image3.jpeg';
images[3] = 'images/image4.jpeg';
images[4] = 'images/image5.jpeg';

// change image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }   else {
        i = 0;
    }

    setTimeout("changeImg()",time);
}

window.onload = changeImg;