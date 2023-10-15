// toggle class active
const navigation = document.querySelector('.navbar');

// ketika hamburger-menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navigation.classList.toggle('active')
};

//klik diluar side bar hambburger-menu hilang
const hambuger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e){
    if(!hambuger.contains(e.target) && !navigation.contains(e.target)){
        navigation.classList.remove('active')
    }
})