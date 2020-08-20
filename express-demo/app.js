
const Joi = require('joi');
const express = require('express');

const app = express();
app.use(express.json());

const coursesarray = [
    {id:1, name:'physics'},
    {id:2, name:'maths'},
    {id:3, name:'chem'}
];
app.get('/', (req, res) => {

    res.send("hello world!!!!");

});
app.get('/api/courses', (req, res) => {

    //res.send([1,2,3]);
    res.send(coursesarray);

});
// app.get('/api/courses/:id', (req, res) =>
// {
//     //res.send(req.params);
//     res.send(req.query);

// });
app.get('/api/courses/:id', (req,res) =>{

    const c = coursesarray.find(element => element.id === parseInt(req.params.id));
        if(!c) res.status(404).send(" criteria not found");
        res.send(c);
     


});

//------------------------------------------------------------------------------------------------
app.post('/api/courses', (req,res) => {
    //validate
const {error} = validateCourse(req.body);
//if not validate error
if(error) return res.status(404).send(error.details[0].message);
    


  
const course = {
id: coursesarray.length + 1,
name: req.body.name
};

coursesarray.push(course);
res.send(course);

});
//---------------------------------------------------------------------------------------------
app.put('/api/courses/:id', (req,res) =>{
//look upr for the course
const c = coursesarray.find(element => element.id === parseInt(req.params.id));
if(!c) return res.status(404).send(" criteria not found");
//res.send(c);
//console.log(c);

//validate
const {error} = validateCourse(req.body);

//if not validate error
   if(error)   return    res.status(404).send(error.details[0].message);
    
   
//else update and return the updated infp
c.name = req.body.name;
//console.log(c);
res.send(c);

});
//-------------------------------------------------------------------------------------------
app.delete('/api/courses/:id', (req,res) =>{
    //look upr for the course
    const c = coursesarray.find(element => element.id === parseInt(req.params.id));
    if(!c) return res.status(404).send(" criteria not found");

    const index = coursesarray.indexOf(c);
    //console.log(index);
    coursesarray.splice(index, 1);
    res.send(c);

});

//-------------------------------------------------------------------------------------------
function validateCourse(course){
    const schema =  Joi.object({
        name: Joi.string().min(3).required()
    
    });
    return schema.validate(course);

}

//-----------------------------------------------------------------------------------------



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening to port: ${port}`);
})
