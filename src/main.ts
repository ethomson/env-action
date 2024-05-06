import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    for (const key of Object.keys(process.env).sort()) {
      console.log(`${key}: ${process.env[key]}`)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
