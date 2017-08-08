define('fun',["jquery"],function($) {
	var def=$.Deferred();
	return {
			getUser:function() {
				require(['app/user'],function(user) {
					
						def.resolve(user);
					

				});
				return def;
			}
	}
});