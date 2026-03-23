document.addEventListener('DOMContentLoaded', () => {
    const fresherRadio = document.getElementById('fresher');
    const expRadio = document.getElementById('experienced');
    const expFields = document.getElementById('experienced-fields');
    const expSlider = document.getElementById('expRange');
    const expValue = document.getElementById('expValue');

    // Toggle Experienced UI
    const updateUI = () => {
        if (expRadio.checked) {
            expFields.classList.add('show-fields');
        } else {
            expFields.classList.remove('show-fields');
        }
    };

    fresherRadio.addEventListener('change', updateUI);
    expRadio.addEventListener('change', updateUI);

    // Update Experience Label
    expSlider.addEventListener('input', (e) => {
        expValue.textContent = e.target.value;
    });
});

function analyzeSkills() {
    const isExperienced = document.getElementById('experienced').checked;
    const target = document.getElementById('targetCareer').value;
    const years = isExperienced ? document.getElementById('expRange').value : 0;

    // Logic for personalized analysis
    let analysisMsg = "";
    if (!isExperienced) {
        analysisMsg = `Analyzing foundational skills for entry-level ${target}. Focus: Projects & Core Concepts.`;
    } else {
        analysisMsg = `Analyzing advanced leadership and technical skills for ${target} with ${years} years of exp. Focus: System Design & Strategy.`;
    }

    alert(analysisMsg);
    // Here you would call your AI endpoint (like ai.js in your repo)
}
function updateDashboard(analysisResults) {
    const dashboard = document.querySelector('.analysis-card');
    
    // Injecting the results into the UI with a fade-in effect
    dashboard.innerHTML = `
        <div class="results-container animate-fade-in">
            <h3>Your Readiness Score</h3>
            <div class="score-circle">
                <span class="score-number">${analysisResults.score}%</span>
            </div>
            
            <div class="gap-list">
                <h4>Skills to Acquire:</h4>
                <ul>
                    ${analysisResults.missing.map(s => `<li><i class="fas fa-plus-circle"></i> ${s}</li>`).join('')}
                </ul>
            </div>

            <div class="roadmap-box">
                <h4>Your Path:</h4>
                <p>${analysisResults.plan}</p>
            </div>

            <button class="cta-button" onclick="window.location.reload()">New Analysis</button>
        </div>
    `;
}
function analyzeSkills() {
    const level = document.getElementById('experienced').checked ? 'experienced' : 'fresher';
    const target = document.getElementById('targetCareer').value;
    
    // Mock user skills (normally extracted from resume/input)
    const userSkills = ["Python", "HTML/CSS"]; 

    // 1. Get results from AI logic
    const results = processSkillGap(userSkills, target, level);
    
    // 2. Display results using Dashboard logic
    updateDashboard(results);
}
