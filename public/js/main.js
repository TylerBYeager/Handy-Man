/**
 * DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
 * without waiting for stylesheets, images, and subframes to finish loading.
 **/   
document.addEventListener("DOMContentLoaded", function () {
	//The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
	OverlayScrollbars(document.querySelectorAll("body"), { });
});