import html from '../lib/core.js'

function GalleryRotator() {
    return html`
        <div class="gallery-rotator">
            <span style="--i:1"><img src="./assets/img/img1.jpg" alt=""></span>
            <span style="--i:2"><img src="./assets/img/img2.jpg" alt=""></span>
            <span style="--i:3"><img src="./assets/img/img3.jpg" alt=""></span>
            <span style="--i:4"><img src="./assets/img/img4.jpg" alt=""></span>
            <span style="--i:5"><img src="./assets/img/img5.jpg" alt=""></span>
            <span style="--i:6"><img src="./assets/img/img6.jpg" alt=""></span>
            <span style="--i:7"><img src="./assets/img/img7.jpg" alt=""></span>
            <span style="--i:8"><img src="./assets/img/img8.jpg" alt=""></span>
        </div>
    `
}

export default GalleryRotator