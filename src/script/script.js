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
						   
							  <span class='card-img-overlay fa fa-heart' id=${one.id} value=${one.fav}></span>

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

});
$("#female").on("click",function(){

	$("#index").empty();
	
	output(females);

});
$("#age").on("click",function(){

	$("#index").empty();
	
	output(age);

});
$("#all").on("click",function(){

	$("#index").empty();
	
	output(people);

});




$("#search").on("click",function(){
	input = $("#sinput").val();
	
	newArr = [];

  console.log ("input",input);
   
   newArr = people.filter(x => x.name.toLowerCase().startsWith(input.toLowerCase()));
 
   $("#index").empty();
  output(newArr);
  console.log("search ",newArr);
	})
	


	


















$(".fa-heart").click(function () {
	id = $(this).attr("id");
	v = $(this).attr("value");
	if (people[id].fav == 0) {
		people[id].fav = 1;
	}
	else if (people[id].fav == 1) {
		people[id].fav = 0;
	}
	clearfav();
	showfav();


	console.log(people);
	function clearfav() {
		$("#output").empty();

	}

	function showfav() {
		x = 0;
		$("#output").empty();

		for (x == 0; x < people.length; x++) {
			if (people[x].fav == 1) {
				$("#output").append(`<div class=" col-xl-4 col-lg-4  col-md-4 col-sm-12 bg-dark card mb-4 mr-1 item" >
	 <img class="card-img-top pt-2" src=${people[x].img}  alt=${people[x].name} height="800vh">
													   
														  
							
	<div class="card-body  text-light rounded-bottom text-center">
													 
		 <h4 class="card-title">${people[x].name}</h4>
														
	 <hr class="bg-light">
	<p class="card-text text-white mb-4">${people[x].info}<br>${people[x].dec}</p>
	 <!--progress-->
	<div class="progress">
	<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
	 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
	</div>
	</div>`)
			};
		}
	};

})
