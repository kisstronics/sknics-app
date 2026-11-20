/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ROOTS_URL?: string;
  readonly VITE_APP_BETWEEN_URL?: string;
  readonly VITE_APP_CLAW_URL?: string;
  readonly VITE_APP_FINGOAT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
