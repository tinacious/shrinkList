/*
 *  Tinacious Design shrinkList jQuery plugin
 *  Plugin URL: https://github.com/tinacious/shrinkList
 *
 *  Christina Holly (Tinacious Design)
 *  http://tinaciousdesign.com
 *
 */
!function($){
	$.fn.extend({
		shrinkList: function(options) {
			var defaults = {
				filterText: 'Show all filters', 
				filterSpeed: 250, 
				maxFilters: 10
			}

			var options = $.extend(defaults, options);

			return this.each(function(){
				var obj = $(this);

				// hide all filters after the max amount
				obj.find('li').slice(defaults.maxFilters)
				.addClass('hidden')
				.hide()

				// actions to perform on hidden filters
				if(obj.find('.hidden').length > 0) {
					// create clickable filter
					var filterTextResult = '<li>...<br><a href="#" class="show-filters">' + defaults.filterText + '</a></li>';

					// append the link
					obj.append(filterTextResult);

					// clicking the link shows remaining filters
					obj.find('.show-filters').click(function(){
						obj.find('.hidden').slideDown(defaults.filterSpeed)
						$(this).parent().remove()
						return false
					})
				}
			});
		}
	});
}(window.jQuery);