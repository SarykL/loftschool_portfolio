; var validate = function () {
	
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
		}
	});
};

validate();


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

/*var clearAddProjectForm = function() {
	$(".b-close").on("click", function() {
		$("#input-project-name").removeClass("error");
		$("#input-project-name").removeClass("valid");
		$("#input-project-name-error").remove();
		$("#input-project-img-file").removeClass("error");
		$("#input-project-img-file").removeClass("valid");
		$("#input-project-img-file-error").remove();
		$("#input-project-url").removeClass("error");
		$("#input-project-url").removeClass("valid");
		$("#input-project-url-error").remove();
		$("#input-project-description").removeClass("error");
		$("#input-project-description").removeClass("valid");
		$("#input-project-description-error").remove();
		$("#add-project-error").hide();
	});
};

clearAddProjectForm();*/