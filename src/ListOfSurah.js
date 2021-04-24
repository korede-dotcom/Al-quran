import React, {useState} from 'react'

function ListOfSurah({data}) {

    const [surahNum, setSurahNum] = useState()

    
    console.log(surahNum)
    return (
        <div style={{color:"greenyellow"}}>
            <select onChange={handleSurahChange}>
                {
                    data.map((d,index )=> (
                        <option key={d.number_of_surah} value={d.number_of_surah}>{d.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default ListOfSurah
