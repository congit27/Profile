import html from '../lib/core.js'

function JobList() {
    return html`
        <ul class="job-list">
            <li class="job-item animation-box">
                <div class="content-box">
                    <img src="./assets/img/html-5.png" alt="" class="job-img">
                    <h4 class="job-name">HTML5 & CSS3</h4>
                    <p class="job-description">Lorem ispum, or lipum as it is sometimes known, is dummy text used in laying out print, graphic or web design</p>
                </div>
            </li>
            <li class="job-item animation-box">
                <div class="content-box">
                    <img src="./assets/img/javascript.png" alt="" class="job-img">
                    <h4 class="job-name">Javascript</h4>
                    <p class="job-description">Lorem ispum, or lipum as it is sometimes known, is dummy text used in laying out print, graphic or web design</p>
                </div>
            </li>
            <li class="job-item animation-box">
                <div class="content-box">
                    <img src="./assets/img/java.png" alt="" class="job-img">
                    <h4 class="job-name">Java</h4>
                    <p class="job-description">Lorem ispum, or lipum as it is sometimes known, is dummy text used in laying out print, graphic or web design</p>
                </div>
            </li>
        </ul>
    `
}

export default JobList