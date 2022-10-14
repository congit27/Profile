import html from '../lib/core.js'
import { connect } from '../js/store.js'

function JobList({ experiences }) {
    return html`
        <ul class="job-list">
            ${experiences.map( experience => ` 
                <li class="job-item animation-box">
                    <div class="content-box">
                        <img src="${experience.jobImage}" alt="" class="job-img">
                        <h4 class="job-name">${experience.jobName}</h4>
                        <p class="job-description">${experience.jobDescription}</p>
                    </div>
                </li>
            `)}
        </ul>
    `
}

export default connect()(JobList)