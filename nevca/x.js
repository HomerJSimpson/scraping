/*jslint white:true, unparam:true, browser:true */
/*global $, casper, console, jQuery */

(function() {

	"use strict";
	var casper = require('casper').create({
		clientScripts:['../mava/jquery.csv.js']
	}), firms = [], currentUrl = "http://www.newenglandvc.org/firms" ;

	function scrape() {
		this.start(currentUrl, function() {
			firms = this.evaluate(function(firms) {
				var $ = jQuery;

				$('ul.company-list li.company-item').each(function(i, v) {
					firms.push({
					});
				});

				return firms;
			}, firms);
			console.log('firms: ' + firms.length);
		}).then(function() {
			currentUrl = this.evaluate(function() {
				var next = jQuery("a:contains('next')").attr('href');
				return !next ? "" : (document.location.origin + next);
			});
		});
	}

	function check() {
		if(currentUrl && currentUrl.length > 0) {
			scrape.call(this);
			console.log('currentUrl: ' + currentUrl);
			this.run(check);
		} else {
			this.echo('Done!');
			this.exit();
		}
	}

	casper.start().then(function() { console.log('start'); });

	casper.run(check);

}());
