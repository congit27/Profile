import html from '../lib/core.js'

function FooterContent() {
    return html`
        <div class="footer-content">
            <div class="about-me">
                <h2>About Me</h2>
                <ul>
                    <li><span>Fullname:</span> Trinh The Cong</li>
                    <li><span>Age:</span> 20</li>
                    <li><span>Specialized:</span> Infomation Technology</li>
                    <li><span>Studying at:</span> University of Technology and Education Danang</li>
                </ul>
            </div>
            <div class="contact-me">
                <h2>Contact</h2>
                <ul>
                    <li><span>Phone:</span> 0799164645</li>
                    <li><span>Email:</span> conbo1102a@gmail.com</li>
                    <li><span>Address:</span> Hai Chau, Danang</li>
                </ul>
            </div>
        </div>
    `
}

export default FooterContent