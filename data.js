// 🎯 CAREER SKILLS (LEVEL + WEIGHT)
const careerSkills = { 

  "Data Scientist": {
    "python": { level: "advanced", weight: 0.3 },
    "machine learning": { level: "intermediate", weight: 0.25 },
    "statistics": { level: "intermediate", weight: 0.2 },
    "sql": { level: "intermediate", weight: 0.15 },
    "data visualization": { level: "beginner", weight: 0.1 }
  },

  "Web Developer": {
    "html": { level: "advanced", weight: 0.2 },
    "css": { level: "advanced", weight: 0.2 },
    "javascript": { level: "advanced", weight: 0.3 },
    "react": { level: "intermediate", weight: 0.2 },
    "node.js": { level: "beginner", weight: 0.1 }
  },

  "AI Engineer": {
    "python": { level: "advanced", weight: 0.3 },
    "deep learning": { level: "intermediate", weight: 0.25 },
    "tensorflow": { level: "intermediate", weight: 0.2 },
    "machine learning": { level: "intermediate", weight: 0.15 },
    "nlp": { level: "beginner", weight: 0.1 }
  },

  "Cybersecurity Analyst": {
    "networking": { level: "intermediate", weight: 0.25 },
    "linux": { level: "intermediate", weight: 0.2 },
    "ethical hacking": { level: "intermediate", weight: 0.2 },
    "security analysis": { level: "beginner", weight: 0.2 },
    "cryptography": { level: "beginner", weight: 0.15 }
  },

  "Data Analyst": {
    "python": { level: "intermediate", weight: 0.25 },
    "sql": { level: "intermediate", weight: 0.3 },
    "data visualization": { level: "intermediate", weight: 0.25 },
    "excel": { level: "advanced", weight: 0.2 }
  },

  "Frontend Developer": {
    "html": { level: "advanced", weight: 0.25 },
    "css": { level: "advanced", weight: 0.25 },
    "javascript": { level: "advanced", weight: 0.3 },
    "react": { level: "intermediate", weight: 0.2 }
  },

  "Backend Developer": {
    "node.js": { level: "intermediate", weight: 0.3 },
    "python": { level: "intermediate", weight: 0.25 },
    "database": { level: "intermediate", weight: 0.25 },
    "api": { level: "beginner", weight: 0.2 }
  },

  "Cloud Engineer": {
    "cloud computing": { level: "intermediate", weight: 0.3 },
    "aws": { level: "intermediate", weight: 0.25 },
    "linux": { level: "intermediate", weight: 0.2 },
    "networking": { level: "beginner", weight: 0.25 }
  }

};


// 🧠 SOFT SKILLS
const softSkills = {

  "Data Scientist": {
    "problem solving": 0.3,
    "critical thinking": 0.25,
    "communication": 0.2,
    "teamwork": 0.15,
    "curiosity": 0.1
  },

  "Web Developer": {
    "creativity": 0.3,
    "communication": 0.25,
    "teamwork": 0.2,
    "problem solving": 0.15,
    "adaptability": 0.1
  },

  "AI Engineer": {
    "problem solving": 0.3,
    "analytical thinking": 0.25,
    "curiosity": 0.2,
    "teamwork": 0.15,
    "communication": 0.1
  }

};


// 🔁 SYNONYMS (FOR BETTER MATCHING)
const synonyms = {
  "ml": "machine learning",
  "ai": "machine learning",
  "js": "javascript",
  "python programming": "python",
  "data viz": "data visualization"
};


// 📚 COURSE DATA
const courseData = {

  "python":[
    "Python for Everybody - Coursera",
    "Complete Python Bootcamp - Udemy"
  ],

  "machine learning":[
    "Machine Learning by Andrew Ng - Coursera"
  ],

  "sql":[
    "SQL for Data Science - Coursera"
  ],

  "html":[
    "HTML & CSS - freeCodeCamp"
  ],

  "css":[
    "Responsive Design - freeCodeCamp"
  ],

  "javascript":[
    "JavaScript Algorithms - freeCodeCamp"
  ],

  "react":[
    "React Course - Udemy"
  ],

  "node.js":[
    "Node.js Guide - Udemy"
  ],

  "excel":[
    "Excel for Data Analysis"
  ],

  "aws":[
    "AWS Cloud Essentials"
  ],

  "cloud computing":[
    "Intro to Cloud Computing"
  ]

};


// 🔥 TRENDING SKILLS
const trendingSkills = [
  "AI",
  "Cloud Computing",
  "Cybersecurity",
  "Data Science",
  "Blockchain",
  "DevOps"
];


// 🧠 NORMALIZE SKILL
function normalizeSkill(skill) {
  skill = skill.toLowerCase().trim();
  return synonyms[skill] || skill;
}


// 📊 LEVEL COMPARISON
function compareLevel(userLevel, requiredLevel) {

  const levels = {
    basic: 1,
    beginner: 1,
    intermediate: 2,
    advanced: 3
  };

  if (userLevel === requiredLevel) return true;

  return (levels[userLevel] || 0) + 1 >= (levels[requiredLevel] || 0);
}


// 🚀 FINAL MATCH FUNCTION (OBJECT BASED)
function calculateMatch(userSkills, requiredSkillsObj) {

  let score = 0;
  let totalWeight = 0;

  for (const skill in requiredSkillsObj) {

    let { level, weight } = requiredSkillsObj[skill];

    totalWeight += weight;

    if (
      userSkills[skill] &&
      compareLevel(userSkills[skill], level)
    ) {
      score += weight;
    }
  }

  return totalWeight 
    ? Math.round((score / totalWeight) * 100)
    : 0;
}
