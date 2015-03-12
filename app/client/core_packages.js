App.corePackages = {
  "accounts-base": [
    "underscore",
    "localstorage",
    "tracker",
    "check",
    "random",
    "ejson",
    "callback-hook",
    "service-configuration",
    "ddp",
    "mongo",
    "blaze",
    "autopublish",
    "oauth-encryption"
  ],
  "accounts-facebook": [
    "accounts-base",
    "accounts-oauth",
    "facebook"
  ],
  "accounts-github": [
    "accounts-base",
    "accounts-oauth",
    "github"
  ],
  "accounts-google": [
    "underscore",
    "random",
    "accounts-base",
    "accounts-oauth",
    "google"
  ],
  "accounts-meetup": [
    "accounts-base",
    "accounts-oauth",
    "meetup"
  ],
  "accounts-meteor-developer": [
    "underscore",
    "random",
    "accounts-base",
    "accounts-oauth",
    "meteor-developer"
  ],
  "accounts-oauth": [
    "underscore",
    "random",
    "check",
    "webapp",
    "accounts-base",
    "oauth"
  ],
  "accounts-password": [
    "npm-bcrypt",
    "accounts-base",
    "srp",
    "sha",
    "email",
    "random",
    "check",
    "underscore",
    "ddp"
  ],
  "accounts-twitter": [
    "underscore",
    "accounts-base",
    "accounts-oauth",
    "twitter",
    "http"
  ],
  "accounts-ui": [
    "accounts-base",
    "accounts-ui-unstyled",
    "less"
  ],
  "accounts-ui-unstyled": [
    "tracker",
    "service-configuration",
    "accounts-base",
    "underscore",
    "templating",
    "session",
    "accounts-oauth",
    "accounts-password"
  ],
  "accounts-weibo": [
    "accounts-base",
    "accounts-oauth",
    "weibo"
  ],
  "appcache": [
    "webapp",
    "reload",
    "routepolicy",
    "underscore",
    "autoupdate"
  ],
  "autoupdate": [
    "webapp",
    "tracker",
    "retry",
    "ddp",
    "mongo",
    "underscore",
    "reload",
    "http",
    "random"
  ],
  "binary-heap": [
    "underscore",
    "id-map"
  ],
  "blaze": [
    "jquery",
    "tracker",
    "underscore",
    "htmljs",
    "observe-sequence",
    "reactive-var"
  ],
  "blaze-tools": [
    "htmljs",
    "underscore"
  ],
  "boilerplate-generator": [
    "underscore",
    "spacebars-compiler",
    "spacebars",
    "htmljs",
    "ui"
  ],
  "browser-policy": [
    "browser-policy-content",
    "browser-policy-framing",
    "browser-policy-common"
  ],
  "browser-policy-common": [
    "webapp"
  ],
  "browser-policy-content": [
    "browser-policy-common",
    "underscore",
    "webapp"
  ],
  "browser-policy-framing": [
    "browser-policy-common",
    "underscore"
  ],
  "callback-hook": [
    "underscore"
  ],
  "check": [
    "underscore",
    "ejson"
  ],
  "coffeescript-test-helper": [
    "coffeescript"
  ],
  "constraint-solver": [
    "underscore",
    "ejson",
    "check",
    "package-version-parser",
    "binary-heap",
    "random"
  ],
  "ddp": [
    "check",
    "random",
    "ejson",
    "json",
    "underscore",
    "tracker",
    "logging",
    "retry",
    "webapp",
    "routepolicy",
    "audit-argument-checks",
    "autopublish",
    "facts",
    "callback-hook",
    "reload",
    "minimongo"
  ],
  "deps": [
    "tracker"
  ],
  "ejson": [
    "json",
    "underscore",
    "base64"
  ],
  "email": [
    "underscore"
  ],
  "facebook": [
    "oauth2",
    "oauth",
    "http",
    "templating",
    "underscore",
    "random",
    "service-configuration"
  ],
  "facts": [
    "underscore",
    "templating",
    "mongo",
    "ddp",
    "autopublish"
  ],
  "force-ssl": [
    "webapp",
    "underscore",
    "ddp"
  ],
  "github": [
    "oauth2",
    "oauth",
    "http",
    "underscore",
    "templating",
    "random",
    "service-configuration"
  ],
  "google": [
    "oauth2",
    "oauth",
    "http",
    "underscore",
    "service-configuration",
    "random",
    "templating"
  ],
  "html-tools": [
    "htmljs"
  ],
  "htmljs": [
    "deps"
  ],
  "http": [
    "underscore",
    "url"
  ],
  "id-map": [
    "underscore",
    "json",
    "ejson"
  ],
  "jquery-waypoints": [
    "jquery",
    "coffeescript"
  ],
  "launch-screen": [
    "blaze",
    "templating"
  ],
  "livedata": [
    "ddp"
  ],
  "localstorage": [
    "random"
  ],
  "logging": [
    "underscore",
    "ejson"
  ],
  "markdown": [
    "templating"
  ],
  "meetup": [
    "oauth2",
    "oauth",
    "http",
    "templating",
    "underscore",
    "random",
    "service-configuration"
  ],
  "meteor": [
    "underscore"
  ],
  "meteor-developer": [
    "oauth2",
    "oauth",
    "http",
    "underscore",
    "service-configuration",
    "random",
    "templating"
  ],
  "meteor-platform": [
    "meteor",
    "webapp",
    "logging",
    "tracker",
    "deps",
    "session",
    "ddp",
    "livedata",
    "mongo",
    "blaze",
    "ui",
    "spacebars",
    "templating",
    "check",
    "underscore",
    "jquery",
    "random",
    "ejson",
    "reload",
    "autoupdate",
    "fastclick",
    "mobile-status-bar",
    "launch-screen"
  ],
  "minifiers": [
    "underscore"
  ],
  "minimongo": [
    "underscore",
    "json",
    "ejson",
    "id-map",
    "ordered-dict",
    "tracker",
    "random",
    "geojson-utils"
  ],
  "mongo": [
    "random",
    "ejson",
    "json",
    "underscore",
    "minimongo",
    "logging",
    "ddp",
    "tracker",
    "check",
    "binary-heap",
    "insecure",
    "autopublish",
    "disable-oplog",
    "webapp",
    "facts",
    "callback-hook"
  ],
  "mongo-livedata": [
    "mongo"
  ],
  "oauth": [
    "routepolicy",
    "webapp",
    "mongo",
    "reload",
    "base64",
    "underscore",
    "service-configuration",
    "logging",
    "oauth-encryption",
    "localstorage",
    "url"
  ],
  "oauth-encryption": [
    "npm-node-aes-gcm",
    "underscore"
  ],
  "oauth1": [
    "random",
    "service-configuration",
    "oauth",
    "underscore",
    "http",
    "mongo"
  ],
  "oauth2": [
    "service-configuration",
    "oauth"
  ],
  "observe-sequence": [
    "tracker",
    "minimongo",
    "underscore",
    "random"
  ],
  "ordered-dict": [
    "underscore"
  ],
  "package-version-parser": [
    "underscore"
  ],
  "random": [
    "underscore"
  ],
  "reactive-dict": [
    "underscore",
    "tracker",
    "ejson",
    "mongo"
  ],
  "reactive-var": [
    "tracker"
  ],
  "reload": [
    "underscore",
    "logging",
    "json"
  ],
  "reload-safetybelt": [
    "webapp"
  ],
  "retry": [
    "underscore",
    "random"
  ],
  "routepolicy": [
    "underscore",
    "webapp"
  ],
  "service-configuration": [
    "accounts-base",
    "mongo"
  ],
  "session": [
    "underscore",
    "reactive-dict",
    "ejson",
    "reload"
  ],
  "showdown": [
    "markdown"
  ],
  "spacebars": [
    "htmljs",
    "tracker",
    "blaze",
    "observe-sequence",
    "templating",
    "underscore"
  ],
  "spacebars-compiler": [
    "htmljs",
    "html-tools",
    "blaze-tools",
    "underscore",
    "minifiers"
  ],
  "spiderable": [
    "webapp",
    "templating",
    "underscore"
  ],
  "srp": [
    "random",
    "check",
    "sha",
    "underscore"
  ],
  "standard-app-packages": [
    "meteor-platform"
  ],
  "templating": [
    "underscore",
    "blaze",
    "meteor"
  ],
  "test-helpers": [
    "underscore",
    "tracker",
    "ejson",
    "tinytest",
    "random",
    "jquery",
    "ddp"
  ],
  "test-in-browser": [
    "tinytest",
    "bootstrap",
    "underscore",
    "session",
    "reload",
    "blaze",
    "templating",
    "spacebars",
    "ddp",
    "tracker",
    "autoupdate",
    "random"
  ],
  "test-in-console": [
    "tinytest",
    "underscore",
    "random",
    "ejson",
    "check",
    "http"
  ],
  "test-server-tests-in-console-once": [
    "tinytest",
    "underscore",
    "ejson"
  ],
  "tinytest": [
    "underscore",
    "random",
    "ddp",
    "mongo",
    "check"
  ],
  "twitter": [
    "http",
    "templating",
    "oauth1",
    "oauth",
    "random",
    "underscore",
    "service-configuration"
  ],
  "ui": [
    "blaze"
  ],
  "underscore": [
    "meteor"
  ],
  "url": [
    "underscore"
  ],
  "webapp": [
    "logging",
    "underscore",
    "routepolicy",
    "boilerplate-generator",
    "webapp-hashing"
  ],
  "webapp-hashing": [
    "underscore"
  ],
  "weibo": [
    "oauth2",
    "oauth",
    "http",
    "templating",
    "random",
    "service-configuration"
  ]
};