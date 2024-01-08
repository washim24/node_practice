const express = require('express');
 const path = require('path');

 const app=express();
 const publicPath=path.join(__dirname,'public');
//  console.log(publicPath);
// app.use(express.static(publicPath));


app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

// app.get('',(rq,res)=>{
//     res.send('Hello ,This page is home');
// });

// app.get('/about',(req,res)=>{
//     res.send(`
//         <input type="text" name="student_name" id="student_name" placeholder="Please enter name"  value="${req.query.name}" >
//         <button>Save</button>
//     `);
// }); //----previous-----/
// app.get('/about',(req,res)=>{
//     res.send({
//         name:'Rodrigues Paul',
//         email:'rodrigues@gmail.com',
//     });
// });
// app.get('/help',(rq,res)=>{
//     res.send('Hello ,This is help page');
// });

app.listen(4500);
