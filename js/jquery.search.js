/*
 *  Project: search.js
 *  Description: 
 *  Author: Francesco Uliana
 *  License: 
 *
 *  depends on Search.js
 */
;
(function ($, window, undefined) {
    
    var pluginName = 'searchjs',
        document = window.document,
        defaults = {
			logger: true,
			engine: {
				stopWords: ["and", "or", "if", "else"],
				minLength: 2, //minimum keyword length
				stem: true
			},
			display: function(data){
				if(console){
					console.log(data);
				}
			}
        };

    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {

		var options = this.options;
		var element = $(this.element);
		
		Search.init(options.engine, options.content, function () {
			element
			.attr("disabled", false)
			.on("keyup", function () {
				var query = $(this).val();
				if(query.length < options.engine.minLength) {
					options.display([]);
				} else {
					Search.search(query, function (results) {
						options.display(results);
					});
				}
			});
		});
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

}(jQuery, window));