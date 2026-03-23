function extractSkills(){
  alert("Resume parsing working...");
}

function sendMessage(){

  let input = document.getElementById("chatInput").value;
  let box = document.getElementById("chatbox");

  box.innerHTML += `<p>You: ${input}</p>`;
  box.innerHTML += `<p>AI: Keep learning 🚀</p>`;
}
