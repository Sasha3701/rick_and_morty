import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import 'regenerator-runtime/runtime'

const widgetDiv = document.querySelectorAll(".rick_and_morty")

console.log(widgetDiv)

widgetDiv.forEach(div => {
    ReactDOM.render(<App />, div)
})