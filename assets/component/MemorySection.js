import html from '../lib/core.js'
import GalleryRotator from './GalleryRotator.js'

function MemorySection() {
    return html`
        <div class="memory-section">
            <h2 class="heading-text">Memory Album</h2>
            <p class="memory-description">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
            ${GalleryRotator()}
        </div>
    `
}

export default MemorySection