document.getElementById('pay-button').addEventListener('click', function() {
    // Hide the current container
    document.getElementById('main-container').style.display = 'none';

    // Create the new container for categories
    const categoryContainer = document.createElement('div');
    categoryContainer.id = 'category-container';

    const heading = document.createElement('h2');
    heading.innerText = 'Choose Your Category';
    categoryContainer.appendChild(heading);

    const categories = ['FOOD', 'CLOTHES', 'Add Your Choice'];
    categories.forEach(category => {
        const button = document.createElement('button');
        button.innerText = category;
        categoryContainer.appendChild(button);
    });

    document.body.appendChild(categoryContainer);
    categoryContainer.style.display = 'block';
});
