Template.home.helpers({
  'feature' : function () {
    return [
      { 'text' : 'Join Us', 'icon' : 'html5', 'color' : 'hover-orange', 'path' : '#html5' },
      { 'text' : 'Modern Web Development', 'icon' : 'archive', 'path' : '#packages' },
      { 'text' : 'Rapid Prototyping', 'icon' : 'terminal', 'path' : '#console-tool' },
      { 'text' : 'Real-time & Responsive', 'icon' : 'folder', 'path' : '#structure' }
    ]
  },
  'package' : function () {
    return [
      { 'name' : 'Iron Router', 'path' : 'https://github.com/EventedMind/iron-router' },
      { 'name' : 'Collection2', 'path' : 'https://github.com/aldeed/meteor-collection2' },
      { 'name' : 'Semantic UI', 'path' : 'http://semantic-ui.com/' },
      { 'name' : 'less', 'path' : 'http://lesscss.org/' },
      { 'name' : 'jQuery', 'path' : 'http://jquery.com/' },
      { 'name' : 'Underscore', 'path' : 'http://underscorejs.org/' },
      { 'name' : 'Handlebar Helpers', 'path' : 'https://github.com/raix/Meteor-handlebar-helpers' },
      { 'name' : 'Iron Router Progress', 'path' : 'https://github.com/Multiply/iron-router-progress' },
      { 'name' : 'Accounts UI & Password', 'path' : 'http://docs.meteor.com/#accountsui' },
      { 'name' : 'Velocity', 'path' : 'https://github.com/xolvio/velocity' }
    ];
  },
  'consoleCommand' : function () {
    return [
      { 'command' : 'Blog', 'description' : 'Create a custom platform to share your thoughts and stories.' },
      { 'command' : 'Shopping Cart', 'description' : 'Sell your products online, fast and secure.' },
      { 'command' : 'Automation', 'description' : 'Elimate repetiveness from your business, thats what computers are for!' },
      { 'command' : 'Portfolio', 'description' : 'Showcase your creativity and acumen with custom-built web app.' },
      { 'command' : 'Foundation', 'description' : 'Support a cause or your own on-going fundraising.' },
      { 'command' : 'LEARN!', 'description' : 'Build something with the most innovative tools on the Internet.  Add valuable skills to your resume.' }
    ];
  },
  'semanticElement' : function () {
    return [
      { 'what' : 'Jacks Snacks', 'withBootstrap' : 'McMaster', 'withSemanticUI' : 'Wendys' },
      { 'what' : 'Pizza Pizza', 'withBootstrap' : 'Innovation Park', 'withSemanticUI' : 'TSN' },
      { 'what' : 'Tim Hortons', 'withBootstrap' : 'Other', 'withSemanticUI' : 'Rogers' }

    ];
  },
  'folder' : function () {
    return [
      { 'root' : 'client', 'children' :
        ['Templates', ' routes', ' startup', ' stylesheets', 'subscriptions',
          'modules', 'views']
      },
      { 'root' : 'server', 'children' : ['node.js', 'web sockets', 'publications'] },
      { 'root' : 'command line' },
      { 'root' : 'git', 'children' : ['fixtures', 'lib', 'publications', 'startup'] },
      { 'root' : 'meteor-boilerplate' }
    ]
  }
});

Template.home.events({
});


Template.home.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return true;
  });
};
