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
