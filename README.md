Textareas suck hard for code editing, this at least fixes entering tabs and preserving indentation.

Example:
	<a href="http://tkafka.github.com/jquery.codedit">http://tkafka.github.com/jquery.codedit</a>

Usage:

	<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
	<script type="text/javascript" src="./jquery.tk.codeedit.js"></script>
	<script type="text/javascript">
	$(document).ready(function() {
		$('textarea').codeEdit();
	});
	</script>