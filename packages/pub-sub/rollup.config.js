import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import clear from 'rollup-plugin-clear'

const name = 'pubsubLib'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.cjs.min.js',
        format: 'cjs',
        plugins: [
          terser()
        ]
      },
      {
        file: 'dist/index.esm.js',
        format: 'es'
      },
      {
        file: 'dist/index.esm.min.js',
        format: 'es',
        plugins: [
          terser()
        ]
      },
      {
        file: 'dist/index.global.js',
        format: 'iife',
        name
      },
      {
        file: 'dist/index.global.min.js',
        format: 'iife',
        name,
        plugins: [
          terser()
        ]
      },
      {
        file: 'dist/index.min.js',
        format: 'umd',
        name,
        plugins: [
          terser()
        ]
      }
    ],
    plugins: [
      typescript(),
      clear({ targets: ['./dist'] })
    ]
  }
]