import { configure, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'
import yourTheme from './yourTheme'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);

addParameters({
    options: {
        theme: yourTheme,
    },
})