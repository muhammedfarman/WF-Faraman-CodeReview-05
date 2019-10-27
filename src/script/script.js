let i = 0;
people = [];

people = data;
console.log(people);
males= people.filter(d => d.gender === 'm');
console.log('male array', males);
females= people.filter(d => d.gender === 'f');
console.log('female array', females)

age=[...people];
age=age.sort(function(a, b){
    return a.age-b.age
})
console.log("age sorted", age);
console.log("people arr", people);



function output(people){
	$("#index").empty();
	
for (let one of people) {
	
	$("#index").append(`<div class=" col-xl-2 col-lg-3  col-md-4 col-sm-12 bg-dark card mb-4 mr-1 item" >
		               
						   <img class="card-img-top pt-2" src=${one.img}  alt=${one.name} height="500vh">
						   
							  <span class='card-img-overlay far fa-heart' id=${one.id} value=${one.fav}></span>

						 <div class="card-body  text-light rounded-bottom text-center">
						 
							 <h4 class="card-title">${one.name}</h4>
							
		                     <hr class="bg-light">
		                     <p class="card-text text-white mb-4">${one.info}</p>
		                     <!--progress-->
		                     <div class="progress">
		                         <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
		                             aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
		                    </div>
						</div>`);
}
};
output(people);

function clearmain(){
	$("#index").empty();
}

$("#male").on("click",function(){

	$("#index").empty();
	output(males);
	favme();
	showfav(males);

});
$("#female").on("click",function(){

	$("#index").empty();
	
	output(females);
	favme();
	clearfav()
	showfav(females);

});
$("#age").on("click",function(){

	$("#index").empty();
	output(age);
	favme();
	clearfav()
	showfav(age);

});
$("#all").on("click",function(){

	$("#index").empty();
	
	output(people);
	favme();
	clearfav()
	showfav(people);

});
$("#sinput").on("change",function(){$("#index").empty();
result = [] ;
input = $("#sinput").val();
result = people.filter(x => x.name.toLowerCase().startsWith(input.toLowerCase()));

output(result);

console.log("sera " ,result);
})
favme();

function favme(){
fav=[...people];

$(".fa-heart").click(function () {

	id = $(this).attr("id");
	v = $(this).attr("value");
	console.log(v);
	if (v == 0) {
		$(this).attr("value" ,"1");
		$(this).attr("class","card-img-overlay fa fa-heart")
		fav[id].fav = 1;
	}
	
	else if (v == 1) {
		$(this).attr("value" ,"0");
		$(this).attr("class","card-img-overlay far fa-heart")
		fav[id].fav = 0;
		
		
	}
	console.log("fav",fav);
clearfav();
showfav(fav);

	function clearfav() {
		$("#output").empty();

	}

	function showfav() {

		$("#output").empty();

		for (fa of fav) {if(fa.fav==1){
			  
				$("#output").append(`<div class=" col-xl-4 col-lg-4  col-md-4 col-sm-12 bg-dark card mb-4 mr-1 item" >
	 <img class="card-img-top pt-2" src=${fa.img}  alt=${fa.name} height="800vh">
													   
														  
							
	<div class="card-body  text-light rounded-bottom text-center">
													 
		 <h4 class="card-title">${fa.name}</h4>
														
	 <hr class="bg-light">
	<p class="card-text text-white mb-4">${fa.info}<br>${fa.dec}</p>
	 <!--progress-->
	<div class="progress">
	<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
	 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
	</div>
	</div>`)
			;
		};}
	};

});}
