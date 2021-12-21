const source = document.querySelector('p#copy');

source.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'даже скопировать нормально не можешь 😕');
    event.preventDefault();
});