var params = {
	TableName: "Music",
	Item: {
		"artist": "No One you know",
		"songtitle": "Call me today",
		"albumtitle": "Somewhat famous",
		"year": 2015,
		"price": 2.15,
		"genre": "country",
		"tags": {
			"composer": ["Smith", "Jones", "Davis"],
			"lengthinsecond": 214
		}
	},
	"ConditionExpression": "attribute_not_exists(artist) and attribute_not_exists(songtitle)"
};

docClient.put(params, function(err, data) {
	if (err)
		console.log(JSON.stringify(err, null, 2));
	else
		console.log(JSON.stringify(data, null, 2));
});
