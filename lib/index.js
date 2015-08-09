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

    /**
     * Name of the plugin
     * @type {Object}
     */
    name: {
      'en': 'Module name',
      'fr': 'Module name'
    },


    /**
     * The plugin category (choose one in the documentation)
     * @type {String}
     */
    category: '',


    /**
     * List of the files the module will analize
     * @type {Array}
     */
    fileTypes: [
      // '.html',
      // '.js'
    ],


    /**
     * Options of the plugin
     * Array of option Object
     *
     * @type {Array}
     * [{
     *   name: 'inputName',
     *   label: {
     *     'en': 'Label name',
     *     'fr': 'Label name'
     *  },
     *   type: 'list',
     *   data: [ {
     *     name: {
     *     	 'en': 'Label name',
     *       'fr': 'Label name'
     *     },
     *     value: 'value'
     *   }, ... ]
     * }, ... ]
     *
     */
    options: []
  },


  /**
   * Analize asynchronously the files send by Analiz and return the results to callback
   * @param  {Array} files          An array of the files send by Analiz
   * @param  {Object} options       Options chosen by the user
   * @param  {Function} callback    Callback to call after analyzing each file
   */
  run: function ( files, options, callback ) {

    files.forEach(function( file ) {
      // Analyze...

      // callback( error,  results);
    });
  }
};
