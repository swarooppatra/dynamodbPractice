var params = {
	TableName: "Music",
};

dynamodb.describeTable(params, function(err, data) {
	if (err)
		console.log(JSON.stringify(err, null, 2));
	else
		console.log(JSON.stringify(data, null, 2))
});
