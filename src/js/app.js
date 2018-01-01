// budget controller
const budgetController = (function() {
	// this is a function constructor; it builds objects for us
	const Expenses = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	const Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	let data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};
})();

// uicontroller
const UIController = (function() {
	const DOMStrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn'
	};
	return {
		getInput: function() {
			return {
				type: $(DOMStrings.inputType).val(), // will be inc or expenses
				description: $(DOMStrings.inputDescription).val(),
				value: $(DOMStrings.inputValue).val()
			};
		},
		// we are exposing the these strings to the public
		getDOMStrings: function() {
			return DOMStrings;
		}
	};
})();

// global app controller
// here you've passed in the other modules so you have access to
// their methods.  You've also renamed them to `budgetCtrl` and `UICtrl`
const controller = (function(budgetCtrl, UICtrl) {
	// this is setup inside the init function and then called outside
	const setupEventListeners = function() {
		const DOMStrings = UICtrl.getDOMStrings();

		$(DOMStrings.inputButton).on('click', ctrlAddItem);

		$(document).keypress(function(e) {
			if (e.which == 13) {
				ctrlAddItem();
			}
		});
	};

	const ctrlAddItem = function() {
		// 1. get the field input data
		const input = UICtrl.getInput();
		console.log(input);
		// 2. add the item to the budge controller
		// 3. add the item to the UI
		// 4. calculate the budget
		// 5. display the budget on the UI
	};

	// this is public
	return {
		// stuff to run at initalization
		init: function() {
			setupEventListeners();
		}
	};
})(budgetController, UIController);

controller.init();
