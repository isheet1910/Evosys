$(function() {
    const products=[
        {"pid":"1","pname":"pepsi","unit_price":"33"},
        {"pid":"2","pname":"pepsi","unit_price":"33"},
        {"pid":"3","pname":"pepsi","unit_price":"33"},
        {"pid":"4","pname":"pepsi","unit_price":"33"},
        {"pid":"5","pname":"pepsi","unit_price":"33"}];

    $("#addToLocal").on("click", () => {
        const newProduct={
            "pid":$("#pid").val(),
            "pname":$("#pname").val(),
            "unit_price":$("#unit_price").val()
        };
        products.push(newProduct);
        if(typeof(Storage)!==undefined){
            localStorage.setItem("products",JSON.stringify(products));       
        }
        console.log("Added");
    });

    $("#getFromLocal").on('click', () => {
        console.log("Data from Local storage");
        $("#local_products").empty();
        if(typeof(Storage)!==undefined){
            const productList=JSON.parse(localStorage.getItem("products"));
             console.log(productList);
             productList.forEach(element => {
                 const li=$("<li></li>").text(element.pname);
                 $("#local_products").append(li);
             });
        }
        else{
         alert("Storage not supported!");
        }            
    });

    $("#addToSession").on("click",()=>{
        const newProduct={
            "pid":$("#pid").val(),
            "pname":$("#pname").val(),
            "unit_price":$("#unit_price").val()
        };
       products.push(newProduct);
       if(typeof(Storage)!==undefined){
           sessionStorage.setItem("products",JSON.stringify(products));
       }
    });

    $("#getFromSession").on('click',()=>{
        console.log("Load data from local storage");
        $("#session_products").empty();    
        if(typeof(Storage)!==undefined){
            const productList=JSON.parse(sessionStorage.getItem("products"));
            console.log(productList);
            productList.forEach(element => {
                const li=$("<li></li>").text(element.pname);
                $("#session_products").append(li);
            });
        }
        else{
            alert("Storage not supported!");
        }           
    });
        
})