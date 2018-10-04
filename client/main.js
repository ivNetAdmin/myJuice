import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Meteor } from 'meteor/meteor';

Juices = new Meteor.Collection('jucies');

Meteor.subscribe('allJuices');

Template.configure.helpers({
  juice: function(){
    return { };
  }
});

Template.juiceList.helpers({
  juiceItem: function(){
    var juiceItems = Juices.find();
    return juiceItems;
  }
});

Template.configure.events({
  'click #addConfiguration' : function(e){
    e.preventDefault();
    var name = $('#drink').val();
    var units = parseFloat($('#units').val());

    //Juices.update(this._id,{name: name, units: units})

   Juices.insert(
     { userId: Meteor.userId(), name: name, units: units}
   );
  }
});