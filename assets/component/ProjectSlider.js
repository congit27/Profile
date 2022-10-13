import html from '../lib/core.js'

function ProjectSlider() {
    return html`
        <div class="project-slider">
            <div class="slider-item">
                <div class="img img-left"></div>
                <div class="img img-right"></div>
            </div>
            <div class="slider-item">
                <div class="img img-left"></div>
                <div class="img img-right"></div>
            </div>
            <div class="slider-item main-slider-item">
                <div class="img img-left"></div>
                <div class="img img-right"></div>
            </div>
            <div class="slider-item">
                <div class="img img-left"></div>
                <div class="img img-right"></div>
            </div>
            <div class="slider-item">
                <div class="img img-left"></div>
                <div class="img img-right"></div>
            </div>
        </div>
    `
}

export default ProjectSlider