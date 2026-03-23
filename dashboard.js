function showDashboard(){

  let career = document.getElementById("career").value;

  let labels = Object.keys(careerSkills[career]);

  let data = labels.map(()=>Math.floor(Math.random()*100));

  document.getElementById("output").innerHTML = `
  <canvas id="chart"></canvas>
  `;

  new Chart(document.getElementById("chart"),{
    type:"bar",
    data:{
      labels:labels,
      datasets:[{data:data}]
    }
  });
}
