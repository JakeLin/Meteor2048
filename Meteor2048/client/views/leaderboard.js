Template.leaderboard.helpers({
  scores:function(){
    var scores = Scores.find({}, {sort:{currentScore:-1}}).fetch();

    var me = Meteor.user().emails[0].address;
    var index = 1;
    scores.map(function(o, i) {
      scores[i].index = index++;
      if(scores[i].name === me) {
        scores[i].me = 'me';
      }
    });

    return scores;
  }
});

/*
Template.leaderboard.helpers({
  scores:[{name:'Jake', currentScore:23, bestScore:65},{name:'Ken', currentScore:31, bestScore:51},{name:'Mark', currentScore:213, bestScore:615}]
});
*/