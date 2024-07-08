# Setting up automatic build + publish pipeline for my Angular GitHub Pages website

### Working with CI/CD pipelines during my co-op work term at [Ontario Power Generation (OPG)](https://www.opg.com/) had me thinking, why don't I create one for my personal website?

I'm sure I'm not the only one that was intimidated by the terms "CI/CD" and "pipeline" as a CI/CD pipeline newbie. I am by no means an expert and I still have a lot more to learn, but with my newfound knowledge and experience, I feel confident enough to tackle the challenge of setting one up for my website :)

## What is a pipeline?

Pipelines are an automated set of tasks. The simplest way to describe a pipeline is that it is like a function. You feed it an input (files such as your source code) and it runs through the steps specified in some configuration file at specified times or based on certain triggers, often producing an output (the artifact). You can think of your configuration file as a recipe book. Most projects use more than one pipeline, and pipelines often incorporate other pipelines.

A common use case of a pipeline is to test, build and publish an application when there is a new commit on the main branch of a repository. The artifact is what is uploaded on the server to be served to your would-be users.

The most obvious advantage of pipelines is facilitating a faster development cycle by automating repetitive tasks and seamlessly integrating new changes. After learning how they work, you'll come to find that they aren't very hard to set up at all and they can end up saving you a lot of time in the long run.

## Original setup

No matter what web browser you prefer (Chrome, Safari, Edge...) or what platform you are on (desktop, mobile...), browsers only read HTML, CSS and Javascript.

However in my case and as in with many other sites built with frontend frameworks (such as Angular or React) and CSS postprocessors (such Sass), they require your source code to go through a build process. This build process turns the Angular or React code into plain ol' HTML, CSS and Javascript readable by your everyday browser.

My personal website (you are on right now) is built using Angular 17 as of right now and I currently publish it manually. To build and publish my website, I run `npm run build` in the command line. This reads `package.lock` config file in my project root, which sees that the `build` script runs `ng build`, which reads `angular.json` to build my Angular project. In fact, this is a pipeline in of itself that we will be incorporating within our build + publish pipeline, thank you `ng new` for setting this up for us automatically :)

That's great and all, but I still have to manually `npm run build` and push the build files to my repository every time I make changes in order for my site to be published by GitHub pages.

## Goal: I want to use GitHub Actions to automatically build my website when I merge new changes into the `main` brain.

> Spending 1 hour to save time doing a 1 minute task, isn't that what programmers do 🤓
> If I make over 60 changes to my website, it would have been well worth it! — Me, 2024

Let's start with GitHub's Node workflow template and break it down to create our own workflow.

```
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

This template takes care of the build section of the pipeline.

The way I see setting up a pipeline for your code repository, it's what you would run in your command line from a fresh install of an operating system (ubuntu-latest).

Let's break it down. Mind the indentation and syntax.

### Trigger

```
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
```

These lines describe the workflow running on pushes and pull requests to the main branch.

### Jobs

Under `jobs:` are the big steps for the workflow.

Our first job is called `build`.

`runs-on: ubuntu-latest` specifies the operating system used for this job.

```
strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/
```

Matrix is used to run multiple jobs with different variables, which is useful for testing projects across different versions. For our uses, we only need one version, so we can get rid of these lines.

#### Steps

`steps` are described under a job.

A step is denoted by a "-" character, followed by either "uses" or "run", or "name" followed with "uses" or "run" on the next line. Additional parameters can be specified afterwards.

For example,
`- uses: actions/checkout@v4` is one step. It uses the workflow specified at the repository `actions/checkout`
`- run: npm ci` is one step. It runs the command `npm ci` in the command line

```
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v3
  with:
	node-version: ${{ matrix.node-version }}
	cache: 'npm'
```

The following is also one step, named "Use Node.js ${{ matrix.node-version }}" and uses the workflow specified at the repository `actions/setup-node` with parameters.

To see more details about what kind of actions are available as well as their documentation, see https://github.com/actions.

### Well, that's it?

Pretty much! Once you understand how a YML file is laid out, it's pretty easy to piece one together yourself. The GitHub Actions interface has detailed error messages that makes it fairly easy to debug and fix accordingly.

For the `deploy` job, I followed this article by GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages.

Here is the final result:

```
name: Build + Publish

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v4


    - name: Use Node.js 20
      uses: actions/setup-node@v3
      with:
        node-version: 20
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: npm run build
      run: npm run build

    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: docs/browser

  deploy:
    environment:
      name: github-pages
      url: ${{steps.deployment.outputs.page_url}}
    runs-on: ubuntu-latest
    needs: build

    permissions:
      pages: write
      id-token: write

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Quick breakdown:

1. Checkout repository's main branch
2. Setup Node.js 20
3. Install node dependencies
4. Run npm build script (see package.lock and angular.json)
5. Specify location of the artifact (Angular 17 builds site content to a `browser` folder)
6. Deploy artifact to GitHub Pages

#### My checklist for an Angular GitHub pages pipeline (or any pipeline).

1. Figure out how you would deploy manually. What kind of commands would you have to run in the command line?
2. Set up the .yml config file. This is your recipe book.
3. Run the workflow. Verify that the build artifact is correct.

Like with all things coding, the best way to figure it out is to run it.

## See the final config file here:

https://github.com/gcheang/gcheang.github.io/blob/main/.github/workflows/pipeline.yml
