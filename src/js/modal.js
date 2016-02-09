;var modalPopup = function  () {
	$(document).ready(function () {
		//Открытие popup и сброс содержимого форм при закрытии
		$('.add-projects-block').click(function(){
			$('#add-project-popup').bPopup({
				speed: 350,
				positionStyle: 'fixed',
				transition: 'slideDown',
				onClose: function () {
					this.find("#input-name").removeClass("error");
					this.find("#input-name").removeClass("valid");
					this.find("#input-name-error").remove();
					this.find("#input-email").removeClass("error");
					this.find("#input-email").removeClass("valid");
					this.find("#input-email-error").remove();
					this.find("#input-msg").removeClass("error");
					this.find("#input-msg").removeClass("valid");
					this.find("#input-msg-error").remove();
					this.find("#input-code").removeClass("error");
					this.find("#input-code").removeClass("valid");
					this.find("#input-code-error").remove();
					this.find('.new-project-form').trigger("reset");
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