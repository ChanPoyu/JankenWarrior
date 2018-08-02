
var player_move = "";
var cmp_move = "";
var janken_result = "--";
var stage_active = true;
var animation_active = false;
var battle_win = false;
var count_ATK = 0;
var count_DEF = 0;
var count_SPD = 0;
var count_SKL = 0;



///////////////////// メインブロック  /////////////////////
$(document).ready(function(){

  var stage_status = document.getElementById("stage_id").innerHTML;
  stage_status = parseInt(stage_status);
  if (stage_status === 1){
    var enemy = enemy_stage_1;
    localStorage.setItem("recent_stage_id", "1");
  }else if (stage_status === 2){
    var enemy = enemy_stage_2;
    localStorage.setItem("recent_stage_id", "2");
  }else if (stage_status === 3){
    var enemy = enemy_stage_3;
    localStorage.setItem("recent_stage_id", "3");
  }
  var battle_status = localStorage.getItem("battle_status");
  if(battle_status === "inBattle"){
    var nowPlayerHP = localStorage.getItem ("temp_player_HP");
    player.HP = parseInt(nowPlayerHP);
    var nowEnemyHP = localStorage.getItem ("temp_enemy_HP");
    enemy.HP = parseInt(nowEnemyHP);
  }else if(battle_status === "endBattle"){
    var nowPlayerHP = localStorage.getItem ("temp_player_HP");
    player.HP = parseInt(nowPlayerHP);
    var nowEnemyHP = localStorage.getItem ("temp_enemy_HP");
    enemy.HP = parseInt(nowEnemyHP);
    var temp = localStorage.getItem("battle_win");
    if(temp === "true"){
      $("#round_win").css('display', 'flex');
    }else if(temp === "false"){
      $("#round_lose").css('display', 'flex');
    }
  }

  // a little bit animation

  $("#stage_title").css("opacity", "0");
  $("#stage_title").animate({
    opacity: 1,
    easing: "swing",
    duration: 400,
  });


  // recognize stage end
  $("#enemy_hp").html(enemy.HP);
  $("#enemy_hp").css("color", "red");
  $("#player_hp").html(player.HP);
  $("#player_hp").css("color", "red");
  $("#round-result").html(janken_result);
  $("#round-result").css("display", "block");
  $("#plyer_name_display").html(localStorage.getItem("player_name"));
  $("#round_win").css("display", "none");
  $("#round_lose").css("display", "none");
  $("#enemy_name_display").html(enemy.name);
  var char_num = localStorage.getItem("character_num");
  char_num = parseInt(char_num);
  switch (char_num){
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

// Janken

// "scissor" start
  $("#scissor").on("click", function(){
    if (stage_active === true && animation_active === false){     //stageの状態を確認
      countItem();
      player_move = "scissor";
      cmp_move = cmp_random();
      console.log(cmp_move);
      if(cmp_move === "scissor"){    //チョキの場合
        janken_result = "draw";
        console.log(janken_result);
        animation_active = true;
        animation_active = fadeout('#round-result', janken_result);
      }else if(cmp_move === "paper"){    //パーの場合
        janken_result = "win";
        console.log(janken_result);
        var enemy_damage = damage(player, enemy);
        console.log("dammage is " + enemy_damage);
        enemy.HP -= enemy_damage[0];
        $("#enemy_hp").html(enemy.HP);
        animation_active = true;
        animation_active = fadeout('#round-result', janken_result);
        if (enemy.HP <= 0){
          reward(1000);
          stage_active = false;
          battle_win = true;
          $("#round_win").css('display', 'flex');
          localStorage.setItem("battle_status", "");
        }
      }else if(cmp_move === "stone"){    //グーの場合
        janken_result = "lose";
        console.log(janken_result);
        var player_damage = damage(enemy, player);
        console.log("dammage is " + player_damage);
        player.HP -= player_damage[0];
         $("#player_hp").html(player.HP);
         animation_active = true;
         animation_active = fadeout('#round-result', janken_result);
         if(player.HP <= 0){
           stage_active = false;
           battle_win = false;
           $("#round_lose").css('display', 'flex');
         }
      }
    }
  });
// "scissor" start

// "stone" start
  $("#stone").on("click", function(){
    if(stage_active === true && animation_active === false){
      countItem();
      player_move = "scissor";
      cmp_move = cmp_random();
      console.log(cmp_move);
      if(cmp_move === "scissor"){
        janken_result = "win";
        console.log(janken_result);
        var enemy_damage = damage(player, enemy);
        console.log("dammage is " + enemy_damage);
        enemy.HP -= enemy_damage[0];
        $("#enemy_hp").html(enemy.HP);
        animation_active = true;
        animation_active = fadeout('#round-result', janken_result);
        if (enemy.HP <= 0){
          reward(1000);
          stage_active = false;
          battle_win = true;
          $("#round_win").css('display', 'flex');
          localStorage.setItem("battle_status", "");
        }
      }else if(cmp_move === "paper"){
        janken_result = "lose";
        console.log(janken_result);
        var player_damage = damage(enemy, player);
        console.log("dammage is " + player_damage);
        player.HP -= player_damage[0];
        $("#player_hp").html(player.HP);
        animation_active = true;
        animation_active = fadeout('#round-result', janken_result);
        if(player.HP <= 0){
          stage_active = false;
          battle_win = false;
          $("#round_lose").css('display', 'flex');
        }
      }else if(cmp_move === "stone"){
        janken_result = "draw";
        console.log(janken_result);
        animation_active = true;
        animation_active = fadeout('#round-result', janken_result);
      }
    }
  });
// "stone" end

// "paper" start
  $("#paper").on("click", function(){
    if(stage_active === true && animation_active === false){
      countItem();
      player_move = "scissor";
      cmp_move = cmp_random();
      console.log(cmp_move);
      if(cmp_move === "scissor"){
        janken_result = "lose";
        console.log(janken_result);
        var player_damage = damage(enemy, player);
        console.log("dammage is " + player_damage);
        player.HP -= player_damage[0];
        $("#player_hp").html(player.HP);
        animation_active = true;
        animation_active = fadeout('#round-result', janken_result);
        if(player.HP <= 0){
          stage_active = false;
          battle_win = false;
          $("#round_lose").css('display', 'flex');
        }
      }else if(cmp_move === "paper"){
        janken_result = "draw";
        console.log(janken_result);
        animation_active = true;
        animation_active = fadeout('#round-result', janken_result);
      }else if(cmp_move === "stone"){
        janken_result = "win";
        console.log(janken_result);
        var enemy_damage = damage(player, enemy);
        console.log("dammage is " + enemy_damage);
        enemy.HP -= enemy_damage[0];
        $("#enemy_hp").html(enemy.HP);
        animation_active = true;
        animation_active = fadeout('#round-result', janken_result);
        if (enemy.HP <= 0){
          reward(1000);
          stage_active = false;
          battle_win = true;
          $("#round_win").css('display', 'flex');
          localStorage.setItem("battle_status", "");
        }
      }
    }
  });
// "paper" end
  $("#item1_dis_amount").html(localStorage.getItem("item_HP_amount"));
  $("#item1_button").mouseover(function(){
    $("#item1_dis").css("display", "block");
  });
  $("#item1_button").mouseout(function(){
    $("#item1_dis").css("display", "none");
  });
  $("#item1_button").on("click", function(){
    use_item("item_HP_amount", HP_recovery);
  });

  $("#item2_dis_amount").html(localStorage.getItem("item_ATK_amount"));
  $("#item2_button").mouseover(function(){
    $("#item2_dis").css("display", "block");
  });
  $("#item2_button").mouseout(function(){
    $("#item2_dis").css("display", "none");
  });
  $("#item2_button").on("click", function(){
    use_item("item_ATK_amount", ATK_enhance);
    if(count_ATK != 3){
      count_ATK = 3;
    }
  });

  $("#item3_dis_amount").html(localStorage.getItem("item_DEF_amount"));
  $("#item3_button").mouseover(function(){
    $("#item3_dis").css("display", "block");
  });
  $("#item3_button").mouseout(function(){
    $("#item3_dis").css("display", "none");
  });
  $("#item3_button").on("click", function(){
    use_item("item_DEF_amount", DEF_enhance);
    if(count_DEF != 3){
      count_DEF = 3;
    }
  });

  $("#item4_dis_amount").html(localStorage.getItem("item_SPD_amount"));
  $("#item4_button").mouseover(function(){
    $("#item4_dis").css("display", "block");
  });
  $("#item4_button").mouseout(function(){
    $("#item4_dis").css("display", "none");
  });
  $("#item4_button").on("click", function(){
    use_item("item_SPD_amount", SPD_enhance);
    if(count_SPD != 3){
      count_SPD = 3;
    }
  });

  $("#item5_dis_amount").html(localStorage.getItem("item_SKL_amount"));
  $("#item5_button").mouseover(function(){
    $("#item5_dis").css("display", "block");
  });
  $("#item5_button").mouseout(function(){
    $("#item5_dis").css("display", "none");
  });
  $("#item5_button").on("click", function(){
    use_item("item_SKL_amount", SKL_enhance);
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
    if(stage_active === true){
      localStorage.setItem("temp_player_HP", player.HP);
      localStorage.setItem("temp_enemy_HP", enemy.HP);
      localStorage.setItem("battle_status", "inBattle");
      location.href="shop.html";
    }else if(stage_active === false){
      localStorage.setItem("battle_status", "endBattle");
      localStorage.setItem("battle_win", battle_win);
      localStorage.setItem("temp_player_HP", player.HP);
      localStorage.setItem("temp_enemy_HP", enemy.HP);
      location.href="shop.html";
    }

  });

});
