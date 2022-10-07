const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

let toDos = [];

app.get("/", function (req, res) {
	let today = new Date();
	let options = {
		weekday: "long",
		day: "numeric",
		month: "long",
	};

	let day = today.toLocaleDateString("en-US", options);
	res.render("list", { toDos, day });
});

app.post("/", function (req, res) {
	let item = req.body.newToDo;
	toDos.push(item);
	res.redirect("/");
});

app.listen(8080, function () {
	console.log("listening on port 8080");
});
