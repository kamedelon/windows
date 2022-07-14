const btn = document.querySelector('.btn')
const w10popup = document.querySelector('.firstPopup')
const body = document.querySelector('body')
const dimisBtn = document.querySelector('#d')
const acceptBtn = document.querySelector('#a')
const gifSec = document.querySelector('.gifs')
const h1 = document.querySelector('h1')


const showPopup = () => {
    setTimeout(() => {
        w10popup.classList.toggle('showPopup')
        body.style.cursor = 'wait'
        btn.style.cursor = 'wait'

        const audio = document.getElementById("audio");
        audio.play();
    }, 200);

    setTimeout(() => {
        window.open('https://www.youtube.com/watch?v=BT9h5ifR1tY')

    }, 10000)

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

    setTimeout(()=> {
        const screamer = document.querySelector('video')
        screamer.autoplay = "true"
        screamer.loop = "true"
        screamer.style.display = "flex"

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

const openWindow2= () => {
    let randomNum = (Math.random() + 1).toString(36).substring(7);
    let newWindow2
    setTimeout(() => {
        setInterval(() => {
            newWindow2 = window.open("https://Google.com", "JDDD KURWE", "bottom=0, right=0, width=400,height=400");
            newWindow2.document.write(`<body><h1>JD</h1> ${randomNum} <mark> JD </mark><strong> JD </strong>
            
            <script>
        
            </script>

            </body>`)

        }, 400)
    }, 3290)
}



const multipleJD = () => {

}

multipleJD()

const fadeout = () => {
    const loaderWrapper = document.querySelector('.wrapper')

    setTimeout(() => {
        loaderWrapper.classList.add('fade')
    }, 1000)
}

window.onbeforeunload = function (e) {
    return 'Dialog text here.';
};

window.onbeforeunload = function (e) {
    return 'Dialog text here.';
};

window.onbeforeunload = function (e) {
    return 'Dialog text here.';
};

window.addEventListener('load', fadeout)
btn.addEventListener('click', openWindow)
btn.addEventListener('click', openWindow2)
btn.addEventListener('click', showPopup)
btn.addEventListener('click', download)


