const express = require ('express');
const app = express();
const path = require ('path');
app.use(express.static('public'));


/* heroku */

app.listen(process.env.PORT || 3030, function(){
    console.log("servidor corriendo en el purto 3030");
})

/* app.listen('3030',()=>
 console.log('Servidor corriendo en puerto 3030'));

 */
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'));
});