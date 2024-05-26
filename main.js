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
list.insertAdjacentHTML('afterbegin', items);
list.style.color = 'blue';
list.style.border = ' 1px solid black';
list.style.display = "flex";
list.style.justifyContent = "space-between";
//5
let tableLab = document.querySelector('.tableLab');
let tableF =
    `
    <table class="table-lab" border="2px solid ">
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
tableLab.insertAdjacentHTML('afterbegin', tableF);

//lab2
let margin = 0;
let cube = document.querySelector(".cube");
let moveCube = setInterval(move, 1000);

function move() {
    let randomLeft = Math.random() * 90; 
    let randomTop = Math.random() * 90;  
    cube.style.marginLeft = randomLeft + "vw";
    cube.style.marginTop = randomTop + "vh";  
    // let colors = Math.random () * 16;
    cube.style.backgroundColor ="rgb(1" + Math.floor(Math.random()*100) + ',1' +Math.floor(Math.random()*100) + ",1" + Math.floor(Math.random()*100)+ ")" ;
rgb(32,32,34)
}
move();

