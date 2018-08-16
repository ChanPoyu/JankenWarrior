localStorage.clear();

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}


var player_profile = {
  name: "noname",
  character_num: "",
  HP: 200,    // health point
  ATK: 50,    // attack point
  DEF: 25,    // deffense point
  SPD: 25,    // speed point
  SKL: 25,     // skill point
};
var enemy1_profile = {
  name: "BAD DOG",
  HP: 200,    // health point
  ATK: 30,    // attack point
  DEF: 25,    // deffense point
  SPD: 25,    // speed point
  SKL: 25     // skill point
};
var enemy2_profile = {
  name: "TOUMEI DOG",
  HP: 400,    // health point
  ATK: 29,    // attack point
  DEF: 20,    // deffense point
  SPD: 200,    // speed point
  SKL: 25     // skill point
};
var enemy3_profile = {
  name: "BOSS CAT",
  HP: 4444,    // health point
  ATK: 40,    // attack point
  DEF: 20,    // deffense point
  SPD: 25,    // speed point
  SKL: 25     // skill point
};

var HP_recovery = {
  amount: "0",
  power: 100,
  price: 0.05,
};
var ATK_enhance = {
  amount: "0",
  power: 50,
  price: 0.1,
  duration: 3,
  active: false
};
var DEF_enhance = {
  amount: "0",
  power: 50,
  price: 0.1,
  duration: 3,
  active: false
};
var SPD_enhance = {
  amount: "0",
  power: 2,
  price: 0.1,
  duration: 3,
  active: false
};
var SKL_enhance = {
  amount: "0",
  power: 2,
  price: 0.2,
  duration: 3,
  active: false
};
var Stage_status = {
  num: "0",
  battle: "before", //Before, In, End
  vic: false // victory status
};

var plyer_profile_json = JSON.stringify(player_profile);
var enemy1_profile_json = JSON.stringify(enemy1_profile);
var enemy2_profile_json = JSON.stringify(enemy2_profile);
var enemy3_profile_json = JSON.stringify(enemy3_profile);
var HP_recovery_json = JSON.stringify(HP_recovery);
var ATK_enhance_json = JSON.stringify(ATK_enhance);
var DEF_enhance_json = JSON.stringify(DEF_enhance);
var SPD_enhance_json = JSON.stringify(SPD_enhance);
var SKL_enhance_json = JSON.stringify(SKL_enhance);
var Stage_status_json = JSON.stringify(Stage_status);

localStorage.setItem("Character_player", plyer_profile_json);
localStorage.setItem("Character_enemy1", enemy1_profile_json);
localStorage.setItem("Character_enemy2", enemy2_profile_json);
localStorage.setItem("Character_enemy3", enemy3_profile_json);
localStorage.setItem("Item_HP", HP_recovery_json);
localStorage.setItem("Item_ATK", ATK_enhance_json);
localStorage.setItem("Item_DEF", DEF_enhance_json);
localStorage.setItem("Item_SPD", SPD_enhance_json);
localStorage.setItem("Item_SKL", SKL_enhance_json);
localStorage.setItem("Stage_status", Stage_status_json);
setTimeout(function(){
  localStorage.setItem("game_host_account", "0xc7fd1c5E771A896d27625Fc085beb64Af36787B0");
},500);


$(document).ready(function(){
  $('#player_name').keyup(function(e){
    if(e.keyCode === 13){
      var input_name = document.getElementById("player_name").value;
      var input_account = document.getElementById("player_account").value;
      if (input_name !== "" && input_account !== ""){
        var charac_rand = input_name.split("");
        charac_rand = character_rand(charac_rand) % 11;
        ModifyObject("Character_player", "name", input_name);
        ModifyObject("Character_player", "character_num", charac_rand);
        localStorage.setItem("player_account", input_account);
        console.log("get inputed name:" + input_name);
        location.href="stage_1.html";
      }
    }
  });
  $("#submit_player").on("click", function(){
      var input_name = document.getElementById("player_name").value;
      var input_account = document.getElementById("player_account").value;
      if (input_name !== "" && input_account !== "" && input_account.length === 42){
        var charac_rand = input_name.split("");
        charac_rand = character_rand(charac_rand) % 11;
        ModifyObject("Character_player", "name", input_name);
        ModifyObject("Character_player", "character_num", charac_rand);
        localStorage.setItem("player_account", input_account);
        console.log("get inputed name:" + input_name);
        location.href="stage_1.html";
      }
  });
});
