var ids = {
        facebook: {
          clientID: 'get_your_own',
          clientSecret: 'get_your_own',
          callbackURL: 'http://127.0.0.1:3000/auth/facebook/callback'
        },
        twitter: {
          consumerKey: 'get_your_own',
          consumerSecret: 'get_your_own',
          callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
        },
        github: {
          clientID: '597257a20107546a10f0',
          clientSecret: '51bd9d3e615a881cb053fb5508d3a72bd38c62a8',
          callbackURL: "http://localhost:3000/usuario/github"
        },
        google: {
          consumerKey: '249209171120-78dbpnfj76ivjogap2blp9po2hmt7be9.apps.googleusercontent.com',
          consumerSecret: 'X2j4u4FOxZ8LCbvaqKCPRXuW',
          callbackURL: 'http://127.0.0.1:3000/auth/google/callback'
        },
        instagram: {
          clientID: 'get_your_own',
          clientSecret: 'get_your_own',
          callbackURL: 'http://127.0.0.1:3000/auth/instagram/callback'
        }
      };
    
      module.exports = ids;