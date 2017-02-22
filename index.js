// To understand why axios is vendored, check SETUP.md
var axios = require('contentful-sdk-core/vendor-node/axios')
var contentful
try {
  contentful = require('./dist/contentful').default
} catch (err) {
  console.log(err)
  process.exit(1)
}

module.exports = {
  createClient: function (params) {
    return contentful(axios, params)
  }
}
