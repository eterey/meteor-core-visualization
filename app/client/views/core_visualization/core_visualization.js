/*****************************************************************************/
/* CoreVisualization: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CoreVisualization.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CoreVisualization.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CoreVisualization: Lifecycle Hooks */
/*****************************************************************************/
Template.CoreVisualization.created = function () {
};

Template.CoreVisualization.rendered = function () {
  var allPackages = [];
  _.each(App.corePackages, function(dependencies, packageName) {
    if (allPackages.indexOf(packageName) === -1) {
      allPackages.push(packageName);
    }
    _.each(dependencies, function(depName) {
      if (allPackages.indexOf(depName) === -1) {
        allPackages.push(depName);
      }
    });
  });

  var nodes = _.map(allPackages, function(packageName) {
    var size = 20;
    if (!!App.corePackages[packageName]) {
      size += 10 + App.corePackages[packageName].length;
    }
    return {
      id: 'pkg-' + packageName,
      label: packageName,
      x: Math.random(),
      y: Math.random(),
      size: size,
      color: '#777'
    };
  });

  var edges = [];
  _.each(App.corePackages, function(dependencies, packageName) {
    _.each(dependencies, function(depName) {
      edges.push({
        id: packageName + '-dep-' + depName,
        source: 'pkg-' + packageName,
        target: 'pkg-' + depName,
        size: Math.random(),
        color: '#ccc',
        type: 'arrow'
      });
    });
  });

  // Instantiate sigma:
  new sigma({
    graph: {
      nodes: nodes,
      edges: edges
    },
    renderer: {
      container: document.getElementById('graph-container'),
      type: 'canvas'
    }
  });
};

Template.CoreVisualization.destroyed = function () {
};