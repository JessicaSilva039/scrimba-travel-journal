import React from "react"
import Navbar from "./components/Navbar.js"
import Cards from "./components/Cards.js"
import Data from "./data.js"

export default function App(){
    const cards = Data.map(items =>{
        return(
            <Cards 
            key={items.id}
            items = {items} />
        )
    })
    
    return(
        <div>
            <Navbar />
            <section className="listofCards">
            {cards}
            </section>
        
        </div>
    ) 
}