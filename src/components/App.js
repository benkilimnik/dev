import React from "react"
import FilteredList from "./FilteredList"

import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
} from "./images"

const allSongs = [
  {
    id: 1,
    name: "Red Poppy Fields",
    price: 1,
    days: 0,
    genre: "indie",
    image: one,
  },
  {
    id: 2,
    name: "Oh Raven",
    price: 2,
    days: 7,
    genre: "metal",
    image: two,
  },
  {
    id: 3,
    name: "Carrion Comfort",
    price: 3,
    days: 0,
    genre: "indie",
    image: three,
  },
  {
    id: 4,
    name: "Numb",
    price: 4,
    days: 3,
    genre: "indie",
    image: four,
  },
  {
    id: 5,
    name: "Forward",
    price: 5,
    days: 3,
    genre: "indie",
    image: five,
  },
  {
    id: 6,
    name: "Fractions",
    price: 6,
    days: 5,
    genre: "rock",
    image: six,
  },
  {
    id: 7,
    name: "The Expanse",
    price: 7,
    days: 33,
    genre: "metal",
    image: seven,
  },
  {
    id: 8,
    name: "Mirror Mirror",
    price: 8,
    days: 15,
    genre: "rock",
    image: eight,
  },
  {
    id: 9,
    name: "Bird Song",
    price: 1,
    days: 10,
    genre: "indie",
    image: nine,
  },
  {
    id: 10,
    name: "Revolver",
    price: 2,
    days: 7,
    genre: "metal",
    image: ten,
  },
  {
    id: 11,
    name: "Witchcraft",
    price: 3,
    days: 3,
    genre: "rock",
    image: eleven,
  },
  {
    id: 12,
    name: "The London Air Raids",
    price: 4,
    days: 1,
    genre: "indie",
    image: twelve,
  },
  {
    id: 13,
    name: "Lulaby",
    price: 4,
    days: 1,
    genre: "indie",
    image: thirteen,
  },
  {
    id: 14,
    name: "Lucy",
    price: 5,
    days: 500,
    genre: "rock",
    image: fourteen,
  },
]

function App() {
  return (
    <div>
      <FilteredList allSongs={allSongs} />
    </div>
  )
}

export default App
