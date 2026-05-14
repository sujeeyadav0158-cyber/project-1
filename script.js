function swapValues() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;

    if (value1 === '' || value2 === '') {
        alert('Please enter both values');
        return;
    }

    // Update result display
    document.getElementById('result1').textContent = value2;
    document.getElementById('result2').textContent = value1;
    document.getElementById('result').classList.add('show');

    // Swap input values
    document.getElementById('value1').value = value2;
    document.getElementById('value2').value = value1;
}

function resetForm() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('result').classList.remove('show');
}

// Allow Enter key to trigger swap
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        swapValues();
    }
});
