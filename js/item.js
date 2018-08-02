


var HP_recovery = {
  amount: localStorage.getItem("item_HP_amount"),
  power: 100,
  price: 100,
};
var ATK_enhance = {
  amount: localStorage.getItem("item_ATK_amount"),
  power: 50,
  price: 150,
  duration: 3,
  active: false
};
var DEF_enhance = {
  amount: localStorage.getItem("item_DEF_amount"),
  power: 50,
  price: 150,
  duration: 3,
  active: false
};
var SPD_enhance = {
  amount: localStorage.getItem("item_SPD_amount"),
  power: 2,
  price: 200,
  duration: 3,
  active: false
};
var SKL_enhance = {
  amount: localStorage.getItem("item_SKL_amount"),
  power: 2,
  price: 200,
  duration: 3,
  active: false
};
$(document).ready(function(){


  $("#item1").mouseover(function(){
    $("#item1_display").css("display", "block");
  });
  $("#item1").mouseout(function(){
    $("#item1_display").css("display", "none");
  });
  $("#show_item1_amount").html(localStorage.getItem("item_HP_amount"));
  $("#show_item1_amount").css("color", "white");

  $("#item2").mouseover(function(){
    $("#item2_display").css("display", "block");
  });
  $("#item2").mouseout(function(){
    $("#item2_display").css("display", "none");
  });
  $("#show_item2_amount").html(localStorage.getItem("item_ATK_amount"));
  $("#show_item2_amount").css("color", "white");

  $("#item3").mouseover(function(){
    $("#item3_display").css("display", "block");
  });
  $("#item3").mouseout(function(){
    $("#item3_display").css("display", "none");
  });
  $("#show_item3_amount").html(localStorage.getItem("item_DEF_amount"));
  $("#show_item3_amount").css("color", "white");

  $("#item4").mouseover(function(){
    $("#item4_display").css("display", "block");
  });
  $("#item4").mouseout(function(){
    $("#item4_display").css("display", "none");
  });
  $("#show_item4_amount").html(localStorage.getItem("item_SPD_amount"));
  $("#show_item4_amount").css("color", "white");

  $("#item5").mouseover(function(){
    $("#item5_display").css("display", "block");
  });
  $("#item5").mouseout(function(){
    $("#item5_display").css("display", "none");
  });
  $("#show_item5_amount").html(localStorage.getItem("item_SKL_amount"));
  $("#show_item5_amount").css("color", "white");

  $("#balance_display").html(localStorage.getItem("player_balance"));
  $("#balance_display").css("color", "white");




  $("#item1").on("click", function(){
    buy_item(HP_recovery, "item_HP_amount");
    $("#show_item1_amount").html(localStorage.getItem("item_HP_amount"));
  });
  $("#item2").on("click", function(){
    buy_item(ATK_enhance, "item_ATK_amount");
    $("#show_item2_amount").html(localStorage.getItem("item_ATK_amount"));
  });
  $("#item3").on("click", function(){
    buy_item(DEF_enhance, "item_DEF_amount");
    $("#show_item3_amount").html(localStorage.getItem("item_DEF_amount"));
  });
  $("#item4").on("click", function(){
    buy_item(SPD_enhance, "item_SPD_amount");
    $("#show_item4_amount").html(localStorage.getItem("item_SPD_amount"));
  });
  $("#item5").on("click", function(){
    buy_item(SKL_enhance, "item_SKL_amount");
    $("#show_item5_amount").html(localStorage.getItem("item_SKL_amount"));
  });
  $("#backToBattle").mouseover(function(){
    $(this).css("color", "#FFFF00");
  });
  $("#backToBattle").mouseout(function(){
    $(this).css("color", "white");
  });
  $("#backToBattle").on("click", function(){
    var stage_id = localStorage.getItem("recent_stage_id");
    if(stage_id === "1"){
      location.href="stage_1.html";
    }else if(stage_id === "2"){
      location.href="stage_2.html";
    }else if(stage_id === "3"){
      location.href="stage_3.html";
    }
  });
});
