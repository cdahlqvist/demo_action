define(function (require) {
  // we need to load the css ourselves
  require('plugins/demo_action_vis/demo_action_vis.less');

  // we also need to load the controller and used by the template
  require('plugins/demo_action_vis/demo_action_vis_controller');

  // register the provider with the visTypes registry so that other know it exists
  require('ui/registry/vis_types').register(DemoActionVisProvider);

  function DemoActionVisProvider(Private) {
    var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'demo_action',
      title: 'Demo action widget',
      icon: 'fa-code',
      description: 'Useful for triggering demo actions via web services.',
      template: require('plugins/demo_action_vis/demo_action_vis.html'),
      params: {
        editor: require('plugins/demo_action_vis/demo_action_vis_params.html')
      },
      requiresSearch: false
    });
  }

  // export the provider so that the visType can be required with Private()
  return DemoActionVisProvider;
});
