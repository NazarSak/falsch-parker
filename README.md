# Getting Started


## Falsch Parker

First, install dependencies:
```bash
yarn 
```

Create `.env.local` and copy there the content from `.env.local.example` with values replaced by real ones.

Then just run the project:
```bash
yarn dev
```

Open http://localhost:3000 with your browser to see Falsch Parker web application.


## Sanity Studio

### Local development

We can easily work with Sanity Studio locally.
To do this just go to `/sanity` folder and install dependencies:
```bash
yarn
```

Then create `.env.local` and copy there the content from `.env.local.example` with values replaced by real ones.
To start Sanity Studio locally run:
```bash
yarn dev
```

Open http://localhost:3333 with your browser to see Sanity Studio.

### Deploy

To have access to Studio from anywhere we should deploy it.
Go to `/sanity` folder and just run:
```bash
yarn deploy
```

Now you can open https://falschparker.sanity.studio and work with the content from there.