const createToDo = async (userId, title, completed) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                title: title,
                completed: completed,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const newToDo = await response.json();
        console.log("To-Do Created:", newToDo);
        return newToDo;
    } catch (error) {
        console.error("Error creating To-Do:", error);
    }
};

// Execută funcția
createToDo(1, "Finalizează proiectul", false);
