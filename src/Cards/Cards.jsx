import { useEffect, useState } from "react"
import Card from "../Card/Card";

export default function Cards() {
    const[cards, setCards]=useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then( res=> res.json())
        .then(data => setCards(data))
    },[])
  return (
    <div className="mx-24 mb-12">
        <h1 className="text-right font-bold pb-3">All Menu</h1>
        <div  className="grid grid-cols-4 gap-6">
        {
            cards.map(card => <Card 
                key={card.id}
                card={card}>
                </Card>)
        }
        </div>
        
    </div>
  )
}
