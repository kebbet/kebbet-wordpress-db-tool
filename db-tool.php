<?php
/**
 * Generate snippets for updating WordPress databases.
 *
 * @author Erik Betshammar <info@verkan.se>
 */

?>
<html>
	<head>
		<title>Kebbet WordPress database tool</title>
		<link rel="stylesheet" id="kebbet-db-tool-css" href="assets/css/db-tool.css" media="all">
	</head>
	<body>
		<?php
		$input_prefix = "<label for='prefix'>Table prefix<input id='prefix' type='text'></input></label>";
		$input_old    = "<label for='old'>Old value<input id='old' type='text'></input></label>";
		$input_new    = "<label for='new'>New value<input id='new' type='text'></input></label>";

		$textarea  = "<div id='display'>";
		$textarea .= "<p id='row1'>null</p><button class='copy-row' data-target='row1'>Copy</button>";
		$textarea .= "<p id='row2'>null</p><button class='copy-row' data-target='row2'>Copy</button>";
		$textarea .= "<p id='row3'>null</p><button class='copy-row' data-target='row3'>Copy</button>";
		$textarea .= "<p id='row4'>null</p><button class='copy-row' data-target='row4'>Copy</button>";
		$textarea .= "</div>";

		echo $input_prefix;
		echo $input_old;
		echo $input_new;
		echo '<button id="calculate" type="button">Update snippet</button>';
		echo $textarea;
		?>
	</body>
	<script src="assets/js/db-tool.js" id="kebbet-db-tool-js"></script>
</html>
