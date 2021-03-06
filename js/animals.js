var animals_template, category_template, largeImage_template, slideshow_template;

// variables to store the current displayed animal and species
var current_animal = animals_data.category[0];
var slideshow_animal = current_animal;

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

	source   = $("#slideshow-template").html();
  slideshow_template = Handlebars.compile(source);

  $("#animals-tab").click(function () {

    showTemplate(animals_template, animals_data);

		$(".nav-tabs .active").removeClass("active");

		$("#animals-tab").addClass("active");

		$(".animal-thumbnail").click(function (){
			var index = $(this).data("id");
      current_animal = animals_data.category[index];
      showTemplate(category_template, current_animal);
      slideshow_animal = current_animal; // makes sure slideshow has correct view

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
    slideshow_animal = current_animal; // makes sure slideshow has correct view
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
    slideshow_animal = current_animal; // makes sure slideshow has correct view
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
    slideshow_animal = current_animal; // makes sure slideshow has correct view
		$(".animal-thumbnail").click(function (){
			var index = $(this).data("id");
      current_animal = animals_data.category[2].animals[index];

      showTemplate(largeImg_template, current_animal);
		});
	});

	$("#slideshow-tab").click(function () {
		// display the slideshow template using the
		// current animal
		current_animal = slideshow_animal;
		showTemplate(slideshow_template, current_animal);

		// make the slideshow tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make slideshow tab active
		$("#slideshow-tab").addClass("active");
	});

	// start the page by showing the animals view
	// we do this by virtually clicking on the
	// aanimals tab
	$("#animals-tab").click();
});
