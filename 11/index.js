document.addEventListener('DOMContentLoaded', function () {
    const musicLib = ["./assets/Mount & Noize Generation - Around The World.mp3", "./assets/S3RL - Feel the Melody (feat. Sara).mp3"];
    const musicName = ['Mount & Noize Generation - Around The World', 'S3RL - Feel the Melody (feat. Sara)'];

    const player = document.querySelector('.player');
    const info = document.querySelector('.info');
    const control = document.querySelector('.controlM');
    const audio = document.querySelector('audio');
    const bar = document.querySelector('.progBar');
    const volume = document.querySelector('.volume');
    const timeCheck = document.querySelector('.time');

    control.children[1].addEventListener('click', event => {
        if (event.target.classList.contains('play')) {
            event.target.classList.remove('play');
            event.target.classList.add('pause');
            audio.play();
        } else if (event.target.classList.contains('pause')) {
            event.target.classList.remove('pause');
            event.target.classList.add('play');
            audio.pause();
        }
    })

    volume.addEventListener('input', function ({ target: { value } }) {
        audio.volume = value / 100;
    });

    bar.addEventListener('click', function handlerMouseMove(event) {
        const x = ((event.pageX - player.offsetLeft) / 100) / (bar.clientWidth / Math.pow(100, 2));
        audio.currentTime = (x / 100) * audio.duration;
    })
    function progress() {
        setInterval(function () {
            bar.max = audio.duration;
            bar.value = audio.currentTime;;
        }, 100)
    };
    progress();

    info.innerHTML = `<h3>${musicName[0]}</h3>`;
    let count = 1;
    function musicChange(audio, control) {
        audio.src = musicLib[count];
        control.children[1].classList.remove('play');
        control.children[1].classList.add('pause');
        audio.play();
        info.innerHTML = `<h3>${musicName[count]}</h3>`;
        count++;
        if (count > musicLib.length - 1) {
            count = 0;
        }
    }
    control.children[2].addEventListener('click', () => {
        musicChange(audio, control);
    })
    control.children[0].addEventListener('click', () => {
        musicChange(audio, control);
    })

    audio.addEventListener('timeupdate', function (event) {
        const { target: { currentTime, duration } } = event;
        timeCheck.children[0].innerHTML = `<h3>${toMinutes(currentTime)} </h3>`;
        timeCheck.children[1].innerHTML = `<h3>${toMinutes(duration)} </h3>`;
        if (audio.currentTime == audio.duration) {
            musicChange(audio, control);
        }
    })
})
function toMinutes(time) {
    let s = Math.round(time);
    let m = 0;
    while (s > 59) {
        if (s > 59) {
            m++;
            s -= 60;
        }
    }
    if (s < 10) {
        s = '0' + s
    }
    return m + ':' + s;
}
