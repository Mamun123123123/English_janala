const loadLessons = async () => {
    let url = "https://openapi.programming-hero.com/api/levels/all"
    let response = await fetch(url)
    let data = await response.json();
    displayLesson(data.data);

}
const loadLevelWord = async (id)=>{
    let url = `https://openapi.programming-hero.com/api/level/${id}`
    let response = await fetch(url)
    let data = await response.json()
    displayWord(data.data);
}
const displayWord  = (words)=>{
  const wordContainer = document.querySelector("#word-container")
  wordContainer.innerHTML = "";
  if(words.length === 0){
    wordContainer.innerHTML = `<h1 class="font-bold">no word added </h1>`
  }
  words.forEach(word=>{
    console.log(word);
    const card = document.createElement("div")
    card.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 w-80">
            <h2 class="font-bold text-xl">${word.word}</h2>
            <div class="font-semibold">meaning/pronunciation</div>
            <div class="text-2xl font-bangla font-semibold">"${word.meaning}/${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button><i class="fa-solid fa-circle-info"></i></button>
                <button><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>`;
    wordContainer.appendChild(card)
    
  })
  
}

const displayLesson = (items) => {
    const levelContainer = document.querySelector("#level-container")
    levelContainer.innerHTML = ""
    for (let item of items) {
        const btndiv = document.createElement("Div")
        btndiv.innerHTML = `
      
        <button onclick="loadLevelWord(${item.level_no})" class="btn btn-outline btn primary">
          <i class="fa-solid fa-book-open"></i> Lesson - ${item.level_no}
        </button>
      
    `;
        levelContainer.appendChild(btndiv)
    }

}
loadLessons()