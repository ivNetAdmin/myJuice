import { Meteor } from 'meteor/meteor';

Juices = new Meteor.Collection('jucies');

Meteor.publish('allJuices',function(){
  return Juices.find({userId: this.userId});
});

Meteor.startup(() => {
  // code to run on server at startup
 
});
