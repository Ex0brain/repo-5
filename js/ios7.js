// Basic iOS 7 CSS // Apache 2 license // hbang.ws
(function (a){
	"use strict";
	navigator.userAgent.indexOf("Cydia") != -1 ?
		(
			a.title = a.title.split(" \u00b7 ")[0],
			a.documentElement.classList.add("cydia", "depiction")
		) : a.documentElement.classsList.remove("cydia", "depiction");
})(document);