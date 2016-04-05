(function() {

	function contactPrompt($document) {
		return {
			templateUrl: '/templates/directives/contact_prompt.html',
			replace: true,
			restrict: 'E',
			scope: { },
			link: function(scope, element, attributes) {
				scope.promptPopUp = function(event){
					return prompt("Please Enter Your Name", "");
				};
			}
		}
	};

	angular
		.module('fits')
		.directive('contactPrompt', ['$document', contactPrompt]);

})();