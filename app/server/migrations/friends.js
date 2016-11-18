import {Friends} from '/lib/collections/';
const addFriends = ()=> {
  console.log('making Friends :)');
  const userList = _.pluck(Meteor.users.find().fetch(), '_id');
  _.each(userList, (userId)=> {
    Friends.insert({
      owner: userId,
      friends: _.sample(_.without(userList, userId), _.random(1, 10)),
      following: _.sample(_.without(userList, userId), _.random(1, 10))
    })
  });
};
const removeFriends = ()=> {
  console.log('eliminating plastic friends');
  const userList = _.pluck(Meteor.users.find().fetch(), '_id');
  _.each(userList, (userId)=> {
    Friends.remove({owner: userId});
  });

};
Migrations.add({
  version: 2,
  name: 'Add Default Friends and Following',
  up: ()=> {
    addFriends();
  },
  down: ()=> {
    removeFriends();
  }
});