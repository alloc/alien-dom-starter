import { defineConfig } from 'vite'

import alienDOM from '@alien-dom/vite'
import webfontDownload from 'vite-plugin-webfont-dl'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [alienDOM(), tsconfigPaths(), webfontDownload()],
})
