const form = document.getElementById('addItems')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const sellingPrice = document.getElementById('price').value;
    
    const productName = document.getElementById('productName').value;
    const obj = {
        price:sellingPrice,
        name:productName
    }
    axios.post('https://crudcrud.com/api/6219baae77fd417a82d278e592aefafc/AppointmentData',obj)
    .then((responce) => {
        showProductOnScreen(responce.data)
    }).catch((err) => {
        console.log(err)
    });
})

// onload 
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/6219baae77fd417a82d278e592aefafc/AppointmentData')
    .then((responce) => {
        const objKey = Object.keys(responce.data);
    
        for(let i=0; i<objKey.length; i++){
            
            showProductOnScreen(responce.data[i]);
            
        }
        }).catch((err) => {
        console.log(err)
    });
})
// function of showing product on screen

function showProductOnScreen(product){
    
    const parentList = document.getElementById('item-list');
    const children = `<li style="color:black;" id='${product._id}'>${product.price}-${product.name}
                            <button onClick="deleteProduct('${product._id}'); delPrice('${product.price}')">del product</button></li>`;
    parentList.innerHTML += children;
    addPrice(Number(product.price))
}
// add prices
let sum = 0;
let div = document.getElementById('addPrice');
function addPrice(num){
    sum += num;
    div.innerHTML = `Net worth is ${sum}Rs`
}

// delete Price
function delPrice(pr){
     sum = sum - pr;
    div.innerHTML = `Net worth is ${sum}Rs`
}
// delete product
function deleteProduct(productId){
    
    axios.delete(`https://crudcrud.com/api/6219baae77fd417a82d278e592aefafc/AppointmentData/${productId}`)
    .then(() => {
        removeProductFromScreen(productId);
    }).catch((err) => {
        console.log(err)
    });
 }
 // remove product from screen
 function removeProductFromScreen(productId){
    const parentNode = document.getElementById('item-list');
    const delNode = document.getElementById(productId);
    if(delNode){
        parentNode.removeChild(delNode);
    }

 }

 
