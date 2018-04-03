var rotation=45;
var margin=80;
var count=0;
var radius=0;

var box=document.querySelector(".box");
function kruti(){
	box.style.transform="rotate("+rotation+"deg)";
	box.style.transformOrigin="center center";
	box.style.transition= 0.8+"s";
	box.style.marginLeft= margin+"px";
	if(count==0){
		radius=25;
		box.style.borderRadius="0px 0px "+radius+"px 0px"
		if(count==2){
		radius=25;
		box.style.borderRadius="0px "+radius+"px 0px 0px"
		}
		if(count==4){
		radius=25;
		box.style.borderRadius=""+radius+"px 0px 0px 0px"
		}
		if(count==6){
		radius=25;
		box.style.borderRadius="0px 0px 0px "+radius+"px"
		}
	}else{
		radius=0;
	}
	count++;
	rotation+=45;
	margin+=40;
}
var stop=setInterval(kruti,1000);





// var rotation=45;
// var margin=80;
// var count=0;
// var radius=0;
// var box=document.querySelector(".box");

// function kruti(){

// 	box.style.transform="rotate("+rotation+"deg)";
// 	box.style.transformOrigin="center center";
// 	box.style.transition= 0.8+"s";
// 	box.style.marginLeft= margin+"px";
	
	
// 	if(count>=6){
// 		radius=50;
// 		count=0;
// 	}else{
// 		radius=0;
// 	}
// 	box.style.borderRadius=""+radius+"px 0px 0px 0px"
// 	count++;
// 	rotation+=45;
// 	margin+=40;

// }
// var stop=setInterval(kruti,1000);