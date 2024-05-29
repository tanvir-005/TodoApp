var todos = [];

var box = document.getElementById("box");
var add = document.getElementById("add");

var new_note = "";
function whenclicked() {
    var text = box.value;
    new_note = text;
    todos.push(new_note);
}
add.addEventListener("click", whenclicked);
// console.log(todos[2]);

for(var i=0; i<todos.length; i++) {
    var note = document.createElement("div");
    note.className = "todos";
    note.id = "todos";

    var para = document.createElement("p");
    para.className = "note";
    para.textContent = todos[i];

    var butt = document.createElement("div");
    butt.className = "dd";

    var but1 = document.createElement("button");
    but1.className = "tick";
    but1.textContent = "✅";

    var but2 = document.createElement("button");
    but2.className = "cross";
    but2.textContent = "❌";

    butt.appendChild(but1);
    butt.appendChild(but2);
    note.appendChild(para);
    note.appendChild(butt);
    document.body.appendChild(note);
}

  