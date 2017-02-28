//Select the document and when it's ready, trigger the callback
$( document ).ready( function() {
	console.log('Dom has loaded')
	
		$('p').slideDown( 500 )
		$( 'h1' ).on('click', function() {
		console.log("H1 has been clicked!")
		$(this).hide()
		$('p').slideDown(5000).hide( 5000 ).slideDown(5000)
	})
	
})