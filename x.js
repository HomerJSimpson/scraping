/*jslint white:true, unparam:true */
/*global $, casper, console */

(function() {
	"use strict";

	var casper = require('casper').create();

	casper.start('http://www.mava.org/Membership/MAVA-Members.aspx', function() {
		casper.evaluate(function(sel, val) {
			$(sel).find("option:contains('" + val + "')")
				.attr('selected', true)
				.change();
		}, '#dnn_ctr699_ViewDynamicUser_ddPageSize', 50);
	});

	casper.then(function() {
		var members = casper.evaluate(function() {
			var x=$('#dnn_ctr699_ViewDynamicUser_dlUsers tr'), member = [];
			x=x.slice(1, x.length-1);
			x.each(function(i, v) {
				var e = $('h2', v), telEmailWeb = e.next().next().text().trim().split(/\n/);
				member.push({
					name : e.text().trim(),
					addr : e.next().text().trim(),
					tel : telEmailWeb[0],
					email : telEmailWeb[1],
					www : telEmailWeb[2]
				});
			});
			return member;
		});
		console.log(JSON.stringify(members, null, '\t'));
	});

	casper.run();
}());
