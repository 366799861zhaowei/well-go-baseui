import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    rollupOptions:{
        external:["vue"],
        output:{
            globals:{
                vue:"Vue"
            }
        }
    },
    lib:{
        entry:resolve(__dirname,'./packages/index.js'),
        name:'well-go-baseui'
    }
  }
})
