import { getDiceRollArray } from './utils.js'


function Character(data) {
    Object.assign(this, data)

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map((num) => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }
    
    this.getCharacterHtml = function(data) {
        const {id, name, avatar, health, diceCount} = this

        const diceHTML = this.getDiceHtml(diceCount)

            
        return`
         <div class="character-card">
            <h4 class="name">${name}</h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b>${health}</b></p>
            <div class="dice-container">
            ${diceHTML}
            </div>
        </div>
        `
    }
}

export default Character 