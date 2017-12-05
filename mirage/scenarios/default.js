export default function(server) {
  server.createList('user', 10, {
    bookmarks: server.createList('bookmarks', 20)
  });
  // server.createList('bookmark', 20);

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
