const runToLatest = () => {
  Migrations.migrateTo('latest');
};
Meteor.startup(function () {
  runToLatest();
});