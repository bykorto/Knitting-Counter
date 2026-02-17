// Load the most recent project that was open

function loadRecentProject() {
    const projectData = localStorage.getItem('currentProject');

    if (projectData) {
        const project = JSON.parse(projectData);
        document.getElementById('current-project-title',).textContent = project.projectName;
        document.getElementById('current-project-desc').textContent = project.projectDesc;
        document.getElementById('project-row-counter').textContent = project.rowCount;
        document.getElementById('project-repeat-counter').textContent = project.repeatCount;
        document.getElementById('rows-per-repeat').textContent = project.rowsPerRepeat;
    }
}

function getCounter() {
    document.getElementById('increase-rows').addEventListener('click', () => updateCounter('project-row-counter', 1))
    document.getElementById('decrease-rows').addEventListener('click', () => updateCounter('project-row-counter', -1))
    document.getElementById('increase-repeats').addEventListener('click', () => updateCounter('project-repeat-counter', 1))
    document.getElementById('decrease-repeats').addEventListener('click', () => updateCounter('project-repeat-counter', -1))
}

// Update rows & repeat tracker

function updateCounter(counterID, changeValue) {
    const counter = document.getElementById(counterID);
    let value = parseInt(counter.textContent) + changeValue;

    if (value < 0) value = 0;

    if (counterID === 'project-row-counter' && value === 8) {
        updateCounter('project-repeat-counter', 1);
        value = 0;
    }

    counter.textContent = value;

    autosaveProject();
}

// Autosave the project

function autosaveProject() {
    const rowCount = document.getElementById('project-row-counter').textContent;
    const repeatCount = document.getElementById('project-repeat-counter').textContent;
    const rowsPerRepeat = 8;

    const project = {
        rowCount,
        repeatCount,
        rowsPerRepeat,
        lastModified: new Date().toISOString()
    };
    
    localStorage.setItem('currentProject', JSON.stringify(project));
}

// Load on bootup

window.addEventListener('DOMContentLoaded', function() {
    loadRecentProject();
    getCounter();
})
