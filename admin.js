// Function to check login state
function checkLoginState() {
    return !!localStorage.getItem('token');
}

// Function to render products to the table
function renderProducts() {
    const tableBody = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear the table before re-rendering

    products.forEach((product, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = product.title;
        row.insertCell(2).textContent = product.description;
        row.insertCell(3).textContent = product.price;
    });
}

// Function to add a new product
function addProduct() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    if (title && description && price) {
        products.push({ title, description, price });
        renderProducts(); // Re-render the table with updated products

        // Clear form inputs
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';
    } else {
        alert('Please fill all fields.');
    }
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}

// Event listeners
document.getElementById('add-btn').addEventListener('click', addProduct);
document.getElementById('logout-btn').addEventListener('click', handleLogout);

// Initial products array
const products = [
    { title: 'Product 1', description: 'Description 1', price: '$10.00' },
    { title: 'Product 2', description: 'Description 2', price: '$20.00' },
    { title: 'Product 3', description: 'Description 3', price: '$30.00' }
];

// Initial render of products
if (checkLoginState()) {
    renderProducts();
} else {
    window.location.href = 'login.html';
}
