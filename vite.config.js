import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/3D_portfolio/', // must match your repo name
  assetsInclude: ['**/*.gltf', '**/*.glb'] // ✅ allow 3D models
})
