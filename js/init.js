var character = {
  name: "noname",
  character_attribute: "NaN",
  HP: 200,    // health point
  ATK: 50,    // attack point
  DEF: 25,    // deffense point
  SPD: 25,    // speed point
  SKL: 25     // skill point
};


localStorage.setItem("player_name", "");
localStorage.setItem("player_balance", 0);
localStorage.setItem("item_HP_amount", 0);
localStorage.setItem("item_ATK_amount", 0);
localStorage.setItem("item_DEF_amount", 0);
localStorage.setItem("item_SPD_amount", 0);
localStorage.setItem("item_SKL_amount", 0);
localStorage.setItem("battle_status", "");
localStorage.setItem("battle_win", "false");

$(document).ready(function(){
  $('#player_name').keyup(function(e){
    if(e.keyCode === 13){
      var input_name = document.getElementById("player_name").value;
      var charac_rand = input_name.split("");
      charac_rand = character_rand(charac_rand) % 11;
      localStorage.setItem("character_num", charac_rand);
      console.log(input_name);
      localStorage.setItem("player_name", input_name);
      location.href="stage_1.html";
    }
  });
  $("#submit_player").on("click", function(){
    var input_name = document.getElementById("player_name").value;
    var charac_rand = input_name.split("");
    charac_rand = character_rand(charac_rand) % 11;
    localStorage.setItem("character_num", charac_rand);
    console.log(input_name);
    localStorage.setItem("player_name", input_name);
    location.href="stage_1.html";
  });
});
