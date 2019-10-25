import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Container from './Container';
import { storiesOf } from '@storybook/react';

const options = {
    range: true,
    min: 1,
    max: 4,
    step: 1,
};


storiesOf('Container', module)
    .add(
        'Renders normally',
        () => {
            return (<Container />);
        },
        { notes: 'a very simple container component' }
    )

storiesOf('Container', module)
    .addDecorator(withKnobs)
    .add(
        'Renders normally with togglable buttons',
        () => {
            return (<Container active={number("which one is active", 1, options, 'Group-ID1')}/>);
        },
        { notes: 'a very simple container component' }
    )
