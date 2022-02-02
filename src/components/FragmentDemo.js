import React from 'react';
import Hello from './Hello';

function FragmentDemo() {
    const items = []
    return (
        <>
            <Hello />
        </>
    )

}

export default FragmentDemo;

/**
 * Fragments let you GROUP a list children lmnts
 *    without adding extra nodes to the DOM
 * https://youtu.be/bHdh1T0-US4
 */
