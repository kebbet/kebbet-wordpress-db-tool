/**
 * File db-tool.js.
 *
 * Simple way to change the db-update strings.
 *
 * @since 1.0.0
 * @author Erik Betshammar
 */

(function () {
	var body, button, prefix, oldInput, newInput, row1;

	body = document.body;
	if (!body) {
		return;
	}

	button = document.getElementById('calculate');
	if (!button) {
		return;
	}

	prefix = document.getElementById('prefix');
	if (!prefix) {
		return;
	}

	oldInput = document.getElementById('old');
	if (!oldInput) {
		return;
	}

	newInput = document.getElementById('new');
	if (!newInput) {
		return;
	}

	row1 = document.getElementById('row1');
	if (!row1) {
		return;
	}

	row2 = document.getElementById('row2');
	if (!row2) {
		return;
	}

	row3 = document.getElementById('row3');
	if (!row3) {
		return;
	}

	row4 = document.getElementById('row4');
	if (!row4) {
		return;
	}
	copyClass = 'copy-row';
	copyButtons = document.getElementsByClassName(copyClass);
	if (!copyButtons) {
	return;
	}

	body.addEventListener('load', changeContent, true);
	button.addEventListener('click', changeContent, true);

	Array.prototype.forEach.call(copyButtons, clickCopy);

	/**
	 * Copy the content of a paragraph to the OS clipboard.
	 * @param {object} button Each button in the document.
	 */
	function clickCopy(button) {
		button.addEventListener('click', function (button) {
			var targetRow, targetRowId;
			targetRowId = button.target.dataset.target;
			targetRow = document.getElementById(targetRowId);

			copyToClipboard(targetRow.innerText);
		});
	}

	/**
	 * Change content in the main div when clicking the calculate button. Gets info from 3 inputs.
	 */
	function changeContent() {
		var newRow1, newRow2, newRow3, newRow4, newUrl, oldUrl;

		if (!prefix.value) {
			prefix.value = 'wp_';
		}
		if (!oldInput.value) {
			oldInput.value = 'https://oldsite.dev';
		}
		if (!newInput.value) {
			newInput.value = 'https://newsite.dev';
		}

		newUrl = '<span class="new-value">' + newInput.value + '</span>';
		oldUrl = '<span class="old-value">' + oldInput.value + '</span>';

		newRow1 = "UPDATE " + prefix.value + "posts SET <span class='option'>guid</span> = replace(<span class='option'>guid</span>, '" + oldUrl + "','" + newUrl + "');";
		newRow2 = "UPDATE " + prefix.value + "posts SET <span class='option'>post_content</span> = replace(<span class='option'>post_content</span>, '" + oldUrl + "','" + newUrl + "');";
		newRow3 = "UPDATE " + prefix.value + "postmeta SET <span class='option'>meta_value</span> = replace(<span class='option'>meta_value</span>, '" + oldUrl + "','" + newUrl + "');";
		newRow4 = "UPDATE " + prefix.value + "options SET <span class='option'>option_value</span> = replace(<span class='option'>option_value</span>, '" + oldUrl + "','" + newUrl + "') WHERE option_name = 'home' OR option_name = 'siteurl';";
		row1.innerHTML = newRow1;
		row2.innerHTML = newRow2;
		row3.innerHTML = newRow3;
		row4.innerHTML = newRow4;
	}

	/**
	 * Copy a string to clipboard.
	 *
	 * @source https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
	 */
	const copyToClipboard = (str) => {
		// Create a <textarea> element.
		const el = document.createElement('textarea');

		// Set its value to the string that you want copied.
		el.value = str;

		// Make it readonly to be tamper-proof.
		el.setAttribute('readonly', '');
		el.style.position = 'absolute';

		// Move outside the screen to make it invisible.
		el.style.left = '-9999px';

		// Append the <textarea> element to the HTML document.
		document.body.appendChild(el);

		/**
		 * Check if there is any content selected previously
		 * Store selection if found
		 * Mark as false to know no selection existed before
		 */
		const selected = 0 < document.getSelection().rangeCount ? document.getSelection().getRangeAt(0) : false;

		// Select the <textarea> content.
		el.select();

		// Copy - only works as a result of a user action (e.g. click events).
		document.execCommand('copy');

		// Remove the <textarea> element.
		document.body.removeChild(el);

		// If a selection existed before copying.
		if (selected) {
		// Unselect everything on the HTML document.
		document.getSelection().removeAllRanges();

		// Restore the original selection.
		document.getSelection().addRange(selected);
		}
	};
})();
