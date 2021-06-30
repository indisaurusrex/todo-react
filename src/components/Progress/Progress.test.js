import React from 'react';
import Progress from './Progress';
import { render, screen } from '@testing-library/react';
import regenerator from 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

test('% done changes when donePercent prop is changed', async () => {
    let donePercent = 50;
    render(<Progress donePercent={donePercent} />)
    const percent = screen.getByText("50% done");
    expect(percent).toBeInTheDocument();
    donePercent = 60;
    render(<Progress donePercent={donePercent} />);
    const percentNew = screen.getByText("60% done");
    expect(percentNew).toBeInTheDocument();
})