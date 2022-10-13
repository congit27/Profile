import html from '../lib/core.js'
import FooterContent from './FooterContent.js'
import FooterHeading from './FooterHeading.js'

function FooterSection() {
    return html`
        <div class="footer-section">
            ${FooterHeading()}
            ${FooterContent()}
            <div class="btn-box">
                <button class="contact-btn">Contact with me</button>
            </div>
        </div>
    `
}

export default FooterSection