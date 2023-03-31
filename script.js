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
    axios.post('https://crudcrud.com/api/29f947bfe01e49d69392badd067297c3/AppointmentApp',details)
    .then((result) => {
        console.log(result)
        showUser(result.data)
    }).catch((err) => {
        console.log(err)
    });
    
    // axios.get('https://crudcrud.com/api/29f947bfe01e49d69392badd067297c3/AppointmentApp')
    // .then((responce) => {
    //     showUser(responce.data)
    // }).catch((err) => {
    //     console.log(err)

    // });
    // li.appendChild(document.createTextNode(name+"-"+email+"-"+phone));
    // list.appendChild(li);
    
})

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/29f947bfe01e49d69392badd067297c3/AppointmentApp')
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
 function showUser(data){
    const list = document.getElementById('listofitems');
    const del = document.createElement('button');
    del.appendChild(document.createTextNode('del'));
    const edit = document.createElement('button');
    edit.appendChild(document.createTextNode('edit'));
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(data.name+"-"+data.email+"-"+data.phone));
    list.appendChild(li);
    list.appendChild(edit);
    list.appendChild(del);

 }