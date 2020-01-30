var index = 1;
slider(index);

function plusSlider(n){
	slider(index += n);
}
function currentSlider(n){
	slider(index = n);
}
function slider(n){

var slide =  document.getElementsByClassName('slider-div-1');
if(n > slide.length)
	{
		index = 1;
	}
	if (n < 1) 
	{
		index = slide.length; 
	}
	for( var i = 0; i < slide.length; i++ )
	{
		slide[i].style.display = "none";
	}
	 slide[index-1].style.display = "block"; 
}
	

	 
slidere(index);

function plusSlidere(n){
	slidere(index += n);
}
function currentSlidere(n){
	slidere(index = n);
}
function slidere(n){

var slidee =  document.getElementsByClassName('slider-div-2');
if(n > slidee.length)
	{
		index = 1;
	}
	if (n < 1) 
	{
		index = slidee.length; 
	}
	for( var i = 0; i < slidee.length; i++ )
	{
		slidee[i].style.display = "none";
	}
	 slidee[index-1].style.display = "block"; 
}
	

	 