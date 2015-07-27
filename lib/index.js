/**
 * Generic template for an Analiz module
 * @type {Object}
 */

module.exports = {

  /**
   * Configuration of the module
   * @type {Object}
   */
  config: {
    name: 'Module name',
    // The plugin category (choose one in the documentation)
    category: '',
    // List of the files the module will analize
    fileTypes: [
      // '.html',
      // '.php'
    ],
    options: [
      // {
      //   name: 'inputName',
      //   label: 'Label name',
      //   type: 'list',
      //   data: [
      //     {
      //       name: 'Name',
      //       value: 'value'
      //     },
      //     {
      //       name: 'Name',
      //       value: 'value'
      //     }
      //   ]
      // }
    ]
  },

  /**
   * Analize the files send by Analiz and return the results
   * @param  {Array} files          An array of the files send by Analiz
   * @param  {Object} options       Options chosen by the user
   * @param  {Function} callback    Callback
   * @return {Object}               Object that contains results
   */
  run: function ( files, options, callback ) {
    return [];
  }
};
