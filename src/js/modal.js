;var modalPopup = function  () {
	$(document).ready(function () {
		//Открытие popup и сброс содержимого форм при закрытии
		$('.add-projects-block').click(function(){
			$('#add-project-popup').bPopup({
				speed: 350,
				positionStyle: 'fixed',
				transition: 'slideDown',
				onClose: function () {
					this.find('.new-project-form').trigger("reset");
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
            	}
			});
		});
		// Добавление названия картинки проекта в поле
		$('.input-project-img-file').on('change', function() {
			realVal = $(this).val();
			lastIndex = realVal.lastIndexOf('\\') + 1;
			if(lastIndex !== -1) {
				realVal = realVal.substr(lastIndex);
				$(this).prev('.input-file-mask').find('.input-project-img').val(realVal);
			}
		});
	});
};

modalPopup();