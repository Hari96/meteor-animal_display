var animals_template, category_template, largeImage_template, slideshow_template;

// variables to store the current displayed animal and species
var current_animal = animals_data.category[0];
var current_species = current_animal.animals[0];

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

$(document).ready(function(){
  
  // compile all of our templates ready for use
  var source   = $("#animals-template").html();
	animals_template = Handlebars.compile(source);

	source   = $("#category-template").html();
	category_template = Handlebars.compile(source);

	source   = $("#largeImg-template").html();
	largeImg_template = Handlebars.compile(source);

	//source   = $("#slideshow-template").html();
//	slideshow_template = Handlebars.compile(source);

  $("#animals-tab").click(function () {

    showTemplate(animals_template, animals_data);

		$(".nav-tabs .active").removeClass("active");

		$("#animals-tab").addClass("active");

		$(".animal-thumbnail").click(function (){
			var index = $(this).data("id");
      current_animal = animals_data.category[index];

      showTemplate(category_template, current_animal);

			$(".animal-thumbnail").click(function (){
				var index2 = $(this).data("id");
				current_animal = animals_data.category[index].animals[index2];
				showTemplate(largeImg_template, current_animal);
			});

		});
  });

	$("#reptiles-tab").click(function () {
    var index = $(this).data("id");
		current_animal = animals_data.category[index];
		showTemplate(category_template, current_animal);

		$(".animal-thumbnail").click(function (){
			var index = $(this).data("id");
      current_animal = animals_data.category[0].animals[index];

      showTemplate(largeImg_template, current_animal);
		});
	});

  $("#mammals-tab").click(function () {
    var index = $(this).data("id");
	  current_animal = animals_data.category[index];
		showTemplate(category_template, current_animal);

		$(".animal-thumbnail").click(function (){
			var index = $(this).data("id");
      current_animal = animals_data.category[1].animals[index];

      showTemplate(largeImg_template, current_animal);
		});
	});

	$("#birds-tab").click(function () {
    var index = $(this).data("id");
	  current_animal = animals_data.category[index];
		showTemplate(category_template, current_animal);

		$(".animal-thumbnail").click(function (){
			var index = $(this).data("id");
      current_animal = animals_data.category[2].animals[index];

      showTemplate(largeImg_template, current_animal);
		});
	});

	// start the page by showing the animals view
	// we do this by virtually clicking on the
	// aanimals tab
	$("#animals-tab").click();
});
