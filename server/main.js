import { Meteor } from 'meteor/meteor';

Juices = new Meteor.Collection('jucies');

Meteor.publish('allJuices',function(){
  return Juices.find();
});

Meteor.startup(() => {
  // code to run on server at startup
  if (Juices.find().count()===0)
  {
    Juices.insert(
      { name: 'Pint Larger', units: 2.50}
    );
    Juices.insert(
      { name: 'Half Larger', units: 1.25}
    );
  }
});
