import React,{useContext} from 'react'
import { NameContext } from '../App'
import { Link } from 'react-router-dom'

export default function NewListPage() {
    const {name,newsList}=useContext(NameContext)
    return (
        <div>
            <h1>News for {name}</h1>
            {newsList&& newsList.map((item,index)=>{
               return <p key={index}>
                    <Link to={`/news/${index}`}>{item.title}</Link></p>
            })}
        </div>
    )
}
