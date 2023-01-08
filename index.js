const superagent = require('superagent');

const query = `query ($id: Int) {
  Page(page: 1) {
    mediaList(userId: $id, startedAt_greater: 20220101, startedAt_lesser: 20221231) {
      media {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
      }
    }
  }
}
`;
