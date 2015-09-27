// Publift Yield Expert


'use strict';


module.exports = {

  // current dev version
  version: process.env.version || "1.0",

  port: process.env.PORT || 8080,

  // app root
  gRoot: __dirname,

  // dataBackend can be 'datastore', 'cloudsql', or 'mongodb'.
  // see below
  dataBackend: 'datastore',

  // Google Developers Console Project ID.
  gcloud: {
    projectId: 'publift-yield-wizzard',
    kind : 'Unknown Publisher'
  }

  // mysql: {
  //   user: 'your-mysql-user',
  //   password: 'your-mysql-password',
  //   host: 'your-mysql-host'
  // },

  // mongodb: {
  //   url: 'your-mongo-url',
  //   collection: 'your-mongo-collection'
  // }
};
