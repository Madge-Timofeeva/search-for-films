// const searchInput = document.querySelector('#search');
// const divs = document.querySelectorAll('.movie');

// searchInput.addEventListener('keyup', function(event) {
//     const word = event.target.value.toLowerCase();
//     divs.forEach(item => {
//         item.querySelector('p').textContent.toLowerCase().includes(word) ?(item.style.display = 'block') : (item.style.display = 'none');
//     })
// })

const searchInput = document.querySelector('#search');
const divs = document.querySelectorAll('.movie');

searchInput.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();
    
    divs.forEach(item => {
        const paragraphs = item.querySelectorAll('p');
        let showItem = false;

        paragraphs.forEach(paragraph => {
            if (paragraph.textContent.toLowerCase().includes(word)) {
                showItem = true;
            }
        });

        showItem ? (item.style.display = 'block') : (item.style.display = 'none');
    });
});



