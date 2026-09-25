import { useState } from 'react'

function App() {
  const [selectedType, setSelectedType] = useState('')
  const types = [
    ['Fire', 'bg-orange-400'],
    ['Water', 'bg-sky-400'],
    ['Grass', 'bg-emerald-400'],
    ['Ground', 'bg-amber-400'],
  ]

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d10] px-5 py-12 text-zinc-100">
      <section className="w-full max-w-md rounded-2xl border border-zinc-800 bg-[#121519] p-7 shadow-2xl shadow-black/30 sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Pokémon · Battle assistant</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight">Choose a type</h1>
        <p className="mt-2 text-sm text-zinc-400">What type are you facing?</p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {types.map(([type, accent]) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              aria-pressed={selectedType === type}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200 ${selectedType === type ? 'border-zinc-500 bg-zinc-800 text-white' : 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800'}`}
              type="button"
            >
              <span className={`size-2 rounded-full ${accent}`} aria-hidden="true" />
              {type}
            </button>
          ))}
        </div>

        <p className="mt-6 min-h-5 border-t border-zinc-800 pt-4 text-sm text-zinc-400" aria-live="polite">
          {selectedType ? <>Selected type: <span className="font-medium text-zinc-100">{selectedType}</span></> : 'Select a type to continue.'}
        </p>
      </section>
    </main>
  )
}

export default App
