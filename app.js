document.getElementById("row1").getElementsByClassName("sq")[0].style['background-color'] = "red"; 
document.getElementById("row2").getElementsByClassName("sq")[0].style['background-color'] = "#F2660B"; 
document.getElementById("row3").getElementsByClassName("sq")[0].style['background-color'] = "#F29E0B"; 
document.getElementById("row4").getElementsByClassName("sq")[0].style['background-color'] = "#F2DD0B"; 
document.getElementById("row5").getElementsByClassName("sq")[0].style['background-color'] = "#4ECC1D"; 
document.getElementById("row6").getElementsByClassName("sq")[0].style['background-color'] = "#379214"; 
document.getElementById("row7").getElementsByClassName("sq")[0].style['background-color'] = "#07DAC0"; 
document.getElementById("row8").getElementsByClassName("sq")[0].style['background-color'] = "#07C3DA"; 
document.getElementById("row9").getElementsByClassName("sq")[0].style['background-color'] = "#0769DA"; 
document.getElementById("row10").getElementsByClassName("sq")[0].style['background-color'] = "#071CDA"; 
document.getElementById("row11").getElementsByClassName("sq")[0].style['background-color'] = "#4D14AB"; 
document.getElementById("row12").getElementsByClassName("sq")[0].style['background-color'] = "#BF25CC"; 
document.getElementById("row13").getElementsByClassName("sq")[0].style['background-color'] = "#CC25A9"; 
document.getElementById("row14").getElementsByClassName("sq")[0].style['background-color'] = "#CC255C"; 

var brush = 'yellow'; 

window.addEventListener("click",function(event){
	var itemClicked = event.target;
	console.log(itemClicked.className); 
	if(itemClicked.className === "sq pal") {
		console.log("pal"); 
		brush = itemClicked.style['background-color']; 
	}else if(itemClicked.className === 'sq pix'){ 
		itemClicked.style['background-color']= brush; 
		console.log("pix"); 
	}

});