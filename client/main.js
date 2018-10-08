import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Meteor } from 'meteor/meteor';

Juices = new Meteor.Collection('jucies');
Units = new Meteor.Collection('units');

Meteor.subscribe('allJuices');
Meteor.subscribe('allUnits');

Template.configure.helpers({
  juice: function(){
    return { };
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

Template.juiceList.helpers({
  juiceItem: function(){
    var juiceItems = Juices.find();
    return juiceItems;
  }
});

Template.juiceList.events({
  'click .juice' : function(e){
    e.preventDefault();
    var name = this.name;
    var units = parseFloat(this.units);
    var date = new Date();

    var strMonth = pad(date.getUTCMonth().toString(),"0",2);
    var strDate = pad(date.getUTCDate().toString(),"0",2);
  
    var timeStamp = date.getUTCFullYear() +strMonth +strDate;
    Units.insert(
      { userId: Meteor.userId(), name: name, units: units, timeStamp: timeStamp}
    );
  }
});

function pad(dateStr, char, size)
{
  var padding = "";
  for (i=0;i<size-dateStr.length;i++)
  {
    padding = padding+char;
  }
  return padding+dateStr;
}