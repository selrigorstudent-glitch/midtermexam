import { useEffect, useState } from 'react'

const FULL_NAME = 'RIGOR SEAN ERIC L.'
const DISPLAY_NAME = 'SEAN ERIC L. RIGOR'
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
  NAME: DISPLAY_NAME.toUpperCase(),
  SUBJ: SUBJECT.toUpperCase(),
}

// Same layout as the reference: 3 columns
const KEYPAD = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'NAME', '0', 'SUBJ']

// Keyboard shortcuts (N = NAME, S = SUBJ)
const SHORTCUTS = { N: 'NAME', S: 'SUBJ' }

export default function App() {
  const [display, setDisplay] = useState(TITLE)

  useEffect(() => {
    const onKeyDown = (e) => {
      const k = e.key.length === 1 ? e.key.toUpperCase() : e.key
      const id = SHORTCUTS[k] ?? k
      if (MESSAGES[id]) setDisplay(MESSAGES[id])
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="page">
      <div className="card">
        <h1 className="owner">
          {FULL_NAME} - {SECTION}
        </h1>

        <div className="screen">{display}</div>

        <div className="keypad">
          {KEYPAD.map((k) => (
            <button key={k} className="key" onClick={() => setDisplay(MESSAGES[k])}>
              {k}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
