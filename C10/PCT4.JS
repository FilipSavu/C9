const updateToDo = async (id, title, completed) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                completed: completed,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const updatedToDo = await response.json();
        console.log("To-Do Updated:", updatedToDo);
        return updatedToDo;
    } catch (error) {
        console.error("Error updating To-Do:", error);
    }
};

// Execută funcția
updateToDo(1, "Finalizează proiectul actualizat", true);
