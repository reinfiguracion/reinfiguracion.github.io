var seconds = 119;
function secondPassed() {
  var minutes = Math.round((seconds - 30)/60);
  var remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }
  document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "0";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('secondPassed()', 1000);

$( window ).load(function() {
 $('#myModal').modal({show: 'true', backdrop: 'static',keyboard: false})
});

  var answers=[];
  var c=0;
  var questions=get_questions();
  var keys=get_answer_key();
   $('[name=next]').click(function(event) {
      (c < questions.length)? save_answer() : $('#question_con').html(get_score());
   });
function save_answer(argument) {
     if($("input[name=answer]:checked").val() != undefined ){
       answers.push($("input[name=answer]:checked").val());
      c++;
     }
     $('#question_con').html(questions[c]);
   $('[name=next]').val('Next');
   //  console.log(answers);
}
function get_score (argument) {
  var score=0;
  for (var i = 0; i < questions.length; i++) {
      (answers[i] == keys[i] )? score++ :'';
  };
   c=0;
   answers=[];
   keys==[];
   $('[name=next]').val('Try Again').onclick;
   return '<h2>You scored '+score+' out of 3</h2> <br /> <h4>Congratulations! You qualify for a chance at the iPhone 6!</h4>';
}

//answer key
function get_answer_key (argument) {
  var keys=['USA','Germany','Mexico'];
  return keys;
}
//questions
function get_questions ( ) {
    var data=['<h3>What country is Apple from?</h3> <br/><div class="radio"><label class="block"><input type="radio" name="answer" value="USA">USA</label><br/><label class="block"><input type="radio" name="answer" value="Canada">Canada</label><br/> <label class="block"><input type="radio" name="answer" value="Germany">Germany</label></div>','<h2>Who won the World Cup this summer?</h2><br/><div class="radio"><label class="block"><input type="radio" name="answer" value="USA">USA</label><br/><label class="block"><input type="radio" name="answer" value="Canada">Canada</label><br/> <label class="block"><input type="radio" name="answer" value="Germany">Germany</label></div>','<h2>What country shares the largest border with the US?</h2><br/><div class="radio"><label class="block"><input type="radio" name="answer" value="Mexico">Mexico</label><br/><label class="block"><input type="radio" name="answer" value="Canada">Canada</label><br/> <label class="block"><input type="radio" name="answer" value="Germany">Germany</label></div>'];
 return data;
}


