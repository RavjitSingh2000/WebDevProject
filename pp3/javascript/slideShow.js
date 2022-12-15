//array with image source
let imageList = [
    '/images/B2-1.webp', '/images/C-130-1.webp', '/images/concorder-3.webp', '/images/F-35-2.jpg' ,'/images/image1.webp', '/images/Me-262.webp', '/images/Tu-95-1.webp', '/images/U-2-2.jpg', '/images/X-15-4.jpg', '/images/C-130-2.webp', '/images/F-14-1.webp', '/images/F-35-3.jpg', '/images/Harrier-1.webp', '/images/Mig-31-1.webp', '/images/P-51-3.jpg', '/images/Tu-95-2.jpg', '/images/U-2-3.jpg', '/images/B-52-1.webp', '/images/C-130-3.jpg', '/images/F-14-2.jpg', '/images/Harrier-2.webp', '/images/Mig-31-2.webp', '/images/P-51-4.jpg', '/images/Tu-95-3.jpg', '/images/X-15-1.webp', '/images/B-52-2.jpg', '/images/Concorder-1.webp', '/images/F-14-4.jpg', '/images/F-117a2.webp', '/images/Harrier-3.jpg', '/images/Mig-31-3.jpg', '/images/SR71-1.webp', '/images/X-15-2.jpg', '/images/B-52-3.webp', '/images/Concorder-2.jpg', '/images/F-35-1.webp', '/images/F-117a3.jpg', '/images/Me-109-1.webp', '/images/P-51-1.webp', '/images/SR71-2.jpg', '/images/U-2-1.webp', '/images/X-15-3.webp'
];

let i = 0, listLength = imageList.length - 1, imageNum = 0, timeGap = 2000, direction = 0;//time set to 2s for gap between two images 
let autoPlay = false, run;

//Function for image slide-show (start)
function changeImage(direction) {
    imageNum = imageNum + direction;
    if (i < listLength){
        imageNum = i;
        i++;
    }
    else {
        i = 0;
        imageNum = i;
    }
    document.getElementById('slideShow').src = imageList[imageNum];
}//Function for image slide-show (ends)
//setInterval('changeImage(1)', timeGap);

function firstImage(){
    imageNum = 0;
    document.getElementById('slideShow').src = imageList[imageNum];
}

function lastImage(){
    imageNum = listLength;
    document.getElementById('slideShow').src = imageList[imageNum];
}

function autoStop() {
    if (autoPlay == true){
        autoPlay = false;
        window.clearInterval(run);
        //document.getElementById('slideShow').src = imageList[imageNum];
    }
    else if (autoPlay == false){
        autoPlay = true;
        run = setInterval('changeImage(1)', timeGap);
    }
}