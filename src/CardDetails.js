import {useParams} from "react-router-dom"
import cards from "./cards.json"

export default function CardDetails() {

 /*console.log(cards.length)
 console.log(cards)*/
 console.log(cards)
  let params = useParams()
  /*console.log(params)*/

  for (var i =0 ;i<= cards.length ;i++){
    if (params.id=== cards[i].name){
      break;
    }
  }
  return (
    <div className="allBg">
      <div className="detail-wrap">
      <div className="detail-item">

            <div className="card-container">
                <div className="cover">
                  <img className="detail-CardImg"src={process.env.PUBLIC_URL+'/cards/'+ cards[i].img} alt={cards[i].img}/> 
                </div>
                <div className="back">
                  <img className="detail-CardImg"src={process.env.PUBLIC_URL+'/cards/cover.jpg'} alt={cards[i].img}/> 
                </div>
            </div>
        </div>
      {/********************************************/}
      <div className="detail-words">
      <h1>{cards[i].name}</h1>
      <h3>Fortune Telling</h3>
      <ul>
      {
        cards[i].fortune_telling.map(data=>{
          return(
            <li key={i}>{data}</li>
          )         
        })      } 
      </ul>
     {/********************************************/}
      <h3>Meanings</h3>
      <h4>Light</h4>
      <ul>
      {
        cards[i].meanings.light.map(data=>{
          return(
            <li key={i}>{data}</li>
          )         
        })      } 
      </ul>
      <h4>Shadow</h4>
      <ul>
      {
        cards[i].meanings.shadow.map(data=>{
          return(
            <li key={i}>{data}</li>
          )         
        })      } 
      </ul>
     {/********************************************/}
      <h3>Questions to Ask</h3>
      <ul>
      {
        cards[i].QuestionstoAsk.map(data=>{
          return(
            <li key={i}>{data}</li>
          )         
        })      } 
      </ul>
      </div>
    </div>
    </div>
  )
}
