const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const adressInput = document.getElementById("adress");
    const phoneInput = document.getElementById("phone");
    const selectPizza = document.getElementById("selectPizza");
    const selectSize = document.getElementById("selectSize");

    const formData = {
        name: nameInput.value,
        adress: adressInput.value,
        phone: phoneInput.value,
        selectPizza: selectPizza.value,
        selectSize: selectSize.value
    }

    const errors = {
        name: false,
        adress: false,
        phone: false,
        selectPizza: false,
        selectSize: false
    }

    const nameError = document.getElementById('nameError');
    const adressError = document.getElementById('adressError');
    const phoneError = document.getElementById('phoneError');
    const selectPizzaError = document.getElementById('selectPizzaError');
    const selectSizeError = document.getElementById('selectSizeError');

    nameError.style.opacity = '0';
    adressError.style.opacity = '0';
    phoneError.style.opacity = '0';
    selectPizzaError.style.opacity = '0';
    selectSizeError.style.opacity = '0';

    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const nameRegex = /^[a-zA-Z ]+$/;

    if (!formData.name || !nameRegex.test(formData.name)) {
        errors.name = true;
        nameError.style.opacity = '1';
    }
    if (!formData.adress) {
        errors.adress = true;
        adressError.style.opacity = '1';
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
        errors.phone = true;
        phoneError.style.opacity = '1';
    }
    if (!formData.selectPizza) {
        errors.selectPizza = true;
        selectPizzaError.style.opacity = '1';
    }
    if (!formData.selectSize) {
        errors.selectSize = true;
        selectSizeError.style.opacity = '1';
    }

    if (!Object.values(errors).includes(true)) {
        console.log(formData)
    }
    
    contactForm.reset();

})

  

