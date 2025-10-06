import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Detecta repo para base do GitHub Pages quando buildar no GitHub Actions
const repository = process.env.GITHUB_REPOSITORY || '' // ex: "usuario/repositorio"
const repoName = repository.includes('/') ? repository.split('/')[1] : repository
const isUserSite = repoName.endsWith('.github.io')
const isCI = !!process.env.GITHUB_ACTIONS
const base = isCI ? (isUserSite ? '/' : `/${repoName}/`) : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
