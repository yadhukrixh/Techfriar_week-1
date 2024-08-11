// Array of institutes details
const institutions = [
    {
        title: "G P T C Shoranur",
        description: "Teached me valuable life lessons and also helps to improve my proffessional skills",
        id: "1"
    },
    {
        title: "G H S S East ottappalam",
        description: "Helped me to build basic coding skills. Had a supportive learning experience",
        id: "2"
    },
    {
        title: "T R K H S S Vaniyamkulam",
        description: "Played a great role to build my personality and teach great lessons about life.",
        id: "3"
    }
];

const hoverElements = document.querySelectorAll('.qualification-card');
const overlay = document.getElementById('popup');
let ins_data = null;

// Function to set data in the popup
function setData(elementID) {
    institutions.forEach(institute => {
        if(elementID === institute.id) {
            ins_data = institute;
        }
    });

    const popup_card = document.createElement('div');
    popup_card.classList.add('popup_card');
    popup_card.innerHTML = `
        <h3>${ins_data.title}</h3>
        <p>${ins_data.description}</p>
    `;

    // Clear previous content and append the new card
    overlay.innerHTML = ''; 
    overlay.appendChild(popup_card);
}

// Function to show the overlay
function showPopup(event) {
    const elementID = event.currentTarget.getAttribute('data-id'); // Use data-id to get the ID of the element
    setData(elementID);
    overlay.style.display = 'flex';
    overlay.style.position = 'absolute';
    overlay.classList.add('blur-background');
}

// Function to hide the overlay
function hidePopup() {
    overlay.style.display = 'none';  // Hide the overlay
}

// Add event listeners to each hover element
hoverElements.forEach(hoverElement => {
    hoverElement.addEventListener('mouseover', showPopup);
});

overlay.addEventListener('click', hidePopup);