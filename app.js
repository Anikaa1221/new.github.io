let mathCount=0;
let phyCount=0;
let cpCount=0;

function markasDone(id){
  const lesson=document.getElementById(id);
  if (!lesson.classList.contains("completed")){

    lesson.classList.add("completed");
    if (id.startsWith("math")) {
      mathCount++;
      document.getElementById("mathCount").textContent = mathCount;
    }
    if (id.startsWith("phy")) {
      phyCount++;
      document.getElementById("phyCount").textContent = phyCount;
    }
    if (id.startsWith("cp")) {
      cpCount++;
      document.getElementById("cpCount").textContent = cpCount;
    }


  }
}