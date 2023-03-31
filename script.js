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
    }).catch((err) => {
        console.log(err)
    });
    const list = document.getElementById('listofitems');
    const li = document.createElement('li');
    axios.get('https://crudcrud.com/api/29f947bfe01e49d69392badd067297c3/AppointmentApp')
    .then((responce) => {
        console.log(responce.data.name)
    }).catch((err) => {
        console.log(err)

    });
    // li.appendChild(document.createTextNode(name+"-"+email+"-"+phone));
    // list.appendChild(li);
    
})