function insertCalc(num){
  $('.inputCalculator').val($('.inputCalculator').val() + num)
}

function result(){
  $(".inputCalculator").val(eval($(".inputCalculator").val()));
}

function clearCalc(){
  $(".inputCalculator").val("");
   }