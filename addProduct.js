const form = document.getElementById('addItems')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const sellingPrice = document.getElementById('price').value;
    const productName = document.getElementById('productName').value;
    const obj = {
        price:sellingPrice,
        name:productName
    }
    axios.post('https://crudcrud.com/api/1b3bcaae57554e859c69ef7fed170a65/AppointmentData',obj)
    .then((responce) => {
        showProductOnScreen(responce.data)
    }).catch((err) => {
        console.log(err)
    });
})

// onload 
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/1b3bcaae57554e859c69ef7fed170a65/AppointmentData')
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
                            <button onClick=deleteProduct('${product._id}')>del product</button></li>`;
    parentList.innerHTML += children;
}
// delete product
function deleteProduct(productId){
    
    axios.delete(`https://crudcrud.com/api/1b3bcaae57554e859c69ef7fed170a65/AppointmentData/${productId}`)
    .then(() => {
        removeProductFromScreen(productId);
    }).catch((err) => {
        console.log(err)
    });
 }
 function removeProductFromScreen(productId){
    const parentNode = document.getElementById('item-list');
    const delNode = document.getElementById(productId);
    if(delNode){
        parentNode.removeChild(delNode);
    }

 }
