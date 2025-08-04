// js/todo.js

window.onload = function () {
    const btnAdd = document.getElementById('btnAdd');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    btnAdd.onclick = function () {
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            alert('할 일을 입력하세요!');
            return;
        }

        // 새로운 li 요소 생성
        const li = document.createElement('li');
        li.className = 'item';

        const label = document.createElement('label');
        label.innerText = todoText;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // ✅ 체크 시 취소선 클래스 추가
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                label.classList.add('checked');
            } else {
                label.classList.remove('checked');
            }
        });

        label.appendChild(checkbox);

        const delBtn = document.createElement('button');
        delBtn.innerText = '삭 제';
        delBtn.onclick = function () {
            todoList.removeChild(li);
        };

        li.appendChild(label);
        li.appendChild(delBtn);
        todoList.appendChild(li);

        // 입력창 초기화
        todoInput.value = '';
    };

    // 기존 항목들에도 삭제 및 체크 이벤트 추가
    const existingItems = document.querySelectorAll('#todoList .item');
    existingItems.forEach((item) => {
        const button = item.querySelector('button');
        const checkbox = item.querySelector('input[type="checkbox"]');
        const label = item.querySelector('label');

        button.onclick = function () {
            todoList.removeChild(item);
        };

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                label.classList.add('checked');
            } else {
                label.classList.remove('checked');
            }
        });
    });
};
