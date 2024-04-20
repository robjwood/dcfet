const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
	let url = "https://api.npoint.io/e51e2b5fbccedada86aa";

	/* This returns a promise */
	return EleventyFetch(url, {
		duration: "1d", // save for 1 day
		type: "json", // we’ll parse JSON for you
	});
};