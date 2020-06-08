
let boxClass = document.querySelector('.drag-and-drop');
let getMehod = document.querySelector('.small-box');

function dragAndDrop(sellector) {
    sellector.onmousedown = function(event) { // (1) отследить нажатие

        let shiftX = event.clientX - sellector.getBoundingClientRect().left;
        let shiftY = event.clientY - sellector.getBoundingClientRect().top;
    
        // (2) подготовить к перемещению:
        // разместить поверх остального содержимого и в абсолютных координатах
        sellector.style.position = 'absolute';
        sellector.style.zIndex = 1000;
        // переместим в body, чтобы мяч был точно не внутри position:relative
        document.body.append(sellector);
        // и установим абсолютно спозиционированный мяч под курсор
      
        moveAt(event.pageX, event.pageY);
      
        // передвинуть мяч под координаты курсора
        // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(pageX, pageY) {
            sellector.style.left = pageX - shiftX + 'px';
            sellector.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // (3) перемещать по экрану
        document.addEventListener('mousemove', onMouseMove);
      
        // (4) положить мяч, удалить более ненужные обработчики событий
        sellector.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          sellector.onmouseup = null;
        };
      
    };

    sellector.ondragstart = function() {
        return false;
    };
}

dragAndDrop(boxClass);
dragAndDrop(getMehod);

