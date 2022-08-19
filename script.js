const burger = document.querySelector('.burger');
const ul = document.querySelector('ul');
const links = document.querySelectorAll('a');
const push1 = document.querySelector('.p-1');
const push2 = document.querySelector('.p-2');
const push3 = document.querySelector('.p-3');

burger.addEventListener('click', () => {
    ul.classList.toggle('slide');
});

burger.addEventListener('click', () => {
    push1.classList.toggle('push-1');
    push2.classList.toggle('push-2');
    push3.classList.toggle('push-3');
});


links.forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            return;
        } else {
            links.forEach(el => {
                el.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });
});

const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}