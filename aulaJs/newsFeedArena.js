const topicsIcon = document.querySelector('.topics');
const topicsContent = document.querySelector('.topics-content');
const topicsList = document.querySelector('.topics-list')

function dropDownMenu(){
    topicsIcon.addEventListener('click', (event) => {
        if(event){
            topicsList.classList.remove('topics-list');
            topicsList.classList.add('topics-list-open');
        }
    });
}

function carrosselImages(){
    
};

dropDownMenu();

