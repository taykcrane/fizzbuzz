$(document).ready(function () {
	$("body").append("<h1>Below is the FizzBuzz ouput</h1>");
	for (i = 1; i <= 100; i++) {
		if (i%3==0 && i%5==0) {
			$("body").append("<p>FizzBuzz" + i + "</p>");
		} else if (i%3 == 0) {
			$("body").append("<p>Fizz" + i + "</p>");
		} else if (i%5 == 0) {
			$("body").append("<p>Buzz" + i + "</p>");
		} else {
			$("body").append("<p>" + i + "</p>");
		}
	}
});