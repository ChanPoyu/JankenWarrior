$(document).ready(function(){

  setTimeout(function(){
    $("#show_item1_amount").html(JSON.parse(localStorage.getItem("Item_HP")).amount);
    $("#show_item2_amount").html(JSON.parse(localStorage.getItem("Item_ATK")).amount);
    $("#show_item3_amount").html(JSON.parse(localStorage.getItem("Item_DEF")).amount);
    $("#show_item4_amount").html(JSON.parse(localStorage.getItem("Item_SPD")).amount);
    $("#show_item5_amount").html(JSON.parse(localStorage.getItem("Item_SKL")).amount);
  },100);


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

  GsToken.balanceOf(localStorage.getItem("player_account"), function(err,res){
    $("#balance_display").html(web3.fromWei(res.toNumber(), "ether") + "GT");
    // console.log(web3.fromWei(res.toNumber(), "ether"));
  })
  $("#balance_display").css("color", "white");




  $("#item1").on("click", function(){
    buy_item("Item_HP");
    $("#show_item1_amount").html(JSON.parse(localStorage.getItem("Item_HP")).amount);
  });
  $("#item2").on("click", function(){
    buy_item("Item_ATK");
    $("#show_item2_amount").html(JSON.parse(localStorage.getItem("Item_ATK")).amount);
  });
  $("#item3").on("click", function(){
    buy_item("Item_DEF");
    $("#show_item3_amount").html(JSON.parse(localStorage.getItem("Item_DEF")).amount);
  });
  $("#item4").on("click", function(){
    buy_item("Item_SPD");
    $("#show_item4_amount").html(JSON.parse(localStorage.getItem("Item_SPD")).amount);
  });
  $("#item5").on("click", function(){
    buy_item("Item_SKL");
    $("#show_item5_amount").html(JSON.parse(localStorage.getItem("Item_SKL")).amount);
  });
  $("#backToBattle").mouseover(function(){
    $(this).css("color", "#FFFF00");
  });
  $("#backToBattle").mouseout(function(){
    $(this).css("color", "white");
  });
  $("#backToBattle").on("click", function(){
    var stage_id = JSON.parse(localStorage.getItem("Stage_status")).num;
    if(stage_id === 1){
      location.href="stage_1.html";
    }else if(stage_id === 2){
      location.href="stage_2.html";
    }else if(stage_id === 3){
      location.href="stage_3.html";
    }
  });
});
