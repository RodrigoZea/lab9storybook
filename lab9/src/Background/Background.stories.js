import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Background from './Background';
import { storiesOf } from '@storybook/react';

storiesOf('TitleBar', module)
    .add(
        'Renders normally',
        () => {
            return (<Background titleText="React Nav Bar" />);
        },
        { notes: 'a very simple component' }
    )

storiesOf('TitleBar', module)
    .addDecorator(withKnobs)
    .add(
    'With adjustable text',
    () => {
        const name = text('Name', 'Nav Bar Title');
        const content = `${name}`;

        return (<Background titleText={content} />);
    },
    { notes: 'a very simple component with text that can be changed' }
)

