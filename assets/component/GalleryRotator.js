import html from '../lib/core.js'
import { connect } from '../js/store.js'

function GalleryRotator({ memoryAlbum }) {
    return html`
        <div class="gallery-rotator">
            ${memoryAlbum.map(memoryImg => `
            <span style="--i:${memoryAlbum.indexOf(memoryImg)+1}"><img src="${memoryImg}" alt=""></span>
            `)}
        </div>
    `
}

export default connect()(GalleryRotator)