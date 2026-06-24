import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/copilotkit': {
        target: 'https://dojo.ag-ui.com/api/copilotkit/microsoft-agent-framework-dotnet',
        changeOrigin: true,
      }
    }
  }
});
