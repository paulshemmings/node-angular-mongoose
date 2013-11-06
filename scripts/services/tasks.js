var mongoose = require('mongoose'),
    Task = mongoose.model('Task');

exports.all = function(req, res, path) {
	Task.find(function(err, tasks) {
		if(err) {
			res.end(err.errors);
			util.puts(err.error);
			return;
		} 
		res.end(JSON.stringify(tasks));
	});	
};

exports.persist = function(req, res, path, content) {
	var taskDetails = JSON.parse(content);
	var task = new Task(taskDetails || {});
	task.save(function(err) {
		if(err) {
			res.end(err.errors);
			util.puts(err.error);
			return;
		}
		res.end(JSON.stringify(task));
	});		
};

exports.delete = function(req, res, path, content) {
	Task.remove({ _id: content }, function (err) {
		if(err) {
			res.end(err.errors);
			util.puts(err.error);
			return;
		}
	  	res.end(JSON.stringify({success: true}));
	});
};