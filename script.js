const btnData = document.querySelector('#btn-edit');
const btnResume = document.querySelector('#btn-resume');
const formData = document.querySelector('.form');

//menyembunyikan form
formData.style.display = "none";

//memunculkan form
btnData.addEventListener('click', function () {
    formData.style.display = 'block';
});

// memunculkan form dengan isi data pada heading
btnData.addEventListener('click', () => {
    form.style.display = 'block';
    dataHeading.style.display = 'none';
});

//ketika klik resume form tersembunyi
btnResume.addEventListener('click', () => {
    form.style.display = 'none';
    dataHeading.style.display = 'block';
})

// Mengambil inputan
const form = document.querySelector('form');
const namaInput = document.querySelector('#nama-input');
const roleInput = document.querySelector('#role-input');
const availabilityInput = document.querySelector('#availability-input');
const umurInput = document.querySelector('#umur-input');
const hobiInput = document.querySelector('#hobi-input');
const alamatInput = document.querySelector('#alamat-input');
const emailInput = document.querySelector('#email-input');

// Mengambil membuat inputan
const namaTeks = document.querySelector('#nama');
const roleTeks = document.querySelector('#role');
const availabilityTeks = document.querySelector('#availability');
const umurTeks = document.querySelector('#umur');
const hobiTeks = document.querySelector('#hobi');
const alamatTeks = document.querySelector('#alamat');
const emailTeks = document.querySelector('#email');


// mengaktifkan tombol sumbit
form.addEventListener('submit', (event) => {
    event.preventDefault(); //-> mencegah halaman direfresh saat form disubmit

    // Data yang di heading berupah sesuai imputan
    namaTeks.textContent = namaInput.value;
    roleTeks.textContent = roleInput.value;
    availabilityTeks.textContent = availabilityInput.value;
    umurTeks.textContent = umurInput.value;
    hobiTeks.textContent = hobiInput.value;
    alamatTeks.textContent = alamatInput.value;
    emailTeks.textContent = emailInput.value;

    // Sembunyikan form setelah di-submit
    form.style.display = 'none';
    dataHeading.style.display = 'block';
});

