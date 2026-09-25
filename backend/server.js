const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5001

app.use(cors())

app.get('/api/type/:idOrName', async (req, res) => {
  const { idOrName } = req.params

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${encodeURIComponent(idOrName)}/`,
    )
    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.message || 'PokéAPI request failed.',
      })
    }

    const { half_damage_to, double_damage_from } = data.damage_relations
    res.json({
      half_damage_to: half_damage_to.map(({ name }) => name),
      double_damage_from: double_damage_from.map(({ name }) => name),
    })
  } catch (error) {
    console.error('PokéAPI request failed:', error)
    res.status(502).json({ error: 'Could not reach PokéAPI.' })
  }
})

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})
