const express = require('express')
const morgan = require('morgan')
const methodOverride =require('method-override')
const storyRoutes = require('./routes/storyRoutes')

const app = express();

let port = 3000
let host = 'localhost';

app.use(methodOverride('_method'));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(morgan('tiny'));
app.use('/stories',storyRoutes);



app.get('/',(req,res)=>{
    res.render('index');
});

app.use((req, res, next)=>{
    let err = new Error('The server cannot relocate' + req.url);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    if(!err.status){
        err.status = 500;
        err.message = ("Internal Server Page");
    }
    res.status(err.status);
    res.render('error',{error: err});
});
app.listen(port,host,()=>{
    console.log('server is running on port ',port);
})
