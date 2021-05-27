import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8008,
    //host: 'yoursubdomain.betabuild.dev',
    hmr: {
      //host: 'yoursubdomain.betabuild.dev',
      port: 8008,
      protocol: 'ws' // switch to 'wss'
    }
  }
})
