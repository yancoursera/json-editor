  return JSONEditor;
	};

  if (typeof define === "function" && define.amd) {
	  define([
	    'js/vendor/underscore.v1-6'
	  ], function(_) {
	    return JsonFunc(_);
	  });
	} else if (typeof window !== 'undefined' && typeof ender === 'undefined') {
	  return JsonFunc(window._);
	}

})();
