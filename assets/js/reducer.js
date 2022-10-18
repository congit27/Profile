const init = {
    myImg: './assets/img/me.png',
    experiences: [
        {
            jobImage: './assets/img/html-5.png',
            jobName: 'HTML5 & CSS3',
            jobDescription: 'Lorem ispum, or lipum as it is sometimes known, is dummy text used in laying out print, graphic or web design'
        },
        {
            jobImage: './assets/img/javascript.png',
            jobName: 'JAVASCRIPT',
            jobDescription: 'Lorem ispum, or lipum as it is sometimes known, is dummy text used in laying out print, graphic or web design'
        },
        {
            jobImage: './assets/img/java.png',
            jobName: 'JAVA',
            jobDescription: 'Lorem ispum, or lipum as it is sometimes known, is dummy text used in laying out print, graphic or web design'
        }
    ],
    memoryAlbum: [
        './assets/img/img1.jpg',
        './assets/img/img2.jpg',
        './assets/img/img3.jpg',
        './assets/img/img4.jpg',
        './assets/img/img5.jpg',
        './assets/img/img6.jpg',
        './assets/img/img7.jpg',
        './assets/img/img8.jpg',
    ],
    recentProjectSliders: [
        {
            src: './assets/img/covid19Landingpage.png',
            isMainSlider: false
        },
        {
            src: './assets/img/musicPlayer.png',
            isMainSlider: false
        },
        {
            src: './assets/img/profile.png',
            isMainSlider: true
        },
        {
            src: './assets/img/winterHoliday.png',
            isMainSlider: false
        },
        {
            src: './assets/img/todosAppMobile.png',
            isMainSlider: false
        }
    ],
    runAnimationSlide: null,
}

const actions = {
    prevItemSlider(props) {
        const recentProjectSliders = props.recentProjectSliders
        const temp = recentProjectSliders[recentProjectSliders.length-1].src
        for (var i = recentProjectSliders.length-1; i > 0; i--) {
            recentProjectSliders[i].src = recentProjectSliders[i - 1].src
        }
        recentProjectSliders[0].src = temp
        props.runAnimationSlide = true
    },

    nextItemSlider(props) {
        const recentProjectSliders = props.recentProjectSliders
        const temp = recentProjectSliders[0].src
        for (var i = 0; i < recentProjectSliders.length-1; i++) {
            recentProjectSliders[i].src = recentProjectSliders[i + 1].src
        }
        recentProjectSliders[recentProjectSliders.length - 1 ].src = temp
        props.runAnimationSlide = false
    },
}

export default function reducer(state = init, action, args) {
    
    actions[action] && actions[action](state, ...args)
    
    return state
}