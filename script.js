function findPos(obj){
	let curleft = curtop = 0;
    if (obj.offsetParent) {
		curleft = obj.offsetLeft
    	curtop = obj.offsetTop
    	while (obj = obj.offsetParent) {
    		curleft += obj.offsetLeft
    		curtop += obj.offsetTop
    	}
    }
    return [curleft,curtop];
}


document.addEventListener("mousemove",  function(){
	let x = event.pageX;
	let y = event.pageY;
	let circle = document.getElementsByClassName("circle");
	for (i=0; i<circle.length; i++){
		let positionCircle = findPos(circle[i]);
		let distanceX = (x-positionCircle[0]-window.innerWidth*0.12);
		let distanceY = (y-positionCircle[1]-window.innerWidth*0.12);
		let degX = distanceX * 45 / window.innerWidth;
		let degY = distanceY * -45 / window.innerHeight;
		circle[i].style.transform = `perspective(24vw) rotateX(${degY}deg) rotateY(${degX}deg)`;
	}
})