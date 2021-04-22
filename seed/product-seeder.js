const Product = require('../models/product');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png',
    title: 'Resident Evil Village',
    description: 'Resident Evil Village is an upcoming survival horror game developed and published by Capcom.',
    price: 50
    }),

    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/f/f8/ACValhalla.jpg',
        title: 'Assassins Creed Valhalla',
        description: 'Assassins Creed Valhalla is an action role-playing video game developed by Ubisoft Montreal and published by Ubisoft.',
        price: 60
        }),

    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/9/90/Vampire_The_Masquerade_Bloodlines_2_Cover_Art.png',
    title: 'Vampire: The Masquerade – Bloodlines 2',
    description: 'Vampire: The Masquerade – Bloodlines 2 is an upcoming action role-playing video game published by Paradox Interactive.',
    price: 49
    }),

    new Product({
        imagePath: 'https://lh3.googleusercontent.com/Jgup9homi0yJnoIBUGFYRXQoZYtH47wWg9xGUFD4f6lbkb-KSQEsStAJ-9n47kMrlUh9qzuzNMo-98Hw8cptu0TtYQ',
        title: 'The Elder Scrolls Online',
        description: 'The Elder Scrolls Online is a massively multiplayer online role-playing game developed by ZeniMax Online Studios and published by Bethesda Softworks.',
        price: 70
        })

];

var done = 0;

for(i=0;i<products.length;i++){
    products[i].save((err, result) => {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}


