Search.js
=========

Javascript search engine

depends on jQuery and javascript Porter Stemmer

<script>
	$(document).ready(function () {
		$("#query").searchjs({
			content: {
				"doc1": "one uno un en ein",
				"doc2": "due two dos deux",
				"doc3": "tre, trois, three tres"
			}
		});
	});
</script>

<input type="text" id="query" disabled="true" />