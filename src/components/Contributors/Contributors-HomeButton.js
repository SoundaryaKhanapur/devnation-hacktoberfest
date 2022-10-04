"use-strict" 
// Initailly script has been disablled in the public index.html document so first we need to enable it as it is the initial structure.

let creatButton = function() {
	// Selecting noscript tag from html file
	let noScript = document.getElementsByTagName('noscript');
	// Taking the target element from the HTML collection.
	let tgtNoScript = noScript[0];
	// Removing the noscript tag
	tgtNoScript.parentNode.removeChild(tgtNoScript);

	// Next step will be to create a home button

	// Selecting parent class 
	let btnParentClass = document.querySelector('#root');
	// Creating the home button.
	let homeButton = document.createElement('button');
	homeButton.className = "btn";
	homeButton.innerHTML = "Home";
	// Adding home button to HTML
	btnParentClass.appendChild(homeButton);
	// Adding link to home button.
	homeButton.addEventListener('click',function() {
		window.location.href = "https://soundaryakhanapur.github.io/devnation-hacktoberfest/#/contributor";
	})
}
creatButton();
