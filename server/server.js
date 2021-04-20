const express = require('express');
const path = require('path');

const app = express();

app.set('port', 3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/eng', require('./routes/eng'));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});