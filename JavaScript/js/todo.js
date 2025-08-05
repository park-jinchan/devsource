function init() {
    const input = document.getElementById('todoInput');
    const btnAdd = document.querySelector('#btnAdd');
    const todoList = document.querySelector('#todoList');

    const addToDo = () => {
        //사용자가 입력한 값 얻기
        let todoText = input.value.trim(); //앞뒤의 공백문자 제거
        //유효성 체크
        if (!todoText) {
            alert('할 일을 입력하세요');
            input.focus();
            return;
        }
        //DOM생성
        const liItem = document.createElement('li');
        liItem.setAttribute('class', 'item');
        liItem.innerHTML = `<label>${todoText}
        <input type='checkbox'>
        </label>`;

        const btn = document.createElement('button');
        btn.textContent = '삭 제';
        liItem.append(btn); //버튼 부착
        todoList.append(liItem);
        //append() : 뒤에 붙이기
        //prepend(): 앞에 붙이기
        input.value = '';
        input.focus();

        //삭제 버튼 이벤트 처리
        btn.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        });
    };

    //버튼 이벤트 처리
    btnAdd.addEventListener('click', addToDo);
    input.addEventListener('keydown', (evt) => {
        // console.log(evt.keyCode, evt.key);
        if (evt.key == 'Enter') {
            addToDo();
        }
    });
    todoList.addEventListener('change', (evt) => {
        //alert(evt.target);//input checkbox
        evt.target.parentNode.classList.toggle('complete');
    });
} //init()---------------

document.addEventListener('DOMContentLoaded', init);
