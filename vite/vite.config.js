<<<<<<< HEAD
=======
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     base: "/",
//     server: {
//         host: true,
//         allowedHosts: true,
//         strictPort: true,
//         proxy: {
//             "/api": {
//                 target: "http://php:8000",
//                 changeOrigin: true,
//                 rewrite: path => path.replace(/^\/api/, ""),
//             },
//         },
//     },
// })

>>>>>>> c08c6cc (Add InfoDialog component to inform when new version)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
    plugins: [react()],
    base: "/",
    server: {
        host: true,
        allowedHosts: true,
        strictPort: true,
        proxy: {
            "/api": {
                target: "http://php:8000",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ""),
            },
        },
    },
=======
  plugins: [react()],
>>>>>>> c08c6cc (Add InfoDialog component to inform when new version)
})