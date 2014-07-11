#!/usr/bin/env node

var program = require('commander'),
	sqlite3 = require('sqlite3').verbose();

var TODO = TODO || {};

var db = new sqlite3.Database('todo.sqlite3');
 
TODO.CRUD = {
	create_todos : "CREATE TABLE IF NOT EXISTS todos (description TEXT, done BOOL);",
	get_todos : "SELECT rowid AS id, description, done FROM todos ORDER BY done ASC, id DESC",
	add_todo : "INSERT INTO todos (description, done) VALUES (?, 0)",
	toggle_todo : "UPDATE todos SET done=NOT done WHERE rowid=?",
	init:function () {
		 
		db.run(this.create_todos);
	},
	add:function (description) {
		db.run(this.add_todo, description);
	    db.get("SELECT last_insert_rowid() as id", function(err, row) {
	      console.log("New Todo: " + row['id'] + ":" + description); 
	    });

	},
	done:function (id) {
		db.run(this.toggle_todo, id);
	    console.log("Todo #" + id + ": done");
	},
	list:function () {
		db.each(get_todos,
	      function(err, row) {
	      	console.log(row.id + ":" + row.done + " => " row.description);
	      }, function () {
	        res.end(JSON.stringify(todos) + ')');
	      }
	    );
	}
}
 

var todo = 

program
  .version('0.0.1')
  .option('-c, --clear', 'delete all todo items')

// must be before .parse() since
// node's emit() is immediate

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ custom-help --help');
  console.log('    $ custom-help -h');
  console.log('');
});

program.parse(process.argv);

console.log('todo.js');
