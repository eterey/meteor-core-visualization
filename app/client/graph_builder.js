GraphBuilder = function(corePackages) {

  this.nodes = [];

  this.edges = [];

  this.corePackages = corePackages;

  this.defaultNodeSize = 20;

  this.colors = [
    '#00946C',
    '#946300',
    '#94007c',
    '#090094',
    '#008494',
    '#909400'
  ];

};

GraphBuilder.prototype.clear = function() {
  this.nodes = [];
  this.edges = [];
};

GraphBuilder.prototype.findNode = function(packageName) {
  return _.findWhere(this.nodes, {
    id: 'pkg-' + packageName
  });
};

GraphBuilder.prototype.hasNode = function(packageName) {
  return !!this.findNode(packageName);
};

GraphBuilder.prototype.createNode = function(packageName) {
  if (this.hasNode(packageName)) {
    return;
  }
  // Calculate node size
  var size = this.defaultNodeSize;
  // The size depends on the number of dependencies
  if (!!this.corePackages[packageName]) {
    size += 10 + this.corePackages[packageName].length;
  }
  // Choice color
  var nodeColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  // Create new node
  var newNode = {
    id: 'pkg-' + packageName,
    label: packageName,
    x: Math.random(),
    y: Math.random(),
    size: size,
    color: nodeColor
  };
  this.nodes.push(newNode);
  // Create edges
  this.createEdges(packageName);
};

GraphBuilder.prototype.createEdges = function(packageName) {
  var currNode = this.findNode(packageName);
  var dependencies = this.corePackages[packageName];
  var oSelf = this;
  _.each(dependencies, function(depName) {
    oSelf.createNode(depName);
    oSelf.edges.push({
      id: packageName + '-dep-' + depName,
      source: 'pkg-' + packageName,
      target: 'pkg-' + depName,
      size: Math.random(),
      color: currNode.color,
      type: 'curvedArrow'
    });
  });
};

GraphBuilder.prototype.build = function(corePackages) {
  this.clear();
  if(!!corePackages) {
    this.corePackages = corePackages;
  }
  var oSelf = this;
  _.each(this.corePackages, function(dependencies, packageName) {
    oSelf.createNode(packageName);
  });
  return {
    nodes: this.nodes,
    edges: this.edges
  };
};

