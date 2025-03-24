const fetchToDo = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const todo = await response.json();
        console.log(todo);
        return todo;
    } catch (error) {
        console.error("Error fetching To-Do:", error);
    }
};

// Apel funcție
fetchToDo(1);
