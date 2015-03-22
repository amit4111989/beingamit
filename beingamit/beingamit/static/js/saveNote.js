

(function(view) {
"use strict";

var
	  document = view.document
	, $ = function(id) {
		return document.getElementById(id);
	}
	, get_blob = function() {
		return view.Blob;
	}
	
	, text = $("contentNote")
	, text_options_form = $("text-options")
	, doc_impl = document.implementation;


text_options_form.addEventListener("click", function(event) {
	event.preventDefault();
	var BB = get_blob();
	saveAs(
		  new BB(
			  [text.value || text.placeholder]
			, {type: "text/plain;charset=" + document.characterSet}
		)
		,   "ille.txt"
	);
}, false);


}(self));
