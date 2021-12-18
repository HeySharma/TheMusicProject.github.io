
window.addEventListener('keydown', play)

function play(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`#key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;  
    audio.play();
    key.classList.add('play');
}

function removeTransition(e){
    console.log(e);
    if(e.propertyName !== 'transform') return;
    this.classList.remove('play');
}

const key = document.querySelectorAll('#key');
key.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('click', function(e){
    let audio = document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`);
    let key = document.querySelector(`#key[data-key="${e.target.getAttribute('data-key')}"]`);
    if (!key || !audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play')
    
})