import html from '../lib/core.js'
import IntroductionMain from './IntroductionMain.js'
import Navigation from './Navigation.js'

function IntroductionSection() {
    return html`
        <div class="introduction-section">
            ${Navigation()}
            ${IntroductionMain()}
        </div>
    `
}

export default IntroductionSection