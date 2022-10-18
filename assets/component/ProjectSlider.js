import html from '../lib/core.js'
import { connect } from '../js/store.js'

function ProjectSlider({ recentProjectSliders, runAnimationSlide  }) {
    return html`
        <div class="project-slider">
            ${recentProjectSliders.map(recentProjectSlider => html`
                <div class="slider-item ${recentProjectSlider.isMainSlider && 'main-slider-item'}">
                    <img 
                        class="slider-img" 
                        src="${recentProjectSlider.src}" 
                        ${runAnimationSlide? 'style="animation: prevSlide 0.5s linear"': 'style="animation: nextSlide 0.5s linear"'}
                    />
                </div>
            `)}
        </div>
    `
}

export default connect()(ProjectSlider)