app.service('dataProvider', function($http) {

	this.getPeople = function (callback) {
		$http({
			url: '/services/people/all',
			method: "GET",
		})
		.success(function(data, status, headers, config) {
		    callback({ success: true, content: data, status: 'success'});
		})
		.error(function(data, status, headers, config) {
			callback({ success: false, content: [], status: 'failed to load people'});
		});
	};

	this.addPerson = function(newPerson, callback) {

		console.log("add " + JSON.stringify(newPerson));

		$http.post('/services/people/persist', newPerson)
			.success(function(data, status, headers, config) {
			    callback({ success: true, content: data, status: 'success'});
			})
			.error(function(data, status, headers, config) {
				callback({ success: false, content: [], status: 'failed to add person'});
			});
	};

	this.deletePerson = function(id, callback) {

		console.log("delete person with _id = " + id);

		$http.post('/services/people/delete', id)
			.success(function(data, status, headere, config) {
				callback({ success:true, content: data, status: 'success'});				
			})		
			.error(function(data, status, headers, config) {
				callback({ success: false, content: [], status: 'failed to delete person'});
			});
	}

	this.togglePersonActivityStatus = function(id) {
	};

	this.getTasks = function(callback) {
		$http({
			url: '/services/tasks/all',
			method: "GET",
		})
		.success(function(data, status, headers, config) {
		    callback({ success: true, content: data, status: 'success'});
		})
		.error(function(data, status, headers, config) {
			callback({ success: false, content: [], status: 'failed to load tasks'});
		});
	};

	this.addTask = function(newTask, callback) {

		console.log("add " + JSON.stringify(newTask));

		$http.post('/services/tasks/persist', newTask)
			.success(function(data, status, headers, config) {
			    callback({ success: true, content: data, status: 'success'});
			})
			.error(function(data, status, headers, config) {
				callback({ success: false, content: [], status: 'failed to add task'});
			});
	};	

	this.deleteTask = function(id, callback) {

		console.log("delete task with _id = " + id);

		$http.post('/services/tasks/delete', id)
			.success(function(data, status, headere, config) {
				callback({ success:true, content: data, status: 'success'});				
			})		
			.error(function(data, status, headers, config) {
				callback({ success: false, content: [], status: 'failed to delete task'});
			});
	}	

});