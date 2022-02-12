import { useState } from "react";


function InputHelp() {
    const [search, setSearch] = useState('What can we help you find today?')

    const updateSearch = (event) => {
        setSearch(event.target.value)
    }
    return (
        <div>
            <input className="rounded" onChange={updateSearch} value={search} style={{width: '20rem'}}/>
           
        </div>
    )
}
export default InputHelp;