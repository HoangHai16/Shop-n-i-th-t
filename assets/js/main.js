const searchBtn = document.querySelector('.header-main__search-icon');
const searchHeader = document.querySelector('.header-search');

var isClick = true;
searchBtn.addEventListener('click', function(){
    if(isClick){
        searchHeader.style.display = 'flex';
        isClick = false;
    }else{
        searchHeader.style.display = 'none';
        isClick = true;
    }
})
