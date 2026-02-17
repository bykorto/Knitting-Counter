class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="navbar-box">
                <div class="navbar-btn-box">
                    <button class="navbar-btn" id="navbar-btn-projects">
                        <span class="navbar-btn-text">New Project</span>
                        <img class="navbar-btn-icon" src="/icons/plus.svg">
                    </button>
                    <button class="navbar-btn" id="navbar-btn-new">
                        <span class="navbar-btn-text">See Projects</span>
                        <img class="navbar-btn-icon" id="navbar-arrow-icon" src="/icons/arrow.svg">
                    </button>
                </div>
            </div>
        `;
    }
}

customElements.define('app-navbar', Navbar)
