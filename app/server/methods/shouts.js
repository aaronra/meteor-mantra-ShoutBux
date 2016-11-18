import {Shouts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'shout.insert'(text) {
      check(text, String);
      const shout = {
        owner: this.userId,
        text: text,
        date: new Date(),
      };
      Shouts.insert(shout);
    },
    'shouts.update'(shoutId, shout){
      check(shoutId, String);
      check(shout, String);
      Shouts.update({_id: shoutId}, {$set: {text: shout}});
    },
    'shouts.delete'(shoutId){
      check(shoutId, String);
      Shouts.remove({_id: shoutId});
    }
  })
}