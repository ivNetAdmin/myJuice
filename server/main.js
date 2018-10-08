import { Meteor } from 'meteor/meteor';

Juices = new Meteor.Collection('jucies');
Units = new Meteor.Collection('units');

Meteor.publish('allJuices',function(){
  return Juices.find({userId: this.userId});
});

Meteor.publish('allUnits',function(){
  return Units.find({userId: this.userId});
});

Meteor.startup(() => {
  // code to run on server at startup
 
});
