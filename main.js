//1
let myName = document.getElementsByClassName("myName")[0];
myName.style.color = 'white';
myName.style.backgroundColor = 'black';
//2
let myID = document.getElementById('myID');
myID.classList.add('pStyle');
myID.style.color = "white";
myID.style.backgroundColor = 'black';

//3
let myimg = document.getElementsByTagName("img")[0];
myimg.src = 'user-plus.png';
//4 
let list = document.querySelector('.list');
let items = `
    <li>Fatimah</li>
    <li>Ali</li>
    <li>201910051</li>
`;
list.insertAdjacentHTML('beforeend', items);
list.style.color = 'blue';
list.style.border = ' 1px solid black';
//5
let tableLab = document.querySelector('.tableLab');
let tableF =
    `
    <table class="table-lab">
    <tr>
      <td>name</td>
      <td>age</td>
      <td>id</td>
    </tr>
    <tr>
      <td>fatimah</td>
      <td>24</td>
      <td>201910051</td>
    </tr>
  </table>
  `;
tableLab.insertAdjacentHTML('beforeend', tableF);
