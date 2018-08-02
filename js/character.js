if(localStorage.getItem("player_name") === ""){
  localStorage.setItem("player_name", "wan wan");
}
var player = {
  name: localStorage.getItem("player_name"),
  HP: 200,    // health point
  ATK: 50,    // attack point
  DEF: 25,    // deffense point
  SPD: 25,    // speed point
  SKL: 25,     // skill point
  balance: localStorage.getItem("player_balance")
};


localStorage.setItem("enemy_name_1", "BIG BAD DOG");
var enemy_stage_1 = {
  name: localStorage.getItem("enemy_name_1"),
  HP: 100,    // health point
  ATK: 30,    // attack point
  DEF: 25,    // deffense point
  SPD: 25,    // speed point
  SKL: 25     // skill point
};
localStorage.setItem("enemy_name_2", "TOUMEI DOG");
var enemy_stage_2 = {
  name: localStorage.getItem("enemy_name_2"),
  HP: 400,    // health point
  ATK: 35,    // attack point
  DEF: 10,    // deffense point
  SPD: 300,    // speed point
  SKL: 25     // skill point
};
localStorage.setItem("enemy_name_3", "BOSS CAT");
var enemy_stage_3 = {
  name: localStorage.getItem("enemy_name_3"),
  HP: 9999,    // health point
  ATK: 40,    // attack point
  DEF: 20,    // deffense point
  SPD: 30,    // speed point
  SKL: 40     // skill point
};



// localstorage に保存しましょう
