const ul = document.querySelector('.items');
//ul.remove();

//ul.lastElementChild.remove();

/*
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'bahubali';
ul.lastElementChild.innerHTML = '<h1>akshay</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';


const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>';
});

*/


const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}