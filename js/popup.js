$(function(){
  $('#btn-chk02,#btn-close').click(function(){
    fnClose($('#popup'));
  });
  $('#btn-chk01').click(function(){
    $.cookie('popup','no',{path:'/',expires:1});
    fnClose($('#popup'));
  });
})