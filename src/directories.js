import path from 'path'
import { readdir } from 'fs/promises'
import { sum } from './testImport'

const directory =  path.normalize(process.env.DIRECTORY_MAIN)
const valid_files = ['node_modules', 'package.json']

export async function getProyects() {
	try {
		console.log(sum(10, 1))
		return await readdir(directory)
	} catch (e) {
		console.error(e)
		process.exit(1)
	}
}

export async function isNodeProject(nameDirectory) {
  let pathDirectory = path.join(process.env.DIRECTORY_MAIN, nameDirectory)
  let files = await readdir(pathDirectory)
  console.log('Files', files)
  return valid_files.every(fileName => files.includes(fileName))
}
