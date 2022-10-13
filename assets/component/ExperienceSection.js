import html from '../lib/core.js'
import JobList from './JobList.js'


function ExperienceSection() {
    return html`
        <div class="experience-section">
            <h4 class="heading-text">My <span>Experince</span></h4>
            <h2 class="sub-heading-text">What I Learned</h2>
            ${JobList()}
            </div>
    `
}

export default ExperienceSection