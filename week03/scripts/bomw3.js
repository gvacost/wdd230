const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    if (input.value != ''){
    
    const li = document.createElement('li');
    const deleteButton = document.createElement('button')
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    })

    input.focus();
    input.value = '';}
    else{
        window.alert("Please enter a book and a chapter")
    }
});


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

  button.addEventListener('click', () => {
    if (input.value != ''){
    displayList(input.value)
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();}
});

function displayList(item){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button')
        li.textContent = item;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        })
};

function setChapterList (){
    localStorage.setItem('bomList', JSON.stringify(chaptersArray))
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('bomList'));
  }

 function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
