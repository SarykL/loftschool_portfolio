; var myValidate = function () {
	$(document).ready(function () {
		$('#feedback-form').validate({
			rules: {
				input_name: {
					required: true
				},
				input_email: {
					required: true,
					email: false
				},
				input_msg: {
					required: true
				},
				input_code: {
					required: true
				}
			},
			onfocusout: false,
			messages: {
				input_name: "Введите имя",
				input_email: "Введите email",
				input_msg: "Ваш вопрос",
				input_code: "Код с капчи"
			}
		});
		$('#new-project-form').validate({
			rules: {
				input_project_name: {
					required: true
				},
				input_project_img_file: {
					required: true
				},
				input_project_url: {
					required: true
				},
				input_project_description: {
					required: true
				}
			},
			messages: {
				input_project_name: "введите название",
				input_project_img_file: "изображение",
				input_project_url: "ссылка на проект",
				input_project_description: "описание проекта"
			},
			invalidHandler: function(event, validator) {
				var errors = validator.numberOfInvalids();
				if (errors) {
					$(".add-project-error").show();
				} else {
					$(".add-project-error").hide();
				}
			},
			submitHandler: function (form) {
				$(form).ajaxSubmit();
			}
		});
		
/*		var popupSucces = function () {
			$("#new-project-form").submit(function (e) {
				e.preventDefault();
				$("#add-project-success").bPopup({
					closeClass:'close-success',
					positionStyle: 'fixed',
				});
			});
		};
popupSucces();*/

		var clearFeedbackForm = function() {
			$(".reset-btn").on("click", function() {
				$("#input-name").removeClass("error");
				$("#input-name").removeClass("valid");
				$("#input-name-error").remove();
				$("#input-email").removeClass("error");
				$("#input-email").removeClass("valid");
				$("#input-email-error").remove();
				$("#input-msg").removeClass("error");
				$("#input-msg").removeClass("valid");
				$("#input-msg-error").remove();
				$("#input-code").removeClass("error");
				$("#input-code").removeClass("valid");
				$("#input-code-error").remove();
			});
		};	
clearFeedbackForm();

});

};

myValidate();





