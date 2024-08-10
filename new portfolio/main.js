document.getElementById('cvButton').addEventListener('click', function() {
    const cvOptions = document.getElementById('cvOptions');
    if (cvOptions.classList.contains('hidden')) {
        cvOptions.classList.remove('hidden');
    } else {
        cvOptions.classList.add('hidden');
    }
});