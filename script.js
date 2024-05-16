const listTexts = document.querySelectorAll('.list-text')
const deleteIcon = document.querySelector('.deleteBarIcon')
const createIcon = document.querySelector('.createBarIcon')
const navBar = document.querySelector('.panal-si-na')



document.addEventListener('click', (e) => {
   if(e.target.className === 'fa-solid fa-bars'){
   createIcon.style.display = 'none'
     navBar.style.display = "block"
     deleteIcon.style.display = "block";
  } else if(e.target.className === 'fa-solid fa-xmark'){
   deleteIcon.style.display = 'none'
   navBar.style.display = 'none'
     createIcon.style.display = "block";     
  }
})

function removeClass() {
  for (const item of listTexts) {
    item.classList.remove('active-link')
  }
}

for (const item of listTexts) {
  item.addEventListener('click', (e) => {
    removeClass();
    e.currentTarget.classList.add('active-link');
  });
}

