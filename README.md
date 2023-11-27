# Domain Park
A simple domain parking page for your domains.

## Features
- Minimalistic design
- Responsive
- Easy to setup


## Deploy
### Cloudflare Pages
1. Fork this repository
2. Edit the .env file and replace the values with your own
2. Press the button below

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create/pages/provider/github)


3. Select your forked repository
4. Set framework preset to `Next.js`
5. Deploy
6. Go to functions tab and add `nodejs_compat` flags to both environments
7. Redeploy
8. Add all the domains you want to park in the Custom Domains tab