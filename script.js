// Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Name and Email must be filled out");
        return false;
    }
    return true;
}

// Toggle Menu Visibility
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

// Load Static Content
function loadContent() {
    document.getElementById("content").innerHTML = "This is the new content!";
}

// Fetch and Display Data (This is a mockup for demonstration)
function loadData() {
    // For demo purposes, this will mimic fetching data from an API
    const sampleData = {
        id: 1,
        title: "Sample Data",
        description: "This is some dynamic content loaded via JavaScript."
    };

    document.getElementById("data").innerHTML = 
        `<strong>ID:</strong> ${sampleData.id}<br>
         <strong>Title:</strong> ${sampleData.title}<br>
         <strong>Description:</strong> ${sampleData.description}`;
}
