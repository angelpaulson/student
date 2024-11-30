const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://nandanamanoj:nandana@cluster0.crdok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{ 
    console.log('Connected!')
})
.catch((err)=>{
    console.log(err)
})