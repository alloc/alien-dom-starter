/// <reference types="vite/client" />
import { App } from 'App'

queueMicrotask(() => {
	document.body.append(<App />)
})
