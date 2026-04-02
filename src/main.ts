import './global.css';
import { Dropdown, type DropdownInterface } from 'flowbite';

const targetEl = document.getElementById('dropdown');
const triggerEl = document.getElementById('dropdownDefaultButton');

const dropdown: DropdownInterface = new Dropdown(targetEl, triggerEl);

console.log(dropdown._targetEl);
console.log(dropdown._triggerEl);

dropdown._triggerEl?.addEventListener('click', function () {
  console.log(dropdown.isVisible());
});

