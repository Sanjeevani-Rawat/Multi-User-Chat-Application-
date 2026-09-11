// this is javascript file

const socket = io('http://localhost:8000');

const form = document.getElementById('send-container')
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
var audio = new Audio('pop-402323.mp3')

const append = (message, position) => {
    const messageElement = document.createElement('div')
    messageElement.innerHTML = message;
    messageElement.classList.add('message', position);
    // messageElement.classList.add(position);
    messageContainer.append(messageElement);
    // ##########################chicb##########
    messageContainer.scrollTop = messageContainer.scrollHeight;
    if(position == 'left'){
        audio.play();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if(message==="") return;
    append(`<strong>You:</strong> ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
})

const name = prompt("Enter your name to join -")
socket.emit('new-user-joined', name);

// ####################################
append(`You joined the chat.`, 'center');

// ####################################
socket.on('user-joined', name => { 
    append(`${name} joined the chat.`,'center')
})

socket.on('receive', data => {
    append(`<strong>${data.name}:</strong> ${data.message}`,'left')
})

// ####################################
socket.on('left', name => {
    append(`${name} left the chat.`,'center')
})

