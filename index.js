import characters from './data.js'

const app = document.getElementById('app')

const gallery = document.getElementById('starWars')
console.log(characters)
for (const character of characters){
    const starWarsContainer = document.createElement('figure');
    starWarsContainer.classList.add('gallery-item')

    starWarsContainer.innerHTML = `

    <img
     class="gallery-image"
     src="${character.imageUrl}"
    />
    <div class="description">
      <div>
      <h2>Name</h2>
         <p>
     ${character.name}
         </p>
     </div>
      <div>
      <h2>Height</h2>
         <p>
     ${character.height}
         </p>
     </div>
      <div>
      <h2>Eye color</h2>
         <p>
     ${character.eye_color}
         </p>
     </div>
      <div>
      <h2>Birth</h2>
         <p>
     ${character.birth_year}
         </p>
     </div>
      <div>
      <h2>Gender</h2>
         <p>
     ${character.gender}
         </p>
     </div>
    </div>`
    gallery.appendChild(starWarsContainer)
}
