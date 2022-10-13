import html from '../lib/core.js'

function Navigation() {
    return html`
    <div class="navigation">
        <div class="navigation-brand">
            <i class="navigation-logo fa-solid fa-eye"></i>
            <h5 class="branch-name">Personal Website</h5>
        </div>
        <ul class="nav-list">
            <li class="nav-item">Home</li>
            <li class="nav-item">Projects</li>
            <li class="nav-item">Resume</li>
        </ul>
        <div class="search-box">
            <i class="search-icon fa-solid fa-magnifying-glass"></i>
            <input class="search-input" placeholder="Search..">
                <label class="search-label" for="">Search</label>
            </input>
        </div>
    </div>
    `
}

export default Navigation