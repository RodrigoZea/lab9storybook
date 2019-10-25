import { create } from '@storybook/theming';

export default create({
    base: 'dark',

    colorPrimary: '#212626',
    colorSecondary: '#c9fdd7',

    // UI
    appBg: '#212626',
    appContentBg: '#181c1c',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'white',
    textInverseColor: 'rgba(0,0,0,0.9)',

    // Toolbar default and active colors
    barTextColor: '#4d5c70',
    barSelectedColor: '#c9fdd7',
    barBg: '#222831',

    // Form colors
    inputBg: 'white',
    inputBorder: '#c9fdd7',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://placehold.it/350x150',
});