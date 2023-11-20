

// to hide the try button/s either set the hideAllTry to true, or add the correct path
// to the pathArray (that is the html section ID and can be deduced from the api path)




window.onload = function () {

	// // hide every try buttons if true
	// const hideAllTry = true;

	// // paths to hide the try button
	// const pathArray = [
	// 	'tag/pet/[put]/pet',
	// 	'tag/pet/[post]/pet',
	// 	'tag/pet/[post]/pet/{petId}/uploadImage'
	// ]


	// Create a style element
	var styleElement = document.createElement('style');

	document.head.appendChild(styleElement);
	var styleSheet = styleElement.sheet;



	let cssRules = [];

	pathArray.forEach(function (path) {
		var escapedPath = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		escapedPath = escapedPath.replace(/\//g, '\\/');
		escapedPath = escapedPath.replace(/\[/g, '\[');
		escapedPath = escapedPath.replace(/\]/g, '\]');
		escapedPath = escapedPath.replace(/\{/g, '\{');
		escapedPath = escapedPath.replace(/\}/g, '\}');
		var cssRule = `#${escapedPath} .show-api-client-button { display: none !important; }`;
	
		// Add the CSS rule to the array
		cssRules.push(cssRule);
	});

	if (hideAllTry) {
		cssRules = [
			`.show-api-client-button { display: none !important; }`
		]
	}
	
	// Apply each CSS rule using insertRule
	cssRules.forEach(function (rule) {
		styleSheet.insertRule(rule, styleSheet.cssRules.length);
	});

};
