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
  var graph = new GraphBuilder().build(App.corePackages);
  // Init sigma:
  var sg = new sigma({
    graph: {
      nodes: graph.nodes,
      edges: graph.edges
    },
    renderer: {
      container: document.getElementById('graph-container'),
      type: 'canvas'
    }
  });
  sigma.plugins.dragNodes(sg, sg.renderers[0]);;
};

Template.CoreVisualization.destroyed = function () {
};