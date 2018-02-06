// get bpmn-js
var BpmnViewer = require('bpmn-js/lib/Modeler');

// load additional modules
//add extra modules here
//then Run grunt which will generate the dist file
var additionalModules = [
  require('bpmn-js-properties-panel'),
  require('bpmn-js-properties-panel/lib/provider/bpmn'),
  require('bpmn-js-properties-panel/lib/provider/camunda'),
  // require('camunda-bpmn-moddle/resources/camunda')
  // require('camunda-bpmn-moddle/resources/camunda')

];

// add additional (default!) modules to bpmn-js
BpmnViewer.prototype._modules = BpmnViewer.prototype._modules.concat(additionalModules);

// export
module.exports = BpmnViewer;
