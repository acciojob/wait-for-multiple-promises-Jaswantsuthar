//your JS code here. If required.
// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(index) {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 3) + 1; // Random time between 1 and 3 seconds
        setTimeout(() => {
            resolve({ index: index + 1, time }); // Resolve with the promise index and time taken
        }, time * 1000);
    });
}

// Array of three promises
const promises = [
    createRandomPromise(0),
    createRandomPromise(1),
    createRandomPromise(2)
];

// Function to update the table with results
function updateTable(results) {
    const table = document.getElementById('promise-table');
    table.innerHTML = ''; // Clear the loading row

    results.forEach(result => {
        const row = document.createElement('tr');

        const col1 = document.createElement('td');
        col1.textContent = `Promise ${result.index}`;

        const col2 = document.createElement('td');
        col2.textContent = `${result.time} seconds`;

        row.appendChild(col1);
        row.appendChild(col2);

        table.appendChild(row);
    });

    // Add a final row with a message
    const finalRow = document.createElement('tr');
    const finalCol = document.createElement('td');
    finalCol.setAttribute('colspan', '2');
    finalCol.textContent = 'All promises resolved';
    finalRow.appendChild(finalCol);
    table.appendChild(finalRow);
}

// Use Promise.all to wait for all promises to resolve
Promise.all(promises).then((results) => {
    updateTable(results);
});
