import html from '../lib/core.js'
import { connect } from '../js/store.js'

function ProjectSlider({ recentProjectSliders  }) {
    return html`
        <div class="project-slider">
            ${recentProjectSliders.map(recentProjectSlider => html`
                <div class="slider-item ${recentProjectSlider.isMainSlider && 'main-slider-item'}">
                    <img class="slider-img" src="${recentProjectSlider.src}"/>
                </div>
            `)}
        </div>
    `
}

export default connect()(ProjectSlider)