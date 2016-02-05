// Добавление названия картинки проекта в поле
$(document).ready(function() {
               $('.input-project-img-file').on('change', function() {
                  realVal = $(this).val();
                  lastIndex = realVal.lastIndexOf('\\') + 1;
                  if(lastIndex !== -1) {
                     realVal = realVal.substr(lastIndex);
                     $(this).prev('.input-file-mask').find('.input-project-img').val(realVal);
                  }
               });
            });

// Открытие и закрытие popup
$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}