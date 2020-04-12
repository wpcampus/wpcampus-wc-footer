const { WPCampusHTMLElement } = require("@wpcampus/wpcampus-wc-default");

// wpc-area is the grid system used by WPCampus themes.
const template = `<div class="wpc-area wpc-footer__area wpc-footer__area--logo">
		<svg version="1.1" class="wpc-logo wpc-logo--footer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 300 50" style="enable-background:new 0 0 300 50;" xml:space="preserve">
			<style type="text/css">.wpc-logo--footer .wpc-logo__letters--wp{opacity:0.7;}</style>
			<title>WPCampus: Where WordPress meets Higher Education</title>
			<g>
				<path class="wpc-logo__letters--wp" d="M37.7,0L30,32.3h-4l-7-25l-6.5,25H8.2L0,0h4.2l6.5,26.1L17.5,0h3.3l7.4,26.1l6-26.1H37.7z"/>
				<path class="wpc-logo__letters--wp" d="M51.2,32.3h-4V0h11.4c3.6,0,6.2,1,7.9,2.9C68.2,4.9,69,7.1,69,9.6c0,2.8-0.9,5.1-2.8,6.9
		c-1.9,1.8-4.3,2.7-7.3,2.7h-7.8V32.3z M51.2,15.8h7.4c1.9,0,3.4-0.6,4.6-1.7c1.2-1.1,1.7-2.7,1.7-4.5c0-1.6-0.5-3-1.6-4.3
		c-1-1.3-2.5-1.9-4.5-1.9h-7.7V15.8z"/>
				<path d="M97,19.8l8.8,0.5c-0.4,3.8-1.8,6.8-4.3,8.8c-2.4,2-5.4,3.1-8.9,3.1c-4.2,0-7.7-1.4-10.3-4.2c-2.6-2.8-3.9-6.7-3.9-11.6
		c0-4.9,1.2-8.9,3.7-11.9c2.5-3,5.9-4.5,10.4-4.5c4.1,0,7.3,1.1,9.5,3.4c2.2,2.3,3.5,5.3,3.8,9.1l-9,0.5c0-2.1-0.4-3.6-1.2-4.5
		c-0.8-0.9-1.7-1.4-2.8-1.4c-3,0-4.5,3-4.5,9.1c0,3.4,0.4,5.7,1.2,6.9c0.8,1.2,1.9,1.8,3.3,1.8C95.3,25,96.7,23.3,97,19.8z"/>
				<path d="M135.6,32.3l-1.8-6.4h-8.6l-1.9,6.4h-8l10-32.3h10.5l10.1,32.3H135.6z M126.9,18.9h5.2l-2.6-9.4L126.9,18.9z"/>
				<path d="M190.2,0v32.3H181V9.2l-6,23.1h-6.3l-6.2-23.1v23.1h-7.4V0h12.9l4.7,17.1L177.2,0H190.2z"/>
				<path d="M209.6,20.5v11.7h-10V0h13.8c3.4,0,6,0.4,7.8,1.2c1.8,0.8,3.2,2,4.3,3.6c1,1.6,1.6,3.4,1.6,5.5c0,3.1-1.1,5.6-3.2,7.4
		c-2.1,1.9-5,2.8-8.6,2.8H209.6z M209.5,13.6h3.3c2.9,0,4.4-1.1,4.4-3.2c0-2-1.3-3-4-3h-3.6V13.6z"/>
				<path d="M262.5,0v21c0,4-1.2,6.9-3.5,8.6c-2.4,1.7-5.5,2.6-9.3,2.6c-4,0-7.2-0.8-9.6-2.5c-2.4-1.7-3.6-4.4-3.6-8.2V0h9.9v20.4
		c0,1.5,0.3,2.6,1,3.3c0.6,0.7,1.7,1,3.1,1c1.2,0,2.1-0.3,2.9-0.8c0.8-0.5,1.2-1.1,1.3-1.7c0.1-0.6,0.2-1.9,0.2-3.7V0H262.5z"/>
				<path d="M271.9,22.7l8.9-1.6c0.7,2.5,2.7,3.8,5.8,3.8c2.4,0,3.6-0.6,3.6-1.9c0-0.7-0.3-1.2-0.8-1.6c-0.6-0.4-1.6-0.7-3-1
		c-5.5-1.1-9-2.4-10.6-4.1c-1.6-1.7-2.3-3.7-2.3-6c0-3,1.1-5.4,3.4-7.4c2.2-2,5.5-2.9,9.7-2.9c6.4,0,10.6,2.6,12.6,7.7l-8,2.4
		c-0.8-2.1-2.5-3.1-5-3.1c-2.1,0-3.1,0.6-3.1,1.9c0,0.6,0.2,1,0.7,1.4c0.5,0.3,1.4,0.6,2.8,0.9c3.7,0.8,6.4,1.5,8,2.1
		c1.6,0.6,2.9,1.7,3.9,3.1c1.1,1.5,1.6,3.2,1.6,5.2c0,3.2-1.3,5.7-3.9,7.7c-2.6,2-5.9,2.9-10.1,2.9C278.4,32.3,273.7,29.1,271.9,22.7
		z"/>
			</g>
			<g>
				<path d="M9.2,50H8.2l-1.9-6.2c-0.1-0.3-0.2-0.6-0.3-1c-0.1-0.4-0.2-0.7-0.2-0.8c-0.1,0.6-0.2,1.2-0.4,1.8L3.5,50H2.5L0,40.7h1.1
				l1.5,5.7C2.8,47.3,3,48,3.1,48.6c0.1-0.8,0.3-1.5,0.5-2.3l1.7-5.7h1.1l1.7,5.7c0.2,0.7,0.4,1.4,0.5,2.2c0.1-0.6,0.2-1.3,0.5-2.2
				l1.5-5.7h1.1L9.2,50z"/>
				<path d="M20.4,50h-1.1v-4.4h-4.9V50h-1.1v-9.3h1.1v4h4.9v-4h1.1V50z"/>
				<path d="M28.2,50H23v-9.3h5.2v1h-4.1v3H28v1h-3.9V49h4.1V50z"/>
				<path d="M31.5,46.1V50h-1.1v-9.3H33c1.1,0,2,0.2,2.5,0.7c0.5,0.4,0.8,1.1,0.8,2c0,1.2-0.6,2.1-1.9,2.5L37,50h-1.3l-2.3-3.9H31.5z
				M31.5,45.2H33c0.8,0,1.3-0.2,1.7-0.5c0.4-0.3,0.5-0.8,0.5-1.4c0-0.6-0.2-1.1-0.5-1.3c-0.4-0.3-0.9-0.4-1.7-0.4h-1.4V45.2z"/>
				<path d="M43.8,50h-5.2v-9.3h5.2v1h-4.1v3h3.9v1h-3.9V49h4.1V50z"/>
				<path d="M57.6,50h-1.1l-1.9-6.2c-0.1-0.3-0.2-0.6-0.3-1c-0.1-0.4-0.2-0.7-0.2-0.8c-0.1,0.6-0.2,1.2-0.4,1.8L51.9,50h-1.1l-2.5-9.3
				h1.1l1.5,5.7c0.2,0.8,0.4,1.5,0.4,2.2c0.1-0.8,0.3-1.5,0.5-2.3l1.7-5.7h1.1l1.7,5.7c0.2,0.7,0.4,1.4,0.5,2.2
				c0.1-0.6,0.2-1.3,0.5-2.2l1.5-5.7h1.1L57.6,50z"/>
				<path d="M69.6,45.3c0,1.4-0.4,2.6-1.1,3.4c-0.7,0.8-1.7,1.2-3,1.2c-1.3,0-2.4-0.4-3.1-1.2c-0.7-0.8-1.1-2-1.1-3.4
				c0-1.5,0.4-2.6,1.1-3.4c0.7-0.8,1.8-1.2,3.1-1.2c1.3,0,2.3,0.4,3,1.2S69.6,43.9,69.6,45.3z M62.4,45.3c0,1.2,0.3,2.2,0.8,2.8
				c0.5,0.6,1.3,0.9,2.3,0.9c1,0,1.8-0.3,2.3-0.9c0.5-0.6,0.8-1.6,0.8-2.8c0-1.2-0.3-2.1-0.8-2.8c-0.5-0.6-1.3-0.9-2.3-0.9
				c-1,0-1.8,0.3-2.3,0.9C62.7,43.2,62.4,44.1,62.4,45.3z"/>
				<path d="M73,46.1V50h-1.1v-9.3h2.6c1.1,0,2,0.2,2.5,0.7c0.5,0.4,0.8,1.1,0.8,2c0,1.2-0.6,2.1-1.9,2.5l2.5,4.2h-1.3L75,46.1H73z
				M73,45.2h1.5c0.8,0,1.3-0.2,1.7-0.5c0.4-0.3,0.5-0.8,0.5-1.4c0-0.6-0.2-1.1-0.5-1.3c-0.4-0.3-0.9-0.4-1.7-0.4H73V45.2z"/>
				<path d="M87.5,45.3c0,1.5-0.4,2.7-1.2,3.5c-0.8,0.8-2,1.2-3.6,1.2h-2.6v-9.3H83c1.4,0,2.6,0.4,3.4,1.2
				C87.1,42.7,87.5,43.8,87.5,45.3z M86.4,45.3c0-1.2-0.3-2.1-0.9-2.7c-0.6-0.6-1.5-0.9-2.7-0.9h-1.6v7.4h1.3c1.3,0,2.3-0.3,2.9-1
				C86.1,47.5,86.4,46.5,86.4,45.3z"/>
				<path d="M95.6,43.4c0,0.9-0.3,1.7-1,2.2s-1.6,0.8-2.8,0.8h-1.1V50h-1.1v-9.3h2.4C94.5,40.7,95.6,41.6,95.6,43.4z M90.8,45.4h1
				c1,0,1.7-0.2,2.1-0.5c0.4-0.3,0.6-0.8,0.6-1.5c0-0.6-0.2-1.1-0.6-1.4c-0.4-0.3-1-0.5-1.9-0.5h-1.2V45.4z"/>
				<path d="M98.8,46.1V50h-1.1v-9.3h2.6c1.1,0,2,0.2,2.5,0.7c0.5,0.4,0.8,1.1,0.8,2c0,1.2-0.6,2.1-1.9,2.5l2.5,4.2H103l-2.3-3.9H98.8z
				M98.8,45.2h1.5c0.8,0,1.3-0.2,1.7-0.5c0.4-0.3,0.5-0.8,0.5-1.4c0-0.6-0.2-1.1-0.5-1.3s-0.9-0.4-1.7-0.4h-1.4V45.2z"/>
				<path d="M111.1,50h-5.2v-9.3h5.2v1H107v3h3.9v1H107V49h4.1V50z"/>
				<path d="M118.4,47.5c0,0.8-0.3,1.4-0.9,1.9c-0.6,0.4-1.4,0.7-2.4,0.7c-1.1,0-1.9-0.1-2.5-0.4v-1c0.4,0.2,0.8,0.3,1.2,0.4
				c0.4,0.1,0.9,0.1,1.3,0.1c0.7,0,1.2-0.1,1.6-0.4c0.4-0.3,0.5-0.6,0.5-1.1c0-0.3-0.1-0.6-0.2-0.8c-0.1-0.2-0.3-0.4-0.6-0.6
				c-0.3-0.2-0.7-0.4-1.3-0.6c-0.8-0.3-1.4-0.7-1.8-1.1c-0.4-0.4-0.5-1-0.5-1.6c0-0.7,0.3-1.3,0.8-1.7c0.5-0.4,1.2-0.6,2.1-0.6
				c0.9,0,1.7,0.2,2.5,0.5l-0.3,0.9c-0.7-0.3-1.5-0.5-2.2-0.5c-0.6,0-1,0.1-1.3,0.4c-0.3,0.2-0.5,0.6-0.5,1c0,0.3,0.1,0.6,0.2,0.8
				c0.1,0.2,0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.4,1.3,0.6c0.9,0.3,1.6,0.7,2,1.1C118.3,46.3,118.4,46.9,118.4,47.5z"/>
				<path d="M125.7,47.5c0,0.8-0.3,1.4-0.9,1.9c-0.6,0.4-1.4,0.7-2.4,0.7c-1.1,0-1.9-0.1-2.5-0.4v-1c0.4,0.2,0.8,0.3,1.2,0.4
				c0.4,0.1,0.9,0.1,1.3,0.1c0.7,0,1.2-0.1,1.6-0.4c0.4-0.3,0.5-0.6,0.5-1.1c0-0.3-0.1-0.6-0.2-0.8c-0.1-0.2-0.3-0.4-0.6-0.6
				c-0.3-0.2-0.7-0.4-1.3-0.6c-0.8-0.3-1.4-0.7-1.8-1.1c-0.4-0.4-0.5-1-0.5-1.6c0-0.7,0.3-1.3,0.8-1.7c0.5-0.4,1.2-0.6,2.1-0.6
				c0.9,0,1.7,0.2,2.5,0.5l-0.3,0.9c-0.7-0.3-1.5-0.5-2.2-0.5c-0.6,0-1,0.1-1.3,0.4c-0.3,0.2-0.5,0.6-0.5,1c0,0.3,0.1,0.6,0.2,0.8
				c0.1,0.2,0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.4,1.3,0.6c0.9,0.3,1.6,0.7,2,1.1C125.5,46.3,125.7,46.9,125.7,47.5z"/>
				<path d="M135.5,50l-3.2-8.2h-0.1c0.1,0.7,0.1,1.4,0.1,2.3V50h-1v-9.3h1.6l2.9,7.7h0.1l3-7.7h1.6V50h-1.1v-6c0-0.7,0-1.4,0.1-2.2
				h-0.1l-3.2,8.2H135.5z"/>
				<path d="M148.4,50h-5.2v-9.3h5.2v1h-4.1v3h3.9v1h-3.9V49h4.1V50z"/>
				<path d="M155.8,50h-5.2v-9.3h5.2v1h-4.1v3h3.9v1h-3.9V49h4.1V50z"/>
				<path d="M160.8,50h-1.1v-8.3h-2.9v-1h7v1h-2.9V50z"/>
				<path d="M170.5,47.5c0,0.8-0.3,1.4-0.9,1.9c-0.6,0.4-1.4,0.7-2.4,0.7c-1.1,0-1.9-0.1-2.5-0.4v-1c0.4,0.2,0.8,0.3,1.2,0.4
				c0.4,0.1,0.9,0.1,1.3,0.1c0.7,0,1.2-0.1,1.6-0.4c0.4-0.3,0.5-0.6,0.5-1.1c0-0.3-0.1-0.6-0.2-0.8c-0.1-0.2-0.3-0.4-0.6-0.6
				c-0.3-0.2-0.7-0.4-1.3-0.6c-0.8-0.3-1.4-0.7-1.8-1.1c-0.4-0.4-0.5-1-0.5-1.6c0-0.7,0.3-1.3,0.8-1.7c0.5-0.4,1.2-0.6,2.1-0.6
				c0.9,0,1.7,0.2,2.5,0.5l-0.3,0.9c-0.7-0.3-1.5-0.5-2.2-0.5c-0.6,0-1,0.1-1.3,0.4c-0.3,0.2-0.5,0.6-0.5,1c0,0.3,0.1,0.6,0.2,0.8
				c0.1,0.2,0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.4,1.3,0.6c0.9,0.3,1.6,0.7,2,1.1C170.3,46.3,170.5,46.9,170.5,47.5z"/>
				<path d="M183.2,50h-1.1v-4.4h-4.9V50h-1.1v-9.3h1.1v4h4.9v-4h1.1V50z"/>
				<path d="M185.9,50v-9.3h1.1V50H185.9z"/>
				<path d="M193.7,45.1h3.1v4.4c-0.5,0.2-1,0.3-1.5,0.3s-1.1,0.1-1.7,0.1c-1.4,0-2.4-0.4-3.2-1.2c-0.8-0.8-1.1-2-1.1-3.4
				c0-0.9,0.2-1.8,0.6-2.5c0.4-0.7,0.9-1.2,1.6-1.6c0.7-0.4,1.5-0.6,2.5-0.6c1,0,1.9,0.2,2.7,0.5l-0.4,0.9c-0.8-0.3-1.6-0.5-2.4-0.5
				c-1.1,0-2,0.3-2.6,1c-0.6,0.7-0.9,1.6-0.9,2.7c0,1.2,0.3,2.1,0.9,2.8c0.6,0.6,1.5,0.9,2.6,0.9c0.6,0,1.2-0.1,1.8-0.2v-2.8h-2V45.1z
				"/>
				<path d="M206.3,50h-1.1v-4.4h-4.9V50h-1.1v-9.3h1.1v4h4.9v-4h1.1V50z"/>
				<path d="M214.1,50H209v-9.3h5.2v1H210v3h3.9v1H210V49h4.1V50z"/>
				<path d="M217.4,46.1V50h-1.1v-9.3h2.6c1.1,0,2,0.2,2.5,0.7c0.5,0.4,0.8,1.1,0.8,2c0,1.2-0.6,2.1-1.9,2.5l2.5,4.2h-1.3l-2.3-3.9
				H217.4z M217.4,45.2h1.5c0.8,0,1.3-0.2,1.7-0.5c0.4-0.3,0.5-0.8,0.5-1.4c0-0.6-0.2-1.1-0.5-1.3s-0.9-0.4-1.7-0.4h-1.4V45.2z"/>
				<path d="M233.2,50H228v-9.3h5.2v1h-4.1v3h3.9v1h-3.9V49h4.1V50z"/>
				<path d="M242.8,45.3c0,1.5-0.4,2.7-1.2,3.5c-0.8,0.8-2,1.2-3.6,1.2h-2.6v-9.3h2.8c1.4,0,2.6,0.4,3.4,1.2
				C242.4,42.7,242.8,43.8,242.8,45.3z M241.7,45.3c0-1.2-0.3-2.1-0.9-2.7s-1.5-0.9-2.7-0.9h-1.6v7.4h1.3c1.3,0,2.3-0.3,2.9-1
				C241.4,47.5,241.7,46.5,241.7,45.3z"/>
				<path d="M252,40.7v5.9c0,1-0.3,1.9-0.9,2.5c-0.6,0.6-1.5,0.9-2.6,0.9c-1.1,0-2-0.3-2.6-0.9c-0.6-0.6-0.9-1.4-0.9-2.5v-5.9h1.1v6
				c0,0.8,0.2,1.4,0.6,1.8c0.4,0.4,1,0.6,1.8,0.6c0.8,0,1.4-0.2,1.8-0.6c0.4-0.4,0.6-1,0.6-1.8v-6H252z"/>
				<path d="M258.6,41.6c-1,0-1.8,0.3-2.4,1s-0.9,1.6-0.9,2.7c0,1.2,0.3,2.1,0.8,2.7c0.6,0.6,1.3,1,2.4,1c0.6,0,1.4-0.1,2.2-0.3v0.9
				c-0.6,0.2-1.4,0.4-2.3,0.4c-1.3,0-2.4-0.4-3.1-1.2c-0.7-0.8-1.1-2-1.1-3.4c0-0.9,0.2-1.7,0.5-2.4c0.3-0.7,0.9-1.2,1.5-1.6
				s1.4-0.6,2.3-0.6c0.9,0,1.8,0.2,2.5,0.5l-0.4,0.9C260,41.8,259.3,41.6,258.6,41.6z"/>
				<path d="M268.8,50l-1.2-2.9H264l-1.1,2.9h-1.1l3.7-9.3h0.9l3.6,9.3H268.8z M267.3,46.1l-1.1-2.9c-0.1-0.4-0.3-0.8-0.4-1.3
				c-0.1,0.4-0.2,0.9-0.4,1.3l-1.1,2.9H267.3z"/>
				<path d="M274.2,50h-1.1v-8.3h-2.9v-1h7v1h-2.9V50z"/>
				<path d="M278.7,50v-9.3h1.1V50H278.7z"/>
				<path d="M290.4,45.3c0,1.4-0.4,2.6-1.1,3.4s-1.7,1.2-3,1.2c-1.3,0-2.4-0.4-3.1-1.2c-0.7-0.8-1.1-2-1.1-3.4c0-1.5,0.4-2.6,1.1-3.4
				c0.7-0.8,1.8-1.2,3.1-1.2c1.3,0,2.3,0.4,3,1.2S290.4,43.9,290.4,45.3z M283.2,45.3c0,1.2,0.3,2.2,0.8,2.8s1.3,0.9,2.3,0.9
				c1,0,1.8-0.3,2.3-0.9s0.8-1.6,0.8-2.8c0-1.2-0.3-2.1-0.8-2.8s-1.3-0.9-2.3-0.9c-1,0-1.8,0.3-2.3,0.9S283.2,44.1,283.2,45.3z"/>
				<path d="M300,50h-1.2l-5.1-7.8h-0.1c0.1,0.9,0.1,1.8,0.1,2.5V50h-1v-9.3h1.2l5.1,7.8h0.1c0-0.1,0-0.5-0.1-1.1s0-1.1,0-1.3v-5.3h1
				V50z"/>
			</g>
		</svg>
	</div>
	<div class="wpc-area wpc-footer__area wpc-footer__area--actions">
		<nav class="wpc-nav wpc-nav--actions" aria-label="Login or become a member">
			<ul>
				<li><a class="wpc-button wpc-button--primary" href="/">Login</a></li>
				<li><a class="wpc-button" href="/">Become a member</a></li>
			</ul>
		</nav>
	</div>
	<div class="wpc-area wpc-footer__area wpc-footer__area--nav">
		<nav class="wpc-nav wpc-nav--footer" aria-label="Footer">
			<ul>
				<li><a href="https://wpcampus.org/about/">About WPCampus</a></li>
				<li><a href="https://wpcampus.org/code-of-conduct/">Code of Conduct</a></li>
				<li><a href="https://wpcampus.org/diversity/">Diversity, Equity, and Inclusion</a></li>
				<li><a href="https://wpcampus.org/contact/">Contact us</a></li>
			</ul>
		</nav>
  	</div>
	<div class="wpc-area wpc-footer__area wpc-footer__area--desc">
		<div class="wpc-desc">
			<p>WPCampus is a community of networking, resources, and events for anyone using WordPress in the world of Higher Education.</p>
		</div>
	</div>
	<div class="wpc-area wpc-footer__area wpc-footer__area--social">
		<nav class="wpc-nav wpc-nav--social" aria-label="Social media and other services">
			<ul>
				<li class="slack">
					<a href="https://wpcampus.org/get-involved/" title="Join WPCampus on Slack">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
							<title>Join WPCampus on Slack</title>
							<path d="M200,124.8c0.5,18.1-9.5,35.8-29,48.2c-16.7,10.7-35.2,17-54.3,21.5c-11.9,2.8-24.1,5-36.2,5.4
							c-23.3,0.8-41.3-9.4-53.7-29.3C15.2,152.2,8.9,131.7,4,110.8C0.9,97.9-0.9,84.9,0.5,71.6c2-18.8,11.3-32.9,26.7-43.3
							C42.4,18,59.6,12.2,77,7.1c13.3-3.9,26.9-6.8,40.8-7.1c20.1-0.5,37.4,5.9,50.3,22.2c9.8,12.4,15.9,26.7,20.8,41.6
							C194.8,81.9,199.8,100.2,200,124.8z M122.2,56.4c-1.1-3.3-2.1-6-3-8.8c-0.7-1.9-1.2-3.8-2-5.6c-2.2-4.8-7.8-7.1-12.7-5.4
							c-5.1,1.8-8.1,7.2-6.6,12.5c1.3,4.7,3,9.2,4.6,14.1c-9.1,3-17.8,5.9-26.6,8.8c-1.6-4.8-3-9.1-4.6-13.3c-2.2-5.8-7.8-8.4-13.2-6.4
							c-5.6,2-8.1,7.3-6.3,13.2c1.3,4.3,2.8,8.6,4.3,13.2c-4.2,1.4-8.2,2.8-12.2,4.2c-6.1,2.1-9.1,7.5-7.2,13.1c1.9,5.8,7.5,8.5,13.8,6.5
							c4-1.3,8-2.6,12.3-4c2.9,8.7,5.7,17.1,8.5,25.6c-4.5,1.5-8.6,2.9-12.5,4.3c-5.8,2.1-8.7,7.4-7,12.9c1.8,5.7,7.4,8.5,13.4,6.7
							c4.2-1.3,8.3-2.7,12.4-4c0.3,0.3,0.5,0.5,0.6,0.7c1.3,3.8,2.6,7.5,3.9,11.3c2.3,6.7,7.6,9.7,13.5,7.7c5.8-1.9,8.2-7.7,6.1-14.4
							c-1.3-4-2.6-8-4-12.2c9-3,17.7-5.9,26.6-8.9c1.6,4.6,2.9,8.7,4.4,12.8c2.2,6.1,7.7,8.9,13.2,7.1c5.7-1.9,8.3-7.6,6.2-14
							c-1.3-4.1-2.7-8.2-4.1-12.5c2.2-0.8,4.1-1.4,6-2c2-0.7,4-1.3,6-2.1c6.3-2.3,9.4-7.8,7.4-13.4c-2.1-5.8-7.6-8.3-14-6.2
							c-3.9,1.2-7.8,2.5-12.1,3.9c-2.9-8.7-5.7-17-8.6-25.6c4.7-1.6,9-2.9,13.2-4.6c5.5-2.2,8.1-7.7,6.2-13c-2-5.6-7.3-8.2-13.2-6.5
							C130.8,53.5,126.7,54.9,122.2,56.4z"></path>
							<path d="M109,82.7c-9.1,3.1-17.7,6-26.7,9c2.9,8.7,5.8,17.1,8.7,25.7c9.1-3,17.7-6,26.7-9C114.7,99.7,111.9,91.5,109,82.7z"></path>
						</svg>
					</a>
				</li>
				<li class="twitter">
					<a href="https://twitter.com/wpcampusorg" title="Follow WPCampus on Twitter">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70 60" style="enable-background:new 0 0 70 60;" xml:space="preserve">
							<title>Follow WPCampus on Twitter</title>
							<path d="M70,9c-2.1,2.9-4.5,5.5-7.3,7.7v1.7c0,3.9-0.6,7.9-1.7,11.7c-1.2,3.9-3,7.6-5.3,11c-2.3,4-5.3,6.7-8.6,9.7
							c-3.3,2.8-7.1,5.1-11.2,6.7c-4.4,1.7-9.1,2.6-13.9,2.7C14.2,60,6.5,57.7,0,53.3h3.6c6.6,0.1,12.9-2.3,17.8-6.7
							c-3.1-0.1-6.1-1.1-8.6-3c-2.5-1.8-4.3-4.4-5.3-7.3c0.9,0.2,1.7,0.3,2.6,0.3c1.4-0.1,2.7-0.3,4-0.7c-3.4-0.6-6.4-2.4-8.6-5
							c-2.2-2.6-3.4-5.9-3.3-9.3v-0.3c2,1.2,4.3,1.8,6.6,1.7c-2-1.4-3.6-3.2-4.6-5.3c-1.1-2.2-1.7-4.6-1.7-7c0-2.6,0.6-5.1,2-7.3
							c4,4.7,8.2,8.3,12.9,10.3c5.1,2.6,10.7,4.1,16.5,4.3c-0.3-1.2-0.4-2.4-0.3-3.7c0-4,1.3-7.7,4.3-10C41,1.7,44.6,0,47.9,0
							c4.3,0,7.9,1.3,10.2,4.7C61.4,4.2,64.6,3,67.4,1c-1.1,3.5-3.5,6.5-6.6,8.3C65,10.7,68,10,70,9z"></path>
						</svg>
					</a>
				</li>
				<li class="facebook">
					<a href="https://www.facebook.com/wpcampus" title="Follow WPCampus on Facebook">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
							<title>Follow WPCampus on Facebook</title>
							<path d="M189,0H11C4.9,0,0,4.9,0,11v178c0,6.1,4.9,11,11,11h95.8v-77.5h-26V92.4h26.1V70.1
							c0-25.8,15.8-39.9,38.8-39.9c11,0,20.5,0.8,23.3,1.2v27h-16c-12.5,0-15,6-15,14.7v19.3h29.9l-3.9,30.2h-26V200h51
							c6.1,0,11-4.9,11-11V11C200,4.9,195.1,0,189,0z"></path>
						</svg>
					</a>
				</li>
				<li class="youtube">
					<a href="https://www.youtube.com/wpcampusorg" title="Follow WPCampus on YouTube">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 84 60" style="enable-background:new 0 0 84 60;" xml:space="preserve">
							<title>Follow WPCampus on YouTube</title>
							<path d="M84,23c0,1.7,0,4,0,7s0,5.3,0,7s-0.1,3.8-0.4,6.4c-0.2,2.3-0.6,4.6-1.1,6.9c-0.5,2.2-1.6,4.2-3.2,5.8
							c-1.6,1.5-3.6,2.5-5.8,2.7C66.5,59.6,56,60,42,60s-24.5-0.4-31.5-1.2c-2.2-0.2-4.2-1.2-5.8-2.7c-1.7-1.5-2.8-3.6-3.3-5.8
							c-0.5-2.3-0.8-4.6-1-6.9C0.2,40.9,0.1,38.7,0,37s-0.1-4,0-7c0-3,0-5.3,0-7s0.1-3.8,0.4-6.4c0.2-2.3,0.6-4.7,1.1-6.9
							C2,7.5,3.1,5.4,4.7,3.9c1.6-1.5,3.6-2.5,5.8-2.7C17.5,0.4,28,0,42,0s24.5,0.4,31.4,1.2c2.2,0.2,4.2,1.2,5.8,2.7
							c1.7,1.5,2.8,3.6,3.3,5.8c0.5,2.3,0.8,4.6,1,6.9C83.8,19.1,83.9,21.3,84,23z M60,30c0.1-1-0.5-2-1.4-2.5l-24-15
							c-0.9-0.6-2.1-0.6-3-0.1c-1,0.5-1.6,1.5-1.6,2.6v30c-0.1,1.1,0.6,2.1,1.5,2.6C32,47.9,32.5,48,33,48c0.6,0,1.1-0.1,1.6-0.5l24-15
							C59.5,32,60.1,31,60,30z"></path>
						</svg>
					</a>
				</li>
				<li class="github">
					<a href="https://github.com/wpcampus/" title="Follow WPCampus on GitHub">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 62 60" style="enable-background:new 0 0 62 60;" xml:space="preserve">
							<title>Follow WPCampus on GitHub</title>
							<path d="M30.8,0C13.8,0,0,13.8,0,30.8C0,44.4,8.8,55.9,21,60c1.5,0.3,2.1-0.7,2.1-1.5c0-0.7,0-2.7,0-5.2c-8.6,1.9-10.4-4.1-10.4-4.1
							c-1.4-3.6-3.4-4.5-3.4-4.5c-2.8-1.9,0.2-1.9,0.2-1.9c3.1,0.2,4.7,3.2,4.7,3.2c2.7,4.7,7.2,3.3,9,2.6c0.3-2,1.1-3.3,2-4.1
							c-6.8-0.8-14-3.4-14-15.2c0-3.4,1.2-6.1,3.2-8.3c-0.3-0.8-1.4-3.9,0.3-8.1c0,0,2.6-0.8,8.5,3.2c2.5-0.7,5.1-1,7.7-1s5.2,0.4,7.7,1
							c5.9-4,8.5-3.2,8.5-3.2c1.7,4.2,0.6,7.4,0.3,8.1c2,2.2,3.2,4.9,3.2,8.3c0,11.8-7.2,14.4-14,15.2c1.1,0.9,2.1,2.8,2.1,5.7
							c0,4.1,0,7.4,0,8.4c0,0.8,0.6,1.8,2.1,1.5c12.2-4.1,21-15.6,21-29.2C61.5,13.8,47.7,0,30.8,0z"></path>
						</svg>
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="wpc-area wpc-footer__area wpc-footer__area--copyright">
		<div class="wpc-copyright">&copy; 2015-` + new Date().getFullYear() + ` <a href="https://wpcampus.org">WPCampus</a></div>
	</div>`;

class WPCampusFooter extends WPCampusHTMLElement {
	constructor() {
		super({ componentID: "footer" });
	}
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute("role", "contentinfo");
		this.innerHTML = this.wrapTemplate(template, true, true, true);
	}
}
customElements.define("wpcampus-footer", WPCampusFooter);

module.exports = WPCampusFooter;
