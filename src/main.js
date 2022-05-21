import { execute, executeCommand } from './commands'
import path from 'path'

export async function openProject(options) {
  try {
    console.log('[openProjectFn]')
    console.log('Options', options)

    // const path_main = process.env.DIRECTORY
    const path_main = path.join(process.env.DIRECTORY_MAIN,  options.project)

    console.log('DIRECTORIO', path_main)
    process.chdir(path_main)
    const result = await executeCommand('npm.cmd', ['run dev'], {  stdio: "inherit", shell: true })
    // const result = await executeCommand('cmd', ['/c', 'npm start'], {  stdio: "inherit", shell: true })
    // const result = await execute('npm run dev')

    console.log(result)
    // const result = await execute(path, 'ls')
    // let result = execute()
    // result.then(response => console.log(response))
    // execute()
  } catch (e) {
    console.error('>>>>> ERROR')
    console.error(e)
  }
}
