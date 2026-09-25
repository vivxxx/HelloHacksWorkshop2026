Backend code lives in this folder.

## Run the server

From this directory, run:

```sh
npm run dev
```

The server listens on port `5001` by default. The type endpoint takes a Pokédex
type ID or name and returns only the names in `half_damage_to` and
`double_damage_from`. For example:

```text
http://localhost:5001/api/type/fire
```

You can use an ID in place of `fire`, such as `/api/type/10`. Set the `PORT`
environment variable to use a different port.

The response shape is:

```json
{
  "half_damage_to": ["fire", "water"],
  "double_damage_from": ["water", "ground"]
}
```
