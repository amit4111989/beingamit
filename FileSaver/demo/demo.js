/* FileSaver.js demo script
 * 2012-01-23
 * 
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See LICENSE.md
 */

 $('textarea').text("Once Upon a Crime \r\n \r There was a Guy") ;

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/demo/demo.js */
(function(view) {
"use strict";
// The canvas drawing portion of the demo is based off the demo at
// http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
var
	  document = view.document
	, $ = function(id) {
		return document.getElementById(id);
	}
	, session = view.sessionStorage
	// only get URL when necessary in case Blob.js hasn't defined it yet
	, get_blob = function() {
		return view.Blob;
	}
	
	, text = $("text")
	, text_options_form = $("text-options")
	, text_filename = $("text-filename")
	, doc_impl = document.implementation;


if (session.text) {
	text.value = session.text;
} 

text_options_form.addEventListener("submit", function(event) {
	event.preventDefault();
	var BB = get_blob();
	saveAs(
		  new BB(
			  [text.value || text.placeholder]
			, {type: "text/plain;charset=" + document.characterSet}
		)
		, (text_filename.placeholder) + ".txt"
	);
}, false);


view.addEventListener("unload", function() {

	
	session.text = text.value;
	session.text_filename = text_filename.value;
	

}, false);
}(self));
