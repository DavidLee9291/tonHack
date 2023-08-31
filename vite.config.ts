import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	base:'/tonHack/',
	// basicSsl()은 로컬에서 https를 실행하기 위함. 필요 없으면 삭제 후 실행
	plugins: [react(), nodePolyfills(), tsconfigPaths()],
	// plugins: [react(), nodePolyfills(), tsconfigPaths(), basicSsl()],
	resolve: {
		alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
	},
	build: {
		chunkSizeWarningLimit: 4000,
		rollupOptions: {
			external: ['/src.*/'],
			output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split('.').pop();
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = 'img';
					}
					return `assets/${extType}/[name]-[hash][extname]`;
				},
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
			},
		},
	},
});
