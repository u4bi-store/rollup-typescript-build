import typescript from 'rollup-plugin-typescript';

export default {
    entry: './src/App.ts',
    format: 'umd',
    moduleName: 'U4bi',
    // sourceMap: 'inline',
    dest: 'dist/app.js',
    plugins: [
        typescript()
    ]
}