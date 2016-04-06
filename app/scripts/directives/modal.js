(function() {

	function modal($document) {
		return {
			templateUrl: '/templates/directives/modal.html',
			replace: true,
			transclude: true,
			restrict: 'E',
			scope: { },
			link: function(scope, element, attributes) {

				scope.title = attributes.title;

				scope.$watch(attributes.visible, function(value){
					if(value == true) {
						$(element).modal('show');
					} else {
						$(element).modal('hide');
					}
				});

				$(element).on('shown.bs.modal', function(){
					scope.$apply(function(){
						scope.$parent[attributes.visible] = true;
					});
				});

				$(element).on('hidden-bs-modal', function(){
					scope.$apply(function(){
						scope.$parent[attributes.visible] = false;
					});
				});

			}
		}
	};


	angular
		.module('fits')
		.directive('modal', modal);

})();