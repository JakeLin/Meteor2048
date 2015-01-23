Template.leaderboard.helpers({
  scores:function(){
    return Scores.find({});
  }
});

/*
Template.leaderboard.helpers({
  scores:[{name:'Jake', currentScore:23, bestScore:65},{name:'Ken', currentScore:31, bestScore:51},{name:'Mark', currentScore:213, bestScore:615}]
});
*/