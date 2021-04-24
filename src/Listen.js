import React from 'react'

function Listen({allSurah}) {
  

    return (
        <div>
             
            <div className="audio_title">
                <audio src={allSurah.recitations[Math.floor(Math.random() * allSurah.recitations.length)].audio_url} controls></audio>
           </div>
            
        </div>
    )
}

export default Listen
