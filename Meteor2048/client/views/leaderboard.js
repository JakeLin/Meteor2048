Template.leaderboard.helpers({
  scores:function(){
    var scores = Scores.find({}, {sort:{currentScore:-1}}).fetch();

    if(Meteor.user()){
      var me = Meteor.user().emails[0].address;
    }
    scores.map(function(o, i) {
      scores[i].index = i+1;
      if(scores[i].name === me) {
        scores[i].me = 'active';
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