(function () {
	
	function ModalCtrl($mdDialog, $mdMedia) {
		this.status = '  ';
		this.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

		this.showContactPrompt = function($event) {
			
			var contactPrompt = $mdDialog.prompt()
				.title('Contact Modal')
				.textContent('Enter your message')
				.placeholder('I need help with some issue')
				.ariaLabel('Email message')
				.targetEvent($event)
				.ok('Send')
				.cancel('Cancel')
				.clickOutsideToClose(true);

			$mdDialog.show(contactPrompt)
		}

	};

	angular
		.module('fits')
		.controller('ModalCtrl', ['$mdDialog', '$mdMedia', ModalCtrl]);
})();