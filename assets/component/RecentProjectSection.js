import html from '../lib/core.js'
import ProjectSlider from './ProjectSlider.js'

function RecentProjectSection() {
    return html`
        <div class="recent-project-section">
            <h2 class="heading-text">Recent <span>Project</span></h2>
            <p class="description">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
            ${ProjectSlider()}            
            <div class="controls-slider">
                <button class="button-control prev-btn" onclick="dispatch('prevItemSlider')"><i class="fa-solid fa-arrow-left"></i>Prev</button>
                <button class="button-control next-btn" onclick="dispatch('nextItemSlider')">Next<i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        
    `
}

export default RecentProjectSection