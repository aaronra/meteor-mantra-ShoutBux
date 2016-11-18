const defautUsers = [
  {
    username: 'shadowfiend',
    password: 'shadowfiend',
    profile: {
      photo: '/assets/users/photo/shadow-fiend.jpg',
      fullname: 'Shadow Fiend',
    }
  },
  {
    username: 'Khael',
    password: 'Khael',
    profile: {
      photo: '/assets/users/photo/invoker.jpg',
      fullname: 'Khael Invoker',
    }
  },
  {
    username: 'spectre',
    password: 'spectre',
    profile: {
      photo: '/assets/users/photo/spec.png',
      fullname: 'Mercurial Spectre',
    }
  },
  {
    username: 'yurnero',
    password: 'yurnero',
    profile: {
      photo: '/assets/users/photo/jugger.jpg',
      fullname: 'Yurnero Juggernaut',
    }
  },
  {
    username: 'akasha',
    password: 'akasha',
    profile: {
      photo: '/assets/users/photo/qp.jpg',
      fullname: 'Queen Akasha',
    }
  },
  {
    username: 'luna',
    password: 'luna',
    profile: {
      photo: '/assets/users/photo/luna.jpg',
      fullname: 'Luna Moonfang'
    }
  },
  {
    username: 'doom',
    password: 'doom',
    profile: {
      photo: '/assets/users/photo/doom.jpg',
      fullname: 'Doom Lucifer'
    }
  },
  {
    username: 'leoric',
    password: 'leoric',
    profile: {
      photo: '/assets/users/photo/wk.jpg',
      fullname: 'King Leoric'
    }
  },
  {
    username: 'balanar',
    password: 'balanar',
    profile: {
      photo: '/assets/users/photo/balanar.jpg',
      fullname: 'Balanar Nightstalker'
    }
  },
  {
    username: 'centaur',
    password: 'centaur',
    profile: {
      photo: '/assets/users/photo/centaur.jpg',
      fullname: 'Centaur Warchief'
    }
  }
];
const loadUsers = ()=> {
  console.log('loading users');
  _.each(defautUsers, (user)=> {
    Accounts.createUser(user);
  });
};
const removeUsers = ()=> {
  console.log('removing users');
  _.each(defautUsers, (user)=> {
    const removeUser = Meteor.users.findOne({'username': user.username});
    (removeUser) ? Meteor.users.remove(removeUser._id) : '';
  });
};
Migrations.add({
  version: 1,
  name: 'Add Default users',
  up: ()=> {
    loadUsers();
  },
  down: ()=> {
    removeUsers();
  }
});