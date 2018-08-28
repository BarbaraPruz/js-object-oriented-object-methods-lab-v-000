function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;

  this.veto = function() { return "No, I must disagree"};
  this.approve = function() { return "You can do that!";}
  this.doCharity = function() { return "I like to help people."};
  this.sayHi = function() { returns `Hi, my name is${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;};
}