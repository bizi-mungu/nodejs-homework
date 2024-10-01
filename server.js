const express = require ('express');
const { hydrate } = require('vue');
const PORT =3000;
const app = express (); 
//middleware to parse JSON requests 
app.use(express.json()); 
//Define a simple route 
app.get ('/',( req, res) => {
    res.send('Hello ,world! welcome to my Express server.');
});
//Router for /about
app.get ('/about', (req,res) => {
    res.send ('This is the About page');
});
//Route for /contact
app.get('/contact ', (req, res0) =>{
   res.send('This is the contact page')
});
  
//Route for /JSON
app.get('/api/data', (req, res) => {
    res.json({message:'This is some JSON data!',success:true 
});
});

//start the server 
app.listen (PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
    
});  
