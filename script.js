let userType = "fresher";

function switchUser(type){
  userType = type;

  document.querySelectorAll(".userTab").forEach(btn=>{
    btn.classList.remove("active");
  });

  if(type==="fresher"){
    document.querySelectorAll(".userTab")[0].classList.add("active");
  } else {
    document.querySelectorAll(".userTab")[1].classList.add("active");
  }
}

// 🔥 NAVIGATION
function showSection(id){
  document.querySelectorAll(".section").forEach(sec=>{
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

// 🎯 ANALYZE
function analyze(){

  let career = document.getElementById("career").value;
  let input = document.getElementById("skills").value;

  let userSkills = {};

  input.split(",").forEach(s=>{
    let [skill, level] = s.split(":");
    skill = normalizeSkill(skill);
    level = (level||"intermediate").trim();
    userSkills[skill] = level;
  });

  let score = calculateMatch(userSkills, careerSkills[career], userType);

  let result = `
  <h2>${career}</h2>
  <h3>Score: ${score}%</h3>

  <button onclick="showDashboard()">📊 View Dashboard</button>
  <button onclick="suggestCareers()">🚀 Explore Careers</button>
  `;

  document.getElementById("output").innerHTML = result;
}

// 🚀 RECOMMEND
function recommendCareer(){

  let input = document.getElementById("skills").value;

  let userSkills = {};

  input.split(",").forEach(s=>{
    let [skill, level] = s.split(":");
    skill = normalizeSkill(skill);
    userSkills[skill] = level||"intermediate";
  });

  let best = "";
  let max = 0;

  for(let c in careerSkills){
    let score = calculateMatch(userSkills, careerSkills[c], userType);
    if(score>max){
      max=score;
      best=c;
    }
  }

  document.getElementById("output").innerHTML = `<h2>${best} (${max}%)</h2>`;
}

// 💡 SUGGEST
function suggestCareers(){
  document.getElementById("output").innerHTML = "Suggestions loading...";
}

// 🔥 LOAD
window.onload = function(){

  let dropdown = document.getElementById("career");

  for(let c in careerSkills){
    let opt = document.createElement("option");
    opt.value = c;
    opt.text = c;
    dropdown.appendChild(opt);
  }
};
