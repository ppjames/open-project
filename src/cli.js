import arg from 'arg'
import inquirer from 'inquirer'
import { getProyects, isNodeProject } from './directories'
import { openProject } from './main'
import path from 'path'
import { readdir } from 'fs/promises'


function parseArgumentsIntoOptions(rawArgs) {
  const args = arg({
    '--list': Boolean,
    '-l': '--list'
  }, {
    argv: rawArgs.slice(2)
  })

  return {
    list: args['--list'] || false
  }
}

async function promptForMissingOptions(options) {
  let projects = await getProyects()
  let questions = []
  console.log(options)
  if (options.list) {
    questions.push({
      type: 'list',
      name: 'project',
      message: 'select a project',
      choices: projects
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    ...options,
    node: await isNodeProject(answers.project),
    project: answers.project
  }
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)
  // console.log(options)
  await openProject(options)
}
