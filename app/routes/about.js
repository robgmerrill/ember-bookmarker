import Route from '@ember/routing/route';

let bookmarks = [{
  id: 1,
  title: 'Microsoft',
  link: 'https://www.microsoft.com/',
  about: 'At Microsoft our mission is to....'
},
{
  id: 2,
  title: 'Wikipedia',
  link: 'https://www.wikipedia.org/',
  about: 'At Wikipedia our mission is to....'
}, {
  id: 3,
  title: 'Google',
  link: 'https://www.google.com/',
  about: 'At google our mission is to....'
}]

export default Route.extend({
  // how we define a function and assign it to the model property to be available to that route
  model() {
    return bookmarks;
  }
});
