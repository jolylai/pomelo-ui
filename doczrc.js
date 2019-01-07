import { css } from 'docz-plugin-css';

export default {
  files: '**/*.{md,markdown,mdx}',
  src: './docs',
  plugins: [
    css({
      preprocessor: 'less',
      cssmodules: false,
    }),
  ],
};
