import Route from '@ember/routing/route';

export default Route.extend({
  model() {
      return this.store.findAll('user').then(users => {
      return users.filterBy('isAdmin', false);
    });
  }
});

// return this.store.findAll('user').then(users => {
//   return users.filterBy('isAdmin', false);
// });

// return this.get('store').query('user', {
//     isAdmin: false
// });
