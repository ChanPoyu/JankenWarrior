var player_move = "";
var cmp_move = "";
var janken_result = "--";
var count_ATK = 0;
var count_DEF = 0;
var count_SPD = 0;
var count_SKL = 0;
var stage_num = parseInt(document.getElementById("stage_id").innerHTML);
ModifyObject("Stage_status", "num", stage_num);
if (stage_num === 1){
  var enemy = JSON.parse(localStorage.getItem("Character_enemy1"));
}else if (stage_num === 2){
  var enemy = JSON.parse(localStorage.getItem("Character_enemy2"));
}else if (stage_num === 3){
  var enemy = JSON.parse(localStorage.getItem("Character_enemy3"));
}
// set player
var player = JSON.parse(localStorage.getItem("Character_player"));

var stage_status = JSON.parse(localStorage.getItem("Stage_status"));

function win(){
  janken_result = "win";
  console.log(janken_result);
  var enemy_damage = damage(player, enemy);
  if(enemy_damage[0] >= 0){
    console.log("dammage is " + enemy_damage);
    enemy.HP -= enemy_damage[0];
  }
  $("#enemy_hp").html(enemy.HP);
  fadeout('#round-result', janken_result);
  if (enemy.HP <= 0){
    reward();
    ModifyObject("Stage_status", "battle", "end");
    ModifyObject("Stage_status", "vic", true);
    $("#round_win").css('display', 'flex');
  }
}
function draw(){
  janken_result = "draw";
  console.log(janken_result);
  fadeout('#round-result', janken_result);
}
function lose(){
  janken_result = "lose";
  console.log(janken_result);
  var player_damage = damage(enemy, player);
  if(player_damage[0] >= 0){
    console.log("dammage is " + player_damage);
    player.HP -= player_damage[0];
  }
   $("#player_hp").html(player.HP);
   fadeout('#round-result', janken_result);
   if(player.HP <= 0){
     ModifyObject("Stage_status", "battle", "end");
     ModifyObject("Stage_status", "vic", false);
     $("#round_lose").css('display', 'flex');
   }
}

