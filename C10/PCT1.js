const fetchToDoList = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const todos = await response.json();
        console.log("Lista To-Do:", todos);
        return todos;
    } catch (error) {
        console.error("Error fetching To-Do list:", error);
    }
};

// Execută funcția
fetchToDoList();
