
document.querySelector('.header-burger').onclick = function() {
    document.querySelector('.header-burger').classList.toggle("active-burger");
    document.querySelector('.header-sm-menu').classList.toggle("active-burger");
};
const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animSmart = 5;

            let animItemPoint = window.innerHeight - animItemHeight / animSmart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animSmart
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }
        }
    }
    animOnScroll()
}