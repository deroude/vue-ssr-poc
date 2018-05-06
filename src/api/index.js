// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

const logRequests = !!process.env.DEBUG_API

const api = createAPI({
  space: 'pkc9ejzq5fl6',
  accessToken: '2b8904ea3dfdb590c1a7d5a269877ca7399c1eee954cc7d2698977bda1ffae53'
})

const mapToData = (ctf) => ctf.items.map(it => it.fields);

export const getAllThemes = api.getEntries({ content_type: "investmentTheme", include: 5 })
  .then(mapToData)
  .catch(err => console.log("contentful call failed", err));
