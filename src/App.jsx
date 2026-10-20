import { useState } from 'react'
import './App.css'
import { cleanSequence, isValidDNA, countBases, gcContent, reverseComplement, transcribe, translate } from './dna'

function App() {
  const [sequence, setSequence] = useState('')

  const cleaned = cleanSequence(sequence)
  const valid = isValidDNA(cleaned)

  return (
    <div>
      <h1>DNA Sequence Analyzer</h1>
      <h2> CSE485 - Alonzo Hernandez</h2>
      <textarea
        rows={6}
        cols={60}
        placeholder="Paste a DNA sequence (A, T, G, C)"
        value={sequence}
        onChange={(e) => setSequence(e.target.value)}
      />
      
  {cleaned === '' ? (
        <p>Please enter a DNA sequence of your choosing.</p>
      ) : valid ? (
        <div>
     <p>Sequence: {cleaned}</p>
     <p>Length: {cleaned.length}</p>
     <p>
       A: {countBases(cleaned).A} | T: {countBases(cleaned).T} | G: {countBases(cleaned).G} | C: {countBases(cleaned).C}
     </p>
     <p>GC content: {gcContent(cleaned)}%</p>
     <p>Reverse complement: {reverseComplement(cleaned)}</p>
     <p>RNA (transcription): {transcribe(cleaned)}</p>
     <p>Protein: {translate(cleaned)}</p>
   </div>
      ) : (
        <p style={{ color: 'red' }}>Wrong: Can only use A , T, G, C for DNA sequences</p>
      )}
    </div>
  )
}


export default App