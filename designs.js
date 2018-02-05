/**
 * @description Create a grid of the weight and height specified
 * @param event Event object
 * @param weight weight of the table
 * @param height height of the table
 */
function makeGrid(event, weight, height){
	let row, column, tableRows;

	event.preventDefault();

	$('#pixelCanvas').empty();

	for(row = 0; row < height; row++){
		$('#pixelCanvas').append('<tr></tr>');
		for(column = 0; column < weight; column++){
			tableRows = $('tr');
			$(tableRows[row]).append('<td></td>');
		}
	}
}

/**
 * @description Fill the cell clicked with the color selected
 */
function draw(){
	$('td').click(function(){
		let color = $('#colorPicker').val();

		let currentStyle = $(this).attr('style');
		if(currentStyle == 'background-color: ' + color){
			color = "white";
		}

		$(this).attr('style', 'background-color: ' + color);
	});
}

$('#sizePicker').submit(function (event) {
	const weight = $('#inputWeight').val();
	const height = $('#inputHeight').val();
	makeGrid(event, weight, height);
	draw();
});