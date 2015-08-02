$(document).ready(function() {
	// var $mascot = $("#mascot");

	var animals1 = ["Ele", "Octo", "Cater", "Ante", "Arma", "Croco", "Hippo", "Porcu", "Jagu", "Kanga", "Panda", "Peli", "Rhino", "Tarantu", "Walla"];
	var animals2 = ["pus", "ster", "bat", "pillar", "dog", "cat", "lope", "dillo", "gator", "phant", "rat", "potamus", "hawk", "panda", "guin", "deer"];

	$("button").click(function(){
		var random_animal1 = animals1[Math.floor(Math.random() * animals1.length)];
		var random_animal2 = animals2[Math.floor(Math.random() * animals2.length)];

		var mascot = '<h2>' + random_animal1 + random_animal2 +'</h2>';

		$('#mascots').html(mascot);
	});
});