function showDashboard() {

  let career = document.getElementById("career").value;
  let userInput = document.getElementById("skills").value;

  if(userInput.trim() === ""){
    document.getElementById("output").innerHTML = "⚠️ Please enter your skills first.";
    return;
  }

  let requiredSkills = careerSkills[career];

  if(!requiredSkills){
    document.getElementById("output").innerHTML = "Career data not found.";
    return;
  }

  // 🔥 Convert user input → object
  const userSkills = {};

  userInput.split(',').forEach(s => {
    let [skill, level] = s.split(':');

    skill = normalizeSkill(skill);
    level = (level || "beginner").toLowerCase().trim();

    userSkills[skill] = level;
  });

  let learned = [];
  let remaining = [];

  let score = 0;
  let totalWeight = 0;

  // 🔥 Process skills
  for(let skill in requiredSkills){

    let level = requiredSkills[skill].level || "beginner";
let weight = requiredSkills[skill].weight || 1;
    totalWeight += weight;

    if(userSkills[skill] && compareLevel(userSkills[skill], level)){
      learned.push(skill);
      score += weight;
    } else {
      remaining.push(skill);
    }
  }
let progress = totalWeight ? Math.round((score / totalWeight) * 100) : 0;

  // 🧠 Convert levels to numbers for chart
  function levelToNumber(level){
    return level === "advanced" ? 100 :
           level === "intermediate" ? 70 : 40;
  }

  let labels = Object.keys(requiredSkills);

  let chartData = labels.map(skill => {
    if(userSkills[skill]){
      return levelToNumber(userSkills[skill]);
    } else {
      return 20; // not learned
    }
  });

  // 🧾 UI
  let html = `
    <h2>📊 Learning Progress</h2>

    <p><b>Overall Progress:</b> ${progress}%</p>
    <progress value="${progress}" max="100"></progress>

    <h3>✅ Skills Completed</h3>
    <p>${learned.join(", ") || "None yet"}</p>

    <h3>📌 Skills Remaining</h3>
    <p>${remaining.join(", ") || "None 🎉"}</p>

    <canvas id="skillChart" style="margin-top:20px;"></canvas>
  `;

  document.getElementById("output").innerHTML = html;

  // 📊 CHART
let ctx = document.getElementById("skillChart").getContext("2d");
if(window.skillChartInstance){
  window.skillChartInstance.destroy();
}
  window.skillChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Skill Level Progress',
        data: chartData
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  // 💾 Save
  localStorage.setItem("userSkills", JSON.stringify(userSkills));
}
