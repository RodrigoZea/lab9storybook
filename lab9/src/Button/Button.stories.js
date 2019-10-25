import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const C = props => (
    <div style={{ width: '300px', height: '200px'}}>{props.children}</div>
)

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add(
        'Renders normally',
        () => {
            return (
                <Button iconClass="listIcon" tabText="List" btnClass="navigation-tab-item" active={0} />
            );
        },
        { notes: 'a very simple component' }
    )
    .add(
        'Renders normally with active',
        () => {
            return (
                <C>
                    <Button iconClass="listIcon" tabText="List" btnClass="navigation-tab-item" active={1} />
                </C>
            );
        },
        { notes: 'a very simple component' }
    )  
    .add(
        'Renders normally with active and has a dummy click',
        () => {
            return (
                <C>
                    <Button iconClass="listIcon" onClick={action('clicked')} tabText="List" btnClass="navigation-tab-item" active={1} />
                </C>
            );
        },
        { notes: 'a very simple component' }
    )  
    .add(
        'With adjustable text',
        () => {
            return (
                <C>
                    <Button iconClass="listIcon" tabText="List" btnClass="navigation-tab-item" active={boolean("is active")} />
                </C>
            );
        },
        { notes: 'a very simple component with text that can be changed' }
    )
