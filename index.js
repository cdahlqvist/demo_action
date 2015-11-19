module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: [
        'plugins/demo_action_vis/demo_action_vis'
      ]
    }

  });

};
