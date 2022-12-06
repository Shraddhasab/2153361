let cart={
    addItem:function(name){
        console.log("Adding Item "+name+" to cart");

    }, 
    removeItem:function(){
        console.log("removing item from cart");

    }
}
cart.checkout=function(){
    console.log("checking out");
}
cart.addItem("lap");
cart.removeItem();
cart.checkout();
