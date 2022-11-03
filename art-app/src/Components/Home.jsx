import ApiPull from "./ApiPull"

export default function Home() {
    return (
        <div className="Home"> 

        <div className='search-bar'>
            <input placeholder='search...'>
            </input>
        </div>

        <div>
            <ApiPull />
        </div>

      
        </div>
    )
}