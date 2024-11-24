// Firebase Configuration
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBBUM5ESdf7jti-_oWrZmOGjt42ARoCNoA",
    authDomain: "photo-lab-a9ddb.firebaseapp.com",
    projectId: "photo-lab-a9ddb",
    storageBucket: "photo-lab-a9ddb.appspot.com",
    messagingSenderId: "857054787351",
    appId: "1:857054787351:web:4042c7d1377a483de32952",
    measurementId: "G-7WMG4K91D0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Drag and Drop Functionality
const dragDropZone = document.getElementById('drag-drop-zone');
const imageInput = document.getElementById('image-input');

dragDropZone.addEventListener('click', () => imageInput.click());
dragDropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragDropZone.classList.add('drag-over');
});
dragDropZone.addEventListener('dragleave', () => dragDropZone.classList.remove('drag-over'));
dragDropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dragDropZone.classList.remove('drag-over');
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        imageInput.files = files;
        alert('Image uploaded: ' + files[0].name);
    }
});

// Sign In & Sign Up Logic
const signInButton = document.getElementById('sign-in-btn');
const signUpButton = document.getElementById('sign-up-btn');

signInButton.addEventListener('click', () => {
    const name = prompt('Enter your name:');
    const phoneNumber = prompt('Enter your phone number:');

    if (name && phoneNumber) {
        alert(`Signing in as ${name} with phone number ${phoneNumber}.`);
    } else {
        alert('Name and phone number are required to sign in.');
    }
});

signUpButton.addEventListener('click', () => {
    const phoneNumber = prompt('Enter your phone number:');

    if (phoneNumber) {
        alert(`Signing up with phone number ${phoneNumber}.`);
    } else {
        alert('Phone number is required to sign up.');
    }
});

// Dynamic Size Selection
const sizeSelect = document.getElementById('size-select');
const customSizeInputs = document.getElementById('custom-size-inputs');
const priceDisplay = document.getElementById('price-display');

sizeSelect.addEventListener('change', () => {
    if (sizeSelect.value === 'custom') {
        customSizeInputs.classList.remove('d-none');
    } else {
        customSizeInputs.classList.add('d-none');
    }

    updatePrice();
});

document.getElementById('custom-width').addEventListener('input', updatePrice);
document.getElementById('custom-height').addEventListener('input', updatePrice);

function updatePrice() {
    console.log('Updating price...');

    let price = 0;

    // Get size selection
    const size = document.getElementById('size-select').value;
    console.log('Selected size:', size);

    if (size === '8x10') price += 10;
    else if (size === '8.5x11') price += 15;
    else if (size === '12x18') price += 20;
    else if (size === '18x24') price += 30;
    else if (size === '24x36') price += 40;
    else if (size === 'custom') {
        const customWidth = parseFloat(document.getElementById('custom-width').value) || 0;
        const customHeight = parseFloat(document.getElementById('custom-height').value) || 0;
        console.log('Custom dimensions:', customWidth, customHeight);
        price += customWidth * customHeight * 0.5;
    }

    // Get selected frame
    const selectedFrameElement = document.querySelector('.frame.selected');
    if (selectedFrameElement) {
        const selectedFrameId = selectedFrameElement.id;
        const selectedFrame = frameStyles.find(frame => frame.id === selectedFrameId);
        if (selectedFrame) {
            console.log('Selected frame price:', selectedFrame.price);
            price += selectedFrame.price;
        }
    } else {
        console.log('No frame selected.');
    }

    // Update displayed price
    const priceDisplay = document.getElementById('price-display');
    priceDisplay.textContent = `Price: $${price.toFixed(2)}`;
}



// Frame Style Loading

const frameStyles = [
    { id: 'classic-frame', style: 'classic', price: 10, imageUrl: 'https://i.pinimg.com/originals/4b/17/61/4b176113032b7b279c1c24d2675a2555.png' },
    { id: 'modern-frame', style: 'modern', price: 15, imageUrl: 'https://spb.zvetnoe.ru/upload/catalog/2021/07/4150-BK-1.jpg' },
    { id: 'vintage-frame', style: 'vintage', price: 20, imageUrl: 'https://spb.zvetnoe.ru/upload/catalog/2021/07/3193-BM-1.jpg' },
    { id: 'frame-1', style: 'frame-1', price: 12, imageUrl: 'https://avatars.mds.yandex.net/get-mpic/5232043/img_id4590350511960185259.jpeg/orig' },
    { id: 'frame-2', style: 'frame-2', price: 18, imageUrl: 'https://i.pinimg.com/originals/3b/6a/ed/3b6aede10e30d93886268de33d67039e.jpg' },
    { id: 'frame-3', style: 'frame-3', price: 22, imageUrl: 'https://cdn3.static1-sima-land.com/items/7368718/1/700.jpg' },
    { id: 'frame-4', style: 'frame-4', price: 25, imageUrl: 'https://cdn.pixabay.com/photo/2015/11/01/21/25/frame-1017603_960_720.png' },
    { id: 'frame-5', style: 'frame-5', price: 30, imageUrl: 'https://i.pinimg.com/originals/97/ba/6b/97ba6b013476ae309f2876774e72c89a.jpg' },
    { id: 'frame-6', style: 'frame-6', price: 15, imageUrl: 'https://i.pinimg.com/736x/30/6c/3b/306c3bf05649c0e3a37cfc6781b18332.jpg' },
    { id: 'frame-7', style: 'frame-7', price: 18, imageUrl: 'https://i.pinimg.com/originals/cd/ea/a9/cdeaa9d426daf32c419baafbbfcc57d2.jpg' },
    { id: 'frame-8', style: 'frame-8', price: 22, imageUrl: 'https://i.pinimg.com/originals/14/14/9c/14149c07be148e312a150ed31dc2cfc4.jpg' },
    { id: 'frame-9', style: 'frame-9', price: 25, imageUrl: 'https://i.pinimg.com/736x/48/9f/6f/489f6f328a6f281b04f05eee193c55e5.jpg' },
    { id: 'frame-10', style: 'frame-10', price: 30, imageUrl: 'https://cdn.pixabay.com/photo/2015/11/01/21/25/frame-1017603_960_720.png' }
];

frameStyles.forEach(frame => {
    const frameElement = document.getElementById(frame.id);

    if (!frameElement) {
        console.error(`Frame element with ID "${frame.id}" not found.`);
        return;
    }

    // Set the placeholder first
    frameElement.src = 'https://via.placeholder.com/150';

    // Load the actual image from the URL
    const img = new Image();
    img.onload = () => {
        frameElement.src = frame.imageUrl; // Update src after loading
    };
    img.onerror = () => {
        console.error(`Failed to load image for frame: ${frame.id}`);
    };
    img.src = frame.imageUrl;

    // Add click event listener
    frameElement.addEventListener('click', () => {
        document.querySelectorAll('.frame').forEach(img => img.classList.remove('selected'));
        frameElement.classList.add('selected');
        console.log(`Selected frame: ${frame.id}`); // Debugging log
        updatePrice(); // Trigger price calculation
    });
});


// Update price when size is selected
document.getElementById('size-select').addEventListener('change', updatePrice);

// Update price when custom dimensions are entered
document.getElementById('custom-width').addEventListener('input', updatePrice);
document.getElementById('custom-height').addEventListener('input', updatePrice);

// Update price when a frame is selected
document.querySelectorAll('.frame').forEach(frame => {
    frame.addEventListener('click', () => {
        updatePrice();
    });
});
