document.getElementById('cgpaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstSem = parseFloat(document.getElementById('firstSem').value);
    const secondSem = parseFloat(document.getElementById('secondSem').value);
    
    if (isNaN(firstSem) || isNaN(secondSem)) {
        alert('Please enter valid numbers for SGPA.');
        return;
    }

    const cgpa = (firstSem + secondSem) / 2;
    
    document.getElementById('cgpaResult').innerText = cgpa.toFixed(2);
});
