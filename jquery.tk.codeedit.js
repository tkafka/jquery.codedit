(function($){

	var insertAt = function(text, startPos, endPos, replacement) {
		return text.substring(0, startPos) + replacement + text.substring(endPos, text.length);
	}

	// http://stackoverflow.com/a/1738888/38729
	$.fn.codeEdit = function() {
		debugger;
		return this.keydown(function (e) {

			if (e.keyCode == 9) { // tab
				var insertedToken = "\t",
					startPos = this.selectionStart,
					endPos = this.selectionEnd,
					scrollTop = this.scrollTop;

				this.value = insertAt(this.value, startPos, endPos, insertedToken);
				this.focus();
				this.selectionStart = startPos + insertedToken.length;
				this.selectionEnd = startPos + insertedToken.length;
				this.scrollTop = scrollTop;

				e.preventDefault();
			} else if (e.keyCode == 13) { // enter
				var startPos = this.selectionStart,
					endPos = this.selectionEnd,
					text = this.value,
					textBeforeSelection = text.substr(0, startPos),
					linesBeforeStart = textBeforeSelection.split("\n"),
					lastLineBeforeStart = linesBeforeStart[linesBeforeStart.length - 1],
					tabsOnTheBeginningOfLine = lastLineBeforeStart.match(/^([\s]*)/);

				if (tabsOnTheBeginningOfLine.length) {
					var tabs = "\n" + tabsOnTheBeginningOfLine[0];

					this.value = insertAt(this.value, startPos, endPos, tabs);
					this.selectionStart = startPos + tabs.length;
					this.selectionEnd = startPos + tabs.length;
				}
				e.preventDefault();
			}
		});
	}
}($))

