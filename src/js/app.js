// budget controller
const budgetController = (function() {
	// some code
})();

// uicontroller
const UIController = (function() {
	// some code
})();

// global app controller
// here you've passed in the other modules so you have access to
// their methods.  You've also renamed them to `budgetCtrl` and `UICtrl`
const controller = (function(budgetCtrl, UICtrl) {
	const ctrlAddItem = function() {
		// 1. get the field input data
		// 2. add the item to the budge controller
		// 3. add the item to the UI
		// 4. calculate the budget
		// 5. display the budget on the UI
	};

	$('.add__btn').on('click', ctrlAddItem);

	$(document).keypress(function(e) {
		if (e.which == 13) {
			ctrlAddItem();
		}
	});
})(budgetController, UIController);
