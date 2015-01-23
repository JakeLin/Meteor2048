Template.leaderboard.helpers({
  scores:function(){
    var scores = Scores.find({}, {sort:{currentScore:-1}}).fetch();

    var index = 1;
    scores.map(function(o, i) {
      scores[i].index = index++;
    });

    return scores;
  }
});

/*
Template.leaderboard.helpers({
  scores:[{name:'Jake', currentScore:23, bestScore:65},{name:'Ken', currentScore:31, bestScore:51},{name:'Mark', currentScore:213, bestScore:615}]
});
*/