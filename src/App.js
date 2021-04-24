
import './App.css';
import React, { useState, useEffect } from "react";
import Surah from './Surah';
import Listen from './Listen';



function App() {
  const [data, setData] = useState([]);
  const [allSurah, setAllSurah] = useState([]);
  const [searchSurah, setSearchSurah] = useState(1);




  useEffect(() => {
    const fectchBriefQuran = async () => {
      const response = await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json`);
      const json = await response.json();
      setData(json);
    };
    fectchBriefQuran()


  }, [])



  useEffect(() => {
    const fecthURL = async () => {
      const response = await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${searchSurah}.json`);
      const json = await response.json();
      setAllSurah(json)

    };
    fecthURL();
  }, [searchSurah])


  const handleSurahChange = (e) => {
    setSearchSurah(e.target.value);
  }



  const loading = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  }

  const darkMode = () => {
    const two = document.querySelector(".two");
    two.classList.toggle("darkMode")

  }



  if (allSurah.name === undefined) {
    return (
      <div style={loading}>
        <img src="../Ripple-1s-200px.gif" alt="loading" />
        <p>loading quran</p>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="one" >
        <h1>Al Quran</h1>
        <h2>{allSurah.name}</h2>
        <div class="switch">
          <input onChange={darkMode} type="checkbox" id="checkbox" />
          <label for="checkbox" class="label">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <div class="ball"></div>
          </label>
        </div>
      </header>

      <div className="two">
        <div className="selection">
          <select onChange={handleSurahChange}  >

            {
              data.map((d, index) => (
                <option key={d.number_of_surah} value={d.number_of_surah}>{d.name}</option>
              ))
            }
          </select>
          <Surah allSurah={allSurah} />
        </div>
      </div>

      <footer className="three">
        {allSurah &&
          <div className="surahTitle">
            <i>{allSurah.name_translations.ar}</i>
            <span>{allSurah.name_translations.en}</span>
          </div>
        }
        <div>
          <Listen allSurah={allSurah} />
        </div>
        <small>made with love ❤️ </small>
        <a className="mailto" href="mailto:badasulaimon@gmail.com">badasulaimon@gmail.com</a>

      </footer>

    </div>
  )
}

export default App;
