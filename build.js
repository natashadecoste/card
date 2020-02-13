'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.magentaBright('               Natasha DeCoste ') + chalk.gray('(she/her)'),
  work: chalk.white('Front End Developer & Designer at IBM'),
  // twitter: chalk.gray('https://twitter.com/') + chalk.cyan('codebunny2'),
  npm: chalk.gray('https://npmjs.com/') + chalk.cyan('~natashadecoste'),
  github: chalk.gray('https://github.com/') + chalk.cyan('natashadecoste'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('natashadecoste'),
  web: chalk.cyan('https://natashadecoste.github.io'),
  npx: chalk.magentaBright('npx natashadecoste'),
  labelWork: chalk.white.bold('       Work:'),
  // labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               webing + newline + // data.labelWeb + data.web
               working + newline + newline + // data.labelWork + data.work
               // twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               npming + newline + newline + // data.labelnpm + data.npm
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.cyan(boxen(output, options)))
