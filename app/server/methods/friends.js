import {Friends} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'friends.update'(friendId) {
      check(friendId, String);
      const FriendSelector = {owner: friendId};
      const mySelector = {owner: Meteor.userId()};
      const newFriend = Friends.findOne(FriendSelector);
      const myFriends = Friends.findOne(mySelector);
      const myFriendList = myFriends.friends;
      const newFriendList = newFriend.following;
      myFriendList.push(friendId);
      newFriendList.push(Meteor.userId());
      console.log(myFriendList, 'friendslist');
      console.log(newFriendList, 'newfriendslist');
      Friends.update({_id: myFriends._id}, {$set: {friends: _.uniq(myFriendList)}});
      Friends.update({_id: newFriend._id}, {$set: {following: _.uniq(newFriendList)}});
    }
  });
}
