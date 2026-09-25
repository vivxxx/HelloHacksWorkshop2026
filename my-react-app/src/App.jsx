import { useState } from 'react'

function App() {
  const [selectedType, setSelectedType] = useState('')
  const types = [
    ['Fire', '🔥', 'from-orange-50 to-rose-100', 'text-orange-700'],
    ['Water', '💧', 'from-sky-50 to-blue-100', 'text-blue-700'],
    ['Grass', '🌿', 'from-lime-50 to-green-100', 'text-green-700'],
    ['Ground', '⛰️', 'from-amber-50 to-yellow-100', 'text-amber-800'],
  ]

function getMatchup(type) {
  // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
  return `Fake API response: You are fighting a ${type}-type Pokémon.`;
}

function handleTypeClick(type) {
  const response = getMatchup(type);
  setResult(response);
}

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f7f1] px-5 py-12 text-slate-800">
      <div aria-hidden="true" className="absolute -left-24 -top-28 -z-10 size-80 rounded-full bg-red-200/50 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 -right-20 -z-10 size-96 rounded-full bg-emerald-200/60 blur-3xl" />

      <section className="w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-[0_24px_80px_-28px_rgba(30,64,55,0.32)] backdrop-blur sm:rounded-[2.5rem]">
        <div className="h-2 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300" />
        <div className="p-7 sm:p-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl bg-red-50 text-2xl shadow-inner" aria-hidden="true">⚡</span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-500">Trainer’s guide</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-400">Pokémon battle assistant</p>
            </div>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Who are you up against?</h1>
          <p className="mt-2 leading-relaxed text-slate-500">Choose their Pokémon type to get started.</p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {types.map(([type, icon, colors, textColor]) => (
            <button
              key={type}
              onClick={() => handleTypeClick(type.name)}
              aria-pressed={selectedType === type}
              className={`flex min-h-24 items-center gap-3 rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${selectedType === type ? 'border-slate-800 bg-slate-50 shadow-[0_0_0_2px_#1e293b]' : 'border-slate-100 bg-white'} `}
              type="button"
            >
                <span className={`grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-xl ${colors}`} aria-hidden="true">{icon}</span>
                <span className={`font-bold ${textColor}`}>{type}</span>
            </button>
          ))}
          </div>

          <div className="mt-7 min-h-14 rounded-2xl bg-slate-50 px-4 py-3 text-center" aria-live="polite">
            {selectedType ? (
              <p className="font-semibold text-slate-700">Selected type: <span className="text-red-600">{selectedType}</span></p>
            ) : (
              <p className="text-sm text-slate-400">Your selection will appear here</p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
