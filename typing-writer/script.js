const p = document.querySelector('p')
const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod illo doloremque nesciunt doloribus molestiae dolore aliquam voluptatum fuga earum, assumenda impedit quaerat, voluptates dolorem! Magni libero autem porro commodi fugit?`
let i = 0
const speed = 100;
function type(){
  if(i < text.length ){
     p.innerHTML += text.charAt(i)
    i++
    setTimeout(type, speed)
  }
}
document.addEventListener('DOMContentLoaded', type)