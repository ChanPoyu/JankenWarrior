// アイテムを買う
function buy_item(_item, _key){
  var _price = _item.price;
  var _balance = localStorage.getItem("player_balance");
  _balance = parseInt(_balance) - _price;
  if(_balance >= 0){
    var _value =  localStorage.getItem(_key);
    _value = parseInt(_value) + 1;
    localStorage.setItem(_key, _value);
    localStorage.setItem("player_balance", _balance);
    $("#balance_display").html(_balance);
  }
}

// アイテムを使う
function use_item(_key, _item){
  var _value = localStorage.getItem(_key);
  _value = parseInt(_value) - 1;
  if(_value >= 0){
    localStorage.setItem(_key, _value);

    if(_key === "item_HP_amount"){
      player.HP += _item.power;
      if(player.HP > 200){
        player.HP = 200;
      }
      $("#player_hp").html(player.HP);
      $("#item1_dis_amount").html(localStorage.getItem("item_HP_amount"));
    }else if(_key === "item_ATK_amount"){
      player.ATK += _item.power;
      $("#item2_dis_amount").html(localStorage.getItem("item_ATK_amount"));
    }else if(_key === "item_DEF_amount"){
      player.DEF += _item.power;
      $("#item3_dis_amount").html(localStorage.getItem("item_DEF_amount"));
    }else if(_key === "item_SPD_amount"){
      player.SPD = player.SPD * _item.power;
      $("#item4_dis_amount").html(localStorage.getItem("item_SPD_amount"));
    }else if(_key === "item_SKL_amount"){
      player.SKL = player.SKL * _item.power;
      $("#item5_dis_amount").html(localStorage.getItem("item_SKL_amount"));
    }

  }else if(_value >= 0){
    return "item empty";
  }
}

function countItem(){
  if(count_ATK > 0){
    count_ATK -= 1;
  }
  if(count_DEF > 0){
    count_DEF -= 1;
  }
  if(count_SPD > 0){
    count_SPD -= 1;
  }
  if(count_SKL > 0){
    count_SKL -= 1;
  }
}

// コンピューターが拳を出す
function cmp_random(){
  var rand = Math.floor(Math.random() * 3);
  switch(rand){
    case 0:
      return "scissor";
      break;
    case 1:
      return "stone";
      break;
    case 2:
      return "paper";
      break;
  }
}

// ダメージ計算
function damage(_attacker, _deffender){
  var roulette = Math.random();
  console.log("1st rouleet is " + roulette);
  var critical_attack = false;
  var critical_posibility = _attacker.SKL / 1000;
  var atk = _attacker.ATK;
  if(roulette > 0 && roulette < critical_posibility){
    critical_attack = true;
    atk = 2 * _attacker.ATK;
  }else{
    critical_attack = false;
  }
  var def = _deffender.DEF;
  var total_dammage = atk - def;
  var dodge_attack = false;
  var dodge_posibility = _deffender.SPD / 1000;
  roulette = Math.random();
  console.log("2nd rouleet is " + roulette);
  if(roulette > 0 && roulette < dodge_posibility){
    dodge_attack = true;
    return [0, critical_attack, dodge_attack];
  }else{
    return [total_dammage, critical_attack, dodge_attack];
  }
}

function reward(_value){
  var recent_balance = localStorage.getItem("player_balance");
  recent_balance = parseInt(recent_balance);
  recent_balance = recent_balance + 1000;
  localStorage.setItem("player_balance", recent_balance);
  console.log("get " + _value + "coins");
}

function fadeout(_id, _value){
  $(_id).html(_value);
  $(_id).fadeIn("fast", function(){
    $(this).fadeOut("slow");
  });
  return false;
}
function character_rand(_rand){
  var length = _rand.length;
  var rand_num = 0;
  
  for(var i = 0; i < length; i++){
    switch (_rand[i]){
      case "a":
        rand_num += 1;
        break;
      case "b":
        rand_num += 2;
        break;
      case "c":
        rand_num += 3;
        break;
      case "d":
        rand_num += 4;
        break;
      case "e":
        rand_num += 5;
        break;
      case "f":
        rand_num += 6;
        break;
      case "g":
        rand_num += 7;
        break;
      case "h":
        rand_num += 8;
        break;
      case "i":
        rand_num += 9;
        break;
      case "j":
        rand_num += 10;
        break;
      case "k":
        rand_num += 11;
        break;
      case "l":
        rand_num += 12;
        break;
      case "m":
        rand_num += 13;
        break;
      case "n":
        rand_num += 14;
        break;
      case "o":
        rand_num += 15;
        break;
      case "p":
        rand_num += 16;
        break;
      case "q":
        rand_num += 17;
        break;
      case "r":
        rand_num += 18;
        break;
      case "s":
        rand_num += 19;
        break;
      case "t":
        rand_num += 20;
        break;
      case "u":
        rand_num += 21;
        break;
      case "v":
        rand_num += 22;
        break;
      case "w":
        rand_num += 23;
        break;
      case "x":
        rand_num += 24;
        break;
      case "y":
        rand_num += 25;
        break;
      case "z":
        rand_num += 26;
        break;
      case " ":
        rand_num += 0;
        break;
    }
  }
  return rand_num;
}
