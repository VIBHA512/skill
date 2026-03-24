// 🎯 KNOWN SKILLS (EXPANDED + LOWERCASE SAFE)
const knownSkills = [
  "python", "machine learning", "sql", "html", "css", "javascript",
  "react", "node.js", "deep learning", "tensorflow", "nlp",
  "networking", "linux", "data visualization", "excel",
  "cloud computing", "aws", "database", "api"
];


// 📄 RESUME SKILL EXTRACTION (IMPROVED)
function extractSkills() {

  let fileInput = document.getElementById("resumeUpload");

  if (fileInput.files.length === 0) {
    alert("Upload resume image");
    return;
  }

  let file = fileInput.files[0];

  document.getElementById("output").innerHTML = "⏳ Extracting skills...";

  Tesseract.recognize(file, 'eng')
    .then(result => {

      let text = result.data.text.toLowerCase();
      let detected = [];

      knownSkills.forEach(skill => {
        if (text.includes(skill)) {
          detected.push(skill);
        }
      });

      // 🔥 Normalize + remove duplicates
      detected = [...new Set(detected.map(s => normalizeSkill(s)))];

      // 👉 Add default level (beginner)
      let formatted = detected.map(skill => `${skill}:intermediate`);

      document.getElementById("skills").value = formatted.join(", ");

      document.getElementById("output").innerHTML =
        "✅ Skills Extracted Successfully!";
    })
    .catch(() => {
      document.getElementById("output").innerHTML =
        "❌ Error extracting text.";
    });
}



// 🤖 SMART CHATBOT RESPONSE
function chatbotResponse(input) {

  input = input.toLowerCase();

  // 🔥 Skill-based career suggestions
  if (input.includes("python")) {
    return "With Python, you can explore Data Scientist, AI Engineer, or Backend Developer roles. Try improving ML and projects!";
  }

  if (input.includes("web")) {
    return "You can go for Frontend Developer, Backend Developer, or Full Stack roles. Focus on JavaScript and frameworks.";
  }

  if (input.includes("ai") || input.includes("machine learning")) {
    return "To become an AI Engineer, focus on Python, Machine Learning, Deep Learning, and real-world projects.";
  }

  if (input.includes("cyber")) {
    return "Cybersecurity requires Networking, Linux, Ethical Hacking, and Security Analysis. Start with basics + labs.";
  }

  // 🔥 Dynamic career suggestion using YOUR system
  if (input.includes("career")) {

    let userInput = document.getElementById("skills").value;

    if(userInput.trim() === ""){
      return "Please enter your skills first so I can suggest a career for you.";
    }

    let bestCareer = "";
    let maxScore = 0;

    for(let career in careerSkills){

      let score = calculateMatch(userInput, careerSkills[career]);

      if(score > maxScore){
        maxScore = score;
        bestCareer = career;
      }
    }

    return `Based on your skills, you are best suited for ${bestCareer} with a ${maxScore}% match.`;
  }

  // 🔥 Skill improvement guidance
  if (input.includes("improve") || input.includes("learn")) {
    return "Focus on high-weight skills first, build projects, and follow a roadmap. Consistency is key!";
  }

  // 🔥 Roadmap guidance
  if (input.includes("roadmap")) {
    return "Start with fundamentals → build projects → learn advanced topics → apply for internships.";
  }

  // 🔥 Default smart fallback
  return "I can help with career suggestions, skill gaps, and learning paths. Try asking: 'best career for me' or 'how to become AI engineer'.";
}



// 💬 SEND MESSAGE (UI CONNECT)
function sendMessage() {

  let inputField = document.getElementById("chatInput");
  let chatbox = document.getElementById("chatbox");

  let input = inputField.value.trim();

  if (input === "") return;

  // 👤 User message
  chatbox.innerHTML += `<p><b>You:</b> ${input}</p>`;

  // 🤖 AI reply
  let reply = chatbotResponse(input);
  chatbox.innerHTML += `<p><b>AI:</b> ${reply}</p>`;

  inputField.value = "";

  chatbox.scrollTop = chatbox.scrollHeight;
}
