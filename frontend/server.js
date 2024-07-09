const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/outfit-items', (req, res) => {
    const outfitItems = [
        { id: 1, image: 'myntra-fashion-show\src\assets\outfit1-top.png', title: 'Top', price: '$20', discount: '10%' },
        { id: 2, image: 'image2.jpg', title: 'Shoes', price: '$50', discount: '20%' },
        { id: 3, image: 'image3.jpg', title: 'Earrings', price: '$15', discount: '5%' },
        { id: 4, image: 'image4.jpg', title: 'Skirt', price: '$30', discount: '15%' }
    ];
    res.json(outfitItems);
});

app.get('/api/fashion-show-video', (req, res) => {
    const videoData = { url: 'path/to/fashion-show-video.mp4' };
    res.json(videoData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
