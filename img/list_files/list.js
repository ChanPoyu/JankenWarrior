var list1 = ['dog', 'cat', 'pussycat', 'chicken', 'dicky'];

var list2 = new Array('Dipsy', 'TinkyWinky', 'Lala', 'Po');

console.log(list1[1]);

$(document).ready(function(){

  $("#get_array_element").keyup(function(e){
    if(e.keyCode == 13){
      var index = $("#get_array_element").val();
      index = parseInt(index);
      console.log(list1[index]);
      console.log(list2[index]);
    }
  });

  $("#get").on("click", function(){
    var index = $("#get_array_element").val();
    // console.log(index);
    index = parseInt(index);
    console.log(list1[index]);
    console.log(list2[index]);
  });

});
