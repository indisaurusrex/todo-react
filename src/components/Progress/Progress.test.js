import React from 'react';
import { render, screen } from '@testing-library/react'; 
import Progress from './Progress';

describe('Progress', () => {
    it('shows the progress on a visual indicator', () => {
        render(<Progress donePercent={40} />)
        const indicator = screen.getByRole('progressbar');
        expect(indicator).toHaveAttribute('aria-valuenow', '40');
    })
    
    it('shows the percent done on the screen', () => {
        render(<Progress donePercent={30} />)
        const percentDone = screen.getByText('30% done');
        expect(percentDone).toBeInTheDocument();
    })
})
