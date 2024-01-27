const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static('public'));



// Home route
app.get('/', (req, res) => {
    res.render('home', { pawprint: '18202828' });
});
app.get('/', (req, res) => {
    console.log("Home route accessed");
    res.render('home', { pawprint: '18202828' });
});

// About route
app.get('/about', (req, res) => {
    res.render('about', { name: 'Aaron Guo' });
});

// Movies route
app.get('/movies', (req, res) => {
    const movies = [
        {
            title: 'The Shawshank Redemption',
            stars: ['Tim Robbins', 'Morgan Freeman'],
            director: 'Frank Darabont'
        },
        {
            title: 'The Godfather',
            stars: ['Marlon Brando', 'Al Pacino'],
            director: 'Francis Ford Coppola'
        },
        {
            title: 'Parasite',
            stars: [' Lee Sun-kyun', 'Choi Woo-shik'],
            director: 'Bong Joon-ho'
        },
        {
            title: 'Interstellar',
            stars: ['Matthew McConaughey', 'Jessica Chastain'],
            director: 'Christopher Nolan'
        },
        {
            title: 'The Dark Knight Rises',
            stars: ['Christian Bale', 'Anne Hathaway'],
            director: 'Christopher Nolan'
        },

        { 
            title: 'Fight Club',
            stars: ['Brad Pitt', 'Edward Norton'],
            director: 'David Fincher' },


        { 
            title: 'Kung Fu Panda',
            stars: ['Jack Black', 'Dustin Hoffman'],
            director: 'Mark Osborne, John Stevenson' },
        {
            title: 'Harry Potter and the Goblet of Fire',
            stars: ['Daniel Radcliffe', 'Emma Watson'],
            director: 'Mike Newell'
        },

        {
            title: 'Everything Everywhere All at Once',
            stars: ['Michelle Yeoh', 'Stephanie Hsu', 'Ke Huy Quan'],
            director: 'Daniel Kwan, Daniel Scheinert'
        },
        {
            title: 'Crazy Rich Asians',
            stars: ['Constance Wu', 'Henry Golding', 'Michelle Yeoh'],
            director: 'Jon M. Chu'
        },
        {
            title: 'Hacksaw Ridge',
            stars: ['Andrew Garfield', 'Sam Worthington', 'Luke Bracey'],
            director: 'Mel Gibson'
        }
        // ... (more movie objects can be added here)


        // Add more movie objects here
    ];

    res.render('movie', { movies: movies });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${3000}`);
});