///////////////////// メインブロック  /////////////////////
$(document).ready(function(){

  // recognize stage status and modify HP
  switch (player.character_num){
    case 0:
      $("#player_icon").attr("src", "img/0_running_dog.gif");
      break;
    case 1:
      $("#player_icon").attr("src", "img/1_crayon_shin.gif");
      break;
    case 2:
      $("#player_icon").attr("src", "img/2_dog_1.png");
      break;
    case 3:
      $("#player_icon").attr("src", "img/3_dog_2.png");
      break;
    case 4:
      $("#player_icon").attr("src", "img/4_fire_demon.gif");
      break;
    case 5:
      $("#player_icon").attr("src", "img/5_gunman.gif");
      break;
    case 6:
      $("#player_icon").attr("src", "img/6_lao_pi.gif");
      break;
    case 7:
      $("#player_icon").attr("src", "img/7_poodle.png");
      break;
    case 8:
      $("#player_icon").attr("src", "img/8_pug_circle.gif");
      break;
    case 9:
      $("#player_icon").attr("src", "img/9_pug_runing.gif");
      break;
    case 10:
      $("#player_icon").attr("src", "img/10_pug_warrior.gif");
      break;
  }

  if(stage_status.battle === "before"){
    $("#enemy_hp").html(enemy.HP);
    $("#enemy_hp").css("color", "red");
    $("#player_hp").html(player.HP);
    $("#player_hp").css("color", "red");
    $("#round-result").html(janken_result);
    $("#round-result").css("display", "block");
    $("#plyer_name_display").html(player.name);
    $("#round_win").css("display", "none");
    $("#round_lose").css("display", "none");
    $("#enemy_name_display").html(enemy.name);
  }else if(stage_status.battle === "In"){
    player = JSON.parse(localStorage.getItem("temp_player"));
    enemy = JSON.parse(localStorage.getItem("temp_enemy"));
    count_ATK = localStorage.getItem("item_ATK_count");
    count_DEF = localStorage.getItem("item_DEF_count");
    count_SPD = localStorage.getItem("item_SPD_count");
    count_SKL = localStorage.getItem("item_SKL_count");
    $("#enemy_hp").html(enemy.HP);
    $("#enemy_hp").css("color", "red");
    $("#player_hp").html(player.HP);
    $("#player_hp").css("color", "red");
    $("#round-result").html(janken_result);
    $("#round-result").css("display", "block");
    $("#plyer_name_display").html(player.name);
    $("#round_win").css("display", "none");
    $("#round_lose").css("display", "none");
    $("#enemy_name_display").html(enemy.name);
  }else if(stage_status.battle === "End"){
    player = JSON.parse(localStorage.getItem("temp_player"));
    enemy = JSON.parse(localStorage.getItem("temp_enemy"));
    $("#enemy_hp").html(enemy.HP);
    $("#enemy_hp").css("color", "red");
    $("#player_hp").html(player.HP);
    $("#player_hp").css("color", "red");
    $("#round-result").html(janken_result);
    $("#round-result").css("display", "block");
    $("#plyer_name_display").html(player.name);
    $("#enemy_name_display").html(enemy.name);
    if(stage_status.vic === true){
      $("#round_win").css("display", "block");
    }else if(stage_status.vic === false){
      $("#round_lose").css("display", "block");
    }
  }


  // a little bit animation
  $("#stage_title").css("opacity", "0");
  $("#stage_title").animate({
    opacity: 1,
    easing: "swing",
    duration: 400,
  });


// Janken


// "scissor" start
  $("#scissor").on("click", function(){
    ModifyObject("Stage_status", "battle", "In");
    var battle_vic = [
      getObjectProperty("Stage_status", "battle"), getObjectProperty("Stage_status", "vic")];

    if (battle_vic[0] === "In" && battle_vic[1] === false){     //stageの状態を確認
      player_move = "scissor";
      cmp_move = cmp_random();
      console.log(cmp_move);
      if(cmp_move === "scissor"){    //チョキの場合
        draw();
      }else if(cmp_move === "paper"){    //パーの場合
        win();
      }else if(cmp_move === "stone"){    //グーの場合
        lose();
      }
    }
  });
// "scissor" start

// "stone" start
  $("#stone").on("click", function(){
    ModifyObject("Stage_status", "battle", "In");
    var battle_vic = [
      getObjectProperty("Stage_status", "battle"), getObjectProperty("Stage_status", "vic")];
    if(battle_vic[0] === "In" && battle_vic[1] === false){
      player_move = "scissor";
      cmp_move = cmp_random();
      console.log(cmp_move);
      if(cmp_move === "scissor"){
        win();
      }else if(cmp_move === "paper"){
        lose();
      }else if(cmp_move === "stone"){
        draw();
      }
    }
  });
// "stone" end

// "paper" start
  $("#paper").on("click", function(){
    ModifyObject("Stage_status", "battle", "In");
    var battle_vic = [
      getObjectProperty("Stage_status", "battle"), getObjectProperty("Stage_status", "vic")];
    if(battle_vic[0] === "In" && battle_vic[1] === false){
      player_move = "scissor";
      cmp_move = cmp_random();
      console.log(cmp_move);
      if(cmp_move === "scissor"){
        lose();
      }else if(cmp_move === "paper"){
        draw();
      }else if(cmp_move === "stone"){
        win();
      }
    }
  });
// "paper" end

  $("#item1_dis_amount").html(JSON.parse(localStorage.getItem("Item_HP")).amount);
  $("#item1_button").mouseover(function(){
    $("#item1_dis").css("display", "block");
  });
  $("#item1_button").mouseout(function(){
    $("#item1_dis").css("display", "none");
  });
  $("#item1_button").on("click", function(){
    use_item("Item_HP");
  });

  $("#item2_dis_amount").html(JSON.parse(localStorage.getItem("Item_ATK")).amount);
  $("#item2_button").mouseover(function(){
    $("#item2_dis").css("display", "block");
  });
  $("#item2_button").mouseout(function(){
    $("#item2_dis").css("display", "none");
  });
  $("#item2_button").on("click", function(){
    use_item("Item_ATK");
    if(count_ATK != 3){
      count_ATK = 3;
    }
  });

  $("#item3_dis_amount").html(JSON.parse(localStorage.getItem("Item_DEF")).amount);
  $("#item3_button").mouseover(function(){
    $("#item3_dis").css("display", "block");
  });
  $("#item3_button").mouseout(function(){
    $("#item3_dis").css("display", "none");
  });
  $("#item3_button").on("click", function(){
    use_item("Item_DEF");
    if(count_DEF != 3){
      count_DEF = 3;
    }
  });

  $("#item4_dis_amount").html(JSON.parse(localStorage.getItem("Item_SPD")).amount);
  $("#item4_button").mouseover(function(){
    $("#item4_dis").css("display", "block");
  });
  $("#item4_button").mouseout(function(){
    $("#item4_dis").css("display", "none");
  });
  $("#item4_button").on("click", function(){
    use_item("Item_SPD");
    if(count_SPD != 3){
      count_SPD = 3;
    }
  });

  $("#item5_dis_amount").html(JSON.parse(localStorage.getItem("Item_SKL")).amount);
  $("#item5_button").mouseover(function(){
    $("#item5_dis").css("display", "block");
  });
  $("#item5_button").mouseout(function(){
    $("#item5_dis").css("display", "none");
  });
  $("#item5_button").on("click", function(){
    use_item("Item_SKL");
    if(count_SKL != 3){
      count_SKL = 3;
    }
  });
  $("#go_to_shop").mouseover(function(){
    $(this).css("color", "#FFFF00");
  });
  $("#go_to_shop").mouseout(function(){
    $(this).css("color", "black");
  });

  $("#go_to_shop").on("click", function(){
    var battle_vic = [
      getObjectProperty("Stage_status", "battle"), getObjectProperty("Stage_status", "vic")];
    if(battle_vic[0] === "In" || battle_vic[0] === "end"){
      localStorage.setItem("temp_player", JSON.stringify(player));
      localStorage.setItem("temp_enemy", JSON.stringify(enemy));
      localStorage.setItem("item_ATK_count", count_ATK);
      localStorage.setItem("item_DEF_count", count_DEF);
      localStorage.setItem("item_SPD_count", count_SPD);
      localStorage.setItem("item_SKL_count", count_SKL);
      location.href="shop.html";
    }else if(battle_vic[0] === "before"){
      localStorage.setItem("temp_player", JSON.stringify(player));
      localStorage.setItem("temp_enemy", JSON.stringify(enemy));
      location.href="shop.html";
    }
  });

  $("#round_win_content").on("click", function(){
      ModifyObject("Stage_status", "battle", "before");
      ModifyObject("Stage_status", "vic", false);
  });
});
