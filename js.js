var rotation=45;
var margin=80;
var count=0;
function kruti(){
	// var x = Math.floor(Math.random() * 279);
 //    var y = Math.floor(Math.random() * 279);
 //    var z = Math.floor(Math.random() * 279);
 //    var bgColor = "rgb(" + x/2 + "," + y + "," + z + ")";  
	  var box=document.querySelector(".box");
	// if (count=1) {
	// 		box.setAttribute("style","border-radius: 0 0 15px 0;");
	//  }
	//  else if(count=2){
	//  	box.setAttribute("style","border-radius: 0  0 0 15px;");
	//  }
	// else if(count=3){
	// 	box.setAttribute("style","border-radius:15px 0 0 0;");
	// }
	// else if(count=4){
	// 	box.setAttribute("style","border-radius: 0 15px 0 0 ;");
	// }
	switch(count) {
    // case 0:
    //     box.setAttribute("style","border-radius:0 0 15px 0;");
     // case 2:
     //     box.setAttribute("style","border-radius:0 15px 0  0 ;");
     // case 4:
     //     box.setAttribute("style","border-radius:15px 0 0 0;");
    case 6:
        box.setAttribute("style","border-radius: 0  0 0 15px ;");
	}
	box.style.transform="rotate("+rotation+"deg)";
	box.style.backgroundColor= "green";
	box.style.transition= 0.8+"s";
	box.style.marginLeft= margin+"px";
	rotation+=45;
	margin+=40;
	count+=1;
	console.log(count);

	if(count>=6){
		count=0;
	}
}
var stop=setInterval(kruti,1000);
