let todos = ['first todo', 'second todo', 'third todo'];
let count = 0;

function markAsDone() {
  while(count < 3) {
    todos[count] = 'done - ' + todos[count];
    ++count;
  }
  return todos;
}

