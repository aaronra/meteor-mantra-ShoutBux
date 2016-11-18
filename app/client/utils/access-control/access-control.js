const isLoggedIn = (routename, redirect) => {
  const currentUser = Meteor.userId();
  if (!currentUser) {
    redirect('/');
  }
};
const accessControl = {isLoggedIn};
export {accessControl}