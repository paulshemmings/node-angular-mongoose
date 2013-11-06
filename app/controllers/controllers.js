
app.controller('PeopleController', function($scope, dataProvider) {
	$scope.people = [];

	function initialize() {
		$scope.list();
	};

	$scope.list = function() {
		dataProvider.getPeople(function(data) {
			$scope.people = data.content;
		});
	};

	$scope.add = function() {
		console.log("add person");
		dataProvider.addPerson($scope.newPerson, function(data) {
			$scope.list();
		});
	};

	$scope.activate = function(id) {
		dataProvider.togglePersonActivityStatus(id);
	};

	$scope.delete = function(id) {
		dataProvider.deletePerson(id, function(data) {
			$scope.list();
		});
	}

	initialize();
});

app.controller('TasksController', function($scope, dataProvider) {
	$scope.tasks = [];

	function initialize() {
		$scope.list();
	}

	$scope.list = function() {
		dataProvider.getTasks(function(data) {
			$scope.tasks = data.content;
		});
		dataProvider.getPeople(function(data) {
			$scope.people = data.content;
		})
	};	

	$scope.add = function() {
		console.log("add task");
		dataProvider.addTask($scope.newTask, function(data) {
			$scope.list();
		});
	};	

	$scope.delete = function(id) {
		dataProvider.deleteTask(id, function(data) {
			$scope.list();
		});
	}	

	initialize();
});