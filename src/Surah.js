
function Surah({ allSurah }) {



    return (
        <div className="surah" >
            <ol>
                {allSurah.verses.map((verse) => (
                    <div className="verse"  >
                        <li><h4>{verse.text}</h4></li>
                        <p>{verse.translation_en}</p>
                    </div>
                ))}
            </ol>


        </div>
    )
}

export default Surah
