function calculateAge() {
    const dobInput = document.querySelector('input[type="date"]');
    const dob = new Date(dobInput.value);
    const today = new Date();
    
    if (!dobInput.value) {
        alert("Please enter your date of birth.");
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').value = age;
}