// INI jS

// Greetings
let userName = prompt("Please enter your name / Silakan Masukkan nama anda :");

if (userName != null && userName != "") {
    document.getElementById("name-display").innerHTML = `Hi ${userName}, Welcome to my Website ! `;
} else {
    document.getElementById("name-display").innerHTML = "Hi guest, Welcome to my Website ! ";
}


// Favorite City
function showImage(profileClass) {
    let image = document.getElementsByClassName(`icon-profile-${profileClass}`);
    image.style.display = "block";
    let button = document.getElementById(`button-${profileClass}`);
    button.style.display = "none";
}  


//slideshow
const slideshow = document.querySelector('.slide-image');
const images = slideshow.querySelectorAll('img');
let currentImage = 0;

function nextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

setInterval(nextImage, 3000); // gambar berubah setiap 3 detik

images[0].classList.add('active'); // foto pertama ditampilkan


// Massage! validate form
const table = document.getElementById('my-table');
const resultDiv = document.getElementById('result');
const submitButton = document.getElementById('submit');

function validateForm() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const massage = document.getElementById('massage').value;

    if (name === '' || date === '' || massage === '') {
        alert('Harap isi semua kolom pengisian !');
        return false;
    }

    return true;
}
// button = submit result 
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm()) {
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const massage = document.getElementById('massage').value;

    const result = `Name    : ${name}
                <br>Date    : ${date}
                <br>Massage : ${massage}`;
    resultDiv.innerHTML = result;
}
});

