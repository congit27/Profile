import html from '../lib/core.js'
import IntroductionSection from './IntroductionSection.js'
import ExperienceSection from './ExperienceSection.js'
import RecentProjectSection from './RecentProjectSection.js'
import MemorySection from './MemorySection.js'
import FooterSection from './FooterSection.js'

function App() {
    return html`
        <div class="main">
            ${IntroductionSection()}
            ${ExperienceSection()}
            ${RecentProjectSection()}
            ${MemorySection()}
            ${FooterSection()}
        </div>
    `
}

export default App