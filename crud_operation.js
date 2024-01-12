const dbConnect =require('./conn');



// getData().then((resp)=>{
//     resp.find({name:"Ballu"}).toArray().then((data)=>{
//         console.log(data);
//     });
// });
// console.log(getData());

const main =async ()=>{
    let data =await dbConnect();
    data =await data.find().toArray();
    console.warn(data);
}
main();