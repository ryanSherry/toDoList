//Check Off Specific Todos By Clicking
$("#taskList").on("click", "li", (event) => {
		$(event.currentTarget).toggleClass("completed");
	});

//Click on X to delete Todo
$("#taskList").on("click", "span", (event) => {
		$(event.currentTarget).parent().fadeOut((500, () => {
			$(event.currentTarget).remove();
		}));
		$(event).stopPropogation();
	});

//Add task
$("#newTask").keypress(
	(event) => {
		{
		let taskValue = $("#newTask").val();

		if(event.which === 13 || event.keyCode === 13){
		$("#taskList").append("<li><span><i class='fa fa-trash'></i></span> " + taskValue + "</li>");
		$("#newTask").val("");
		return true;
		}
	}
	}
);

$("#plus").click(() => {
	$("input[type='text']").fadeToggle();
});