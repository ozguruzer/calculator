$(function(){
    
  $(topla).click(function(){
       x =parseInt ($('#t1').val()); 
       y =parseInt($('#t2').val());
       
       $('#topla').click(function () {
        var input = $('#t1,#t2').val();
        $('#t3').val(x+y);;
    });
    
  });

  $(cikart).click(function(){
      x =parseInt ($('#t1').val());
       y =parseInt($('#t2').val());

       $('#cikart').click(function () {
        var input = $('#t1,#t2').val();
        $('#t3').val(x-y);;
      });

  });

  $(carp).click(function(){
        x=parseInt($('#t1').val());
        y=parseInt($('#t2').val());

        $('#carp').click(function () {
        var input = $('#t1,#t2').val();
        $('#t3').val(x*y);;
      });
  });

  $(bol).click(function(){

      x=parseInt($('#t1').val());
      y=parseInt($('#t2').val());

      alert(x/y);

  });
  
  $(temızle).click(function(){
    x=parseInt($('#t1').val());
    y=parseInt($('#t2').val());
  
    $('#temızle').click(function () {
    var input = $('#t1,#t2').val('');
    $('#t3').val('');;
  });
  });
  
  
});


