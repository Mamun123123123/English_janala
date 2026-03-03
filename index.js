const loadLessons = async () => {
    let url = "https://openapi.programming-hero.com/api/levels/all"
    let response = await fetch(url)
    let data = await response.json();
    displayLesson(data.data);

}
const displayLesson = (items) => {
    const levelContainer = document.querySelector("#level-container")
    levelContainer.innerHTML = ""
    for (let item of items) {
        const btndiv = document.createElement("Div")
        btndiv.innerHTML = `
      
        <button class="btn btn-outline btn primary">
          <i class="fa-solid fa-book-open"></i> Lesson - ${item.level_no}
        </button>
      
    `;
        levelContainer.appendChild(btndiv)
    }

}
loadLessons()