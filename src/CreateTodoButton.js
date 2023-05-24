import "./CreateTodoButton.css";

function AddTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log(event);
        console.log("le diste click jojo");
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { AddTodoButton };
