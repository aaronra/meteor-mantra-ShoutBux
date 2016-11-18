import {Users, Friends} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('user.current', function (userId) {
    const selector = (userId) ? {_id: userId} : {_id: this.userId};
    return Meteor.users.find(selector);
  });

  Meteor.publish('user.friendList', function (userId) {
    const selector = (userId) ? {owner: userId} : {owner: this.userId};
    return Friends.find(selector);
  });

  Meteor.publish('user.toFollow', function () {
    const selector = {owner: this.userId};
    const options = {fields: {_id: 1}};
    const yourFriends = Friends.findOne(selector);
    const toFollowSelector = {_id: {$nin: yourFriends.friends}};
    return Meteor.users.find(toFollowSelector, options);
  });

}
