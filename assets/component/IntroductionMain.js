import html from '../lib/core.js'

function IntroductionMain() {
    return html`
        <div class="introduction-main">
            <div class="introduction-content">
                    <h3 class="hello-text">Hello, <span>I'm</span></h3>
                    <h2 class="name-text">Cong Trinh</h2>
                    <h3 class="career">Technology Student - Majoring In Information Technology</h3>
                    <p class="introduction-description">Lorem ispum, or lipum as it is sometimes known, is dummy text used in laying out print, graphic or web design</p>
                <button class="button getmess-btn">Let's Talk</button>
                <div class="introduction-contact">
                    <p>Check Out My</p>
                    <a class="hexagon-shape social-icon" href="https://www.instagram.com/c.ism27/" target="blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a> 
                    <a class="hexagon-shape social-icon" href="https://www.facebook.com/c2227" target="blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a class="hexagon-shape social-icon" href="https://github.com/congit27" target="blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
            <div class="hexagon-shape introduction-image-box">
                <img class="my-image" src="./assets/img/me.png" alt="">
            </div>
        </div>
    `
}

export default IntroductionMain