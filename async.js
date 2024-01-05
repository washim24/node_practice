let a=10;
let b=10;


let waitingData =new Promise((resolve, reject) => {
    setTimeout(()=>{
        ///console.log("Hello washim amjad");
        b=30;
        resolve(30);
    },2000);
});


waitingData.then((data)=>{
    console.log(a+data);
});



