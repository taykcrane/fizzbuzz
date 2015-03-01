// $(document).ready(function () {
// 	$("body").append("<h1>Below is the FizzBuzz ouput</h1>");
// 	for (i = 1; i <= 100; i++) {
// 		if (i%3==0 && i%5==0) {
// 			$("body").append("<p>FizzBuzz" + i + "</p>");
// 		} else if (i%3 == 0) {
// 			$("body").append("<p>Fizz" + i + "</p>");
// 		} else if (i%5 == 0) {
// 			$("body").append("<p>Buzz" + i + "</p>");
// 		} else {
// 			$("body").append("<p>" + i + "</p>");
// 		}
// 	}
// });

$(document).ready(function () {
	var printFizzBuzz = function (n) {
		$("body").append("<h1>Below is your FizzBuzz ouput</h1>");
		for (i = 1; i <= n; i++) {
			if (i%3==0 && i%5==0) {
				$("body").append("<p>FizzBuzz</p>");
			} else if (i%3 == 0) {
				$("body").append("<p>Fizz</p>");
			} else if (i%5 == 0) {
				$("body").append("<p>Buzz</p>");
			} else {
				$("body").append("<p>" + i + "</p>");
			}
		};
	};	

	$(".myForm").submit(function() {
		event.preventDefault();
		var myNumber = $("#input").val();
		myNumber = +myNumber;
		if (isNaN(myNumber)) {
			alert("Please enter a number!");
			$("#input").val("");
			console.log("didn't enter a number");
			return;
		} else if (myNumber % 1 > 0) {
			alert("Please enter an integer!");
			$("#input").val("");
			console.log("not an integer");
			return;
		} else {
			console.log(typeof myNumber + ": " + myNumber);
			printFizzBuzz(myNumber);
		}
	});
});