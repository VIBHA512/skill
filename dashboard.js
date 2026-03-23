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
