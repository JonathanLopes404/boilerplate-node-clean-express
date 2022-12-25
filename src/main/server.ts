import env from './config/env'

const initApp = async (): Promise<void> => {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => console.log(`Server is running on http://localhost:${env.port}`))
}

initApp()
