import { Weapon, Item } from "../../enum";

export const getRandomInt = (max:number) => Math.floor(Math.random() * Math.floor(max))

export const getRandomItem = () => {
    let keys = Object.keys(Item)
    let index = getRandomInt(keys.length-1)
    return Item[keys[index]]
    //TODO: need item description text and meaningful rune
}

export const getRandomWeapon = () =>{
    let keys = Object.keys(Weapon)
    let index = Math.max(1, getRandomInt(keys.length-1))
    return Weapon[keys[index]]
}