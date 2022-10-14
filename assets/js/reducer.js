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
    ]
}

const actions = {
    
}

export default function reducer(state = init, action, args) {
    
    actions[action] && actions[action](state, ...args)
    
    return state
}