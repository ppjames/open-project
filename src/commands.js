// import { exec } from 'child_process'
const { spawn } = require('child_process');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// export async function execute(command) {
//   return await exec(command)
// }

// export function execute(command) {
//   return new Promise((resolve, reject) => {
//     exec("ls", (error, stdout, stderr) => {
//       if(error || stderr) {
//         reject(error || stderr)
//       } else {
//         resolve(stdout)
//       }
//     })
//   })
// }

export async function execute(command) {
  const { stdout, stderr } = await exec(command);
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}

export function executeCommand(command) {
  return new Promise((resolve, reject) => {
    const result = spawn(command);

    result.stdout.on('data', (data) => {
      console.log(data.toString());
      resolve(data)
    });

    result.stderr.on('data', (data) => {
      console.error(data.toString());
      reject(data)
    });

    result.on('exit', (code) => {
      console.log(`Child exited with code ${code}`);
      reject(code)
    });
  })
}




