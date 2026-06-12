// Array com GIFs de natureza (pode substituir pelos seus links)
const gifs = [
    'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
    'https://media.giphy.com/media/3o6ZsWllv1aVqxFh7K/giphy.gif',
    'https://media.giphy.com/media/26BRzozg4TCBXv6QU/giphy.gif',
    'https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif'
];

// Seleciona o container de GIFs
const gifContainer = document.getElementById('gifContainer');

// Adiciona os GIFs dinamicamente
gifs.forEach(gif => {
    const img = document.createElement('img');
    img.src = gif;
    img.alt = "GIF de natureza";
    gifContainer.appendChild(img);
});
