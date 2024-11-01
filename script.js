    let container= document.createElement("div");
    container.className="container"
    // function printDate(){
    //     let date =new Date();
    //     console.log(date)
    //     let date_2=new Date(2018,11,24,5,14 ,25)
    //     console.log(date_2);

    // }


    // printDate()
    let hrsDiv=document.createElement("div");
    let minsDiv=document.createElement("div");
    let secDiv=document.createElement("div");
    container.append(hrsDiv,minsDiv,secDiv);
    document.body.appendChild(container);
   

    function anotherDate(){
        setInterval(()=>{
            let date_3=new Date()
             hrsDiv.innerText= date_3.getHours()<10 ? "0"+date_3.getHours():date_3.getHours();
             minsDiv.innerText=date_3.getMinutes() <10 ? "0"+date_3.getMinutes(): date_3.getMinutes();
             secDiv.innerText=date_3.getSeconds()<10? "0"+date_3.getSeconds():date_3.getSeconds();
             

        }, 1000 )
    }

anotherDate();





// anotherDate();
// h =date_3.getHours()<10 ? "0"+date_3.getHours():date_3.getHours();
//m=date_3.getMinutes() <10 ? "0"+date_3.getMinutes(): date_3.getMinutes();
//s=date_3.getSeconds()<10? "0"+date_3.getSeconds():date_3.getSeconds();
//container.innerHTML = `<h1>${h} : ${m} : ${s}</h1>

// function anotherDate(){
//     setInterval(()=>{
//         let date_3=new Date()
// h =date_3.getHours()<10 ? "0"+date_3.getHours():date_3.getHours();
// m=date_3.getMinutes() <10 ? "0"+date_3.getMinutes(): date_3.getMinutes();
// s=date_3.getSeconds()<10? "0"+date_3.getSeconds():date_3.getSeconds();
// container.innerHTML = `<h1>${h} : ${m} : ${s}</h1>`
//     }, 1000 )
// }



/*

name= "dinath"
age =23


console.log("my name is "+name+". my age is "+age)
console.log(`my name is ${name} my age is ${age}`)


*/