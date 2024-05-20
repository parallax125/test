const map = document.getElementById('world-map');
let scale = 1;
const zoomFactor = 0.1;

map.addEventListener('wheel', function(event) {
    event.preventDefault();

    if (event.deltaY < 0) {
        // Zoom in
        scale += zoomFactor;
    } else {
        // Zoom out
        scale -= zoomFactor;
        if (scale < 1) {
            scale = 1; // Не позволяем масштабироваться меньше исходного размера
        }
    }

    map.style.transform = `scale(${scale})`;
});

let isDragging;
let startX, startY;
let currentX, currentY;

map.addEventListener('mousedown', function(event) {
    if (!isDragging) {
        isDragging = true;
        startX = event.clientX;
        startY = currentY - map.offsetTop;
        map.style.cursor = 'grabbing';
        console.log('начало X', startX, '= event.clientX ', event.clientX, '-', 'map.offsetLeft', map.offsetLeft, '\n', 'начало Y', startY, '= event.clientY ', event.clientY, '-', 'map.offsetTop', map.offsetTop)
        if (isDragging == true)
        console.log('схватил');
    }
    
    
});

map.addEventListener('dragstart', function(event) {
    event.preventDefault();
});



map.addEventListener('mouseup', function() {
    isDragging = false;
    map.style.cursor = 'grab';
    if (isDragging == false)
    console.log('отпустил');
});

map.addEventListener('mouseleave', function() {
    if (isDragging = false)
    map.style.cursor = 'grab';
    if (isDragging == false)
    console.log('отпустил');

});
let x, y;

map.addEventListener('mousemove', function(event) {
    if (isDragging) {
        currentX = event.clientX - map.offsetLeft; // Обновляем текущее положение по X
        currentY = event.clientY - map.offsetTop;
        x = currentX - startX;
        y = currentY - startY;
        console.log('движение', x, y, currentX, currentY);
        map.style.transform = `scale(${scale}) translate(${x}px, ${y}px)`;
        if (isDragging == false)
        console.log('отпустил');
    }
});
