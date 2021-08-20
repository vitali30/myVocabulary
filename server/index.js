const app = require('./server');

const port = 5000;
app.listen(port, () => {
    console.log('We are live on ' + port);
}); 
