let form = document.getElementById('form')
let submit = document.querySelector('#submit')
let image = document.getElementById('image')
let input = document.getElementById('input')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')



submit.addEventListener('click', () => {
if(input.value === ''){
    alert('it was an error')
}
else{
    form.classList.add('none')
    image.classList.remove('none')
    one.innerHTML = input.value / 8 * 12
    two.innerHTML = input.value / 1.3
    three.innerHTML = input.value / 8 * 12 * 50
    let newValue = input.value / 8 * 12 * 50
    four.innerHTML = newValue / 12 * input.value
} 
})


