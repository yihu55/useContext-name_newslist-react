import React,{useContext} from 'react'
import { NameContext } from '../App'

export default function StartPage() {
    const {name,setName}=useContext(NameContext)
    return (
        <div>
            <h1>Start Page</h1>
            {name}
            <form>
                <input 
                placeholder='Your Name'
                value={name}
                onChange={e=>setName(e.target.value)}/>

            </form>
        </div>
    )
}
