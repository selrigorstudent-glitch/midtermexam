import { useEffect, useState } from 'react'

const FULL_NAME = 'RIGOR SEAN ERIC L.'
const SECTION = 'IT3A'
const SUBJECT = 'C-PCIT9'
const TITLE = '10 Things That Require Zero Talent'

const MESSAGES = {
  '1': 'Being On Time',
  '2': 'Making An Effort',
  '3': 'Being High Energy',
  '4': 'Having A Positive Attitude',
  '5': 'Being Passionate',
  '6': 'Using Good Body Language',
  '7': 'Being Coachable',
  '8': 'Doing A Little Extra',
  '9': 'Being Prepared',
  '0': 'Having A Strong Work Ethic',
  N: 'SEAN ERIC L. RIGOR',
  S: SUBJECT.toUpperCase(),
}

const KEY_ORDER = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'N', 'S']
const KEY_LABEL = { N: 'NAME', S: 'SUBJ' }

export default function App() {
  const [display, setDisplay] = useState(TITLE)

  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toUpperCase() : e.key
      if (MESSAGES[key]) setDisplay(MESSAGES[key])
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="app">
      <header className="header">
        {FULL_NAME} - {SECTION}
      </header>

      <main className="main">
        <h1 className="display">{display}</h1>
        <p className="hint">
          Press 1–9, 0, N (NAME) or S (SUBJ) on your keyboard, or tap a key below.
        </p>
        <div className="keys">
          {KEY_ORDER.map((k) => (
            <button key={k} className="key" onClick={() => setDisplay(MESSAGES[k])}>
              {KEY_LABEL[k] ?? k}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
