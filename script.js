const form = document.getElementById('addForm');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    details = {
        name: name,
        email:email,
        phone:phone
    }
    // let details_serialized = JSON.stringify(details);
    // localStorage.setItem(email,details_serialized);
    axios.post('https://crudcrud.com/api/1b3bcaae57554e859c69ef7fed170a65/AppointmentData',details)
    .then((result) => {
        console.log(result)
        showUser(result.data)
    }).catch((err) => {
        console.log(err)
    });
    
    // axios.get('https://crudcrud.com/api/1b3bcaae57554e859c69ef7fed170a65/AppointmentData')
    // .then((responce) => {
    //     showUser(responce.data)
    // }).catch((err) => {
    //     console.log(err)

    // });
    // li.appendChild(document.createTextNode(name+"-"+email+"-"+phone));
    // list.appendChild(li);
    
})

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/1b3bcaae57554e859c69ef7fed170a65/AppointmentData')
    .then((result) => {
        const objKey = Object.keys(result.data);
        // const obj_deserialized = JSON.stringify(result.data);
        for(let i=0; i<objKey.length; i++){
            
            showUser(result.data[i]);
        }
    }).catch((err) => {
        console.log(err)
    });
})
 function showUser(user){
    document.getElementById('fullname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    const parentNode = document.getElementById('listofitems');
    const childHTMl = `<li id=${user._id}>${user.name}-${user.email}-${user.phone}
                      <button onClick=deleteUser('${user._id}')>Del</button><button onClick=editUser('${user.name}','${user.email}','${user.phone}','${user._id}')>edit</button></li>`;
    parentNode.innerHTML += childHTMl
 }

 function deleteUser(userId){
    
    axios.delete(`https://crudcrud.com/api/1b3bcaae57554e859c69ef7fed170a65/AppointmentData/${userId}`)
    .then(() => {
        removeUserFromScreen(userId);
    }).catch((err) => {
        console.log(err)
    });
 }
 function removeUserFromScreen(userId){
    const parentNode = document.getElementById('listofitems');
    const delNode = document.getElementById(userId);
    if(delNode){
        parentNode.removeChild(delNode);
    }

 }
 function editUser(name,email,phone,userId){
    document.getElementById('fullname').value = name;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
   deleteUser(userId);
 }