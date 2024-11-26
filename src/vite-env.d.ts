/// <reference types="vite/client" />

// The code below was used to set up environment variables, it
// was retrieved from https://vite.dev/guide/env-and-mode.html
interface ImportMetaEnv {
	readonly VITE_GOOGLE_LOGIN: string
  }
  
  interface ImportMeta {
	readonly env: ImportMetaEnv
  }