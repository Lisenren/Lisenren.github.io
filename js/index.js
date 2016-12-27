var banner=document.getElementById("banner");
var txt=document.getElementById("txt");
window.onscroll=function(){
	var top=document.documentElement.scrollTop || document.body.scrollTop;

	if(top>banner.offsetHeight){
		txt.style.position="fixed";
		txt.style.top=0;
	}else{
		txt.style.position="";
		txt.style.top=-100;
	}
}