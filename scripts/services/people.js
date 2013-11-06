var mongoose = require('mongoose'),
    util = require('util'),
    qs = require('querystring'),
    Person = mongoose.model('Person');

exports.all = function(req, res, path, content) {
	Person.find(function(err, people) {
		if(err) {
			res.end(err.errors);
			util.puts(err.error);
			return;
		} 
		res.end(JSON.stringify(people));
	});
};

exports.persist = function(req, res, path, content) {
	var personDetails = JSON.parse(content);
	var person = new Person(personDetails || {});
	person.save(function(err) {
		if(err) {
			res.end(err.errors);
			util.puts(err.error);
			return;
		}
		res.end(JSON.stringify(person));
	});		
};

exports.delete = function(req, res, path, content) {
	Person.remove({ _id: content }, function (err) {
		if(err) {
			res.end(err.errors);
			util.puts(err.error);
			return;
		}
	  	res.end(JSON.stringify({success: true}));
	});
};