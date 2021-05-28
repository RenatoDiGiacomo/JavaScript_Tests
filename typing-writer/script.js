let text1 = 'Renato'
const p = document.querySelector('p')
const text = `Lorem ipsum ${text1}, dolor sit amet consectetur adipisicing elit. Quod illo doloremque nesciunt doloribus molestiae dolore aliquam voluptatum fuga earum, assumenda impedit quaerat, voluptates dolorem! Magni libero autem porro commodi fugit?`
let i = 0

function type(){
  if(i < text.length ){
    p.append(text.charAt(i))
    i++
    setTimeout(type, 15)
  }
}
document.addEventListener('DOMContentLoaded', type)