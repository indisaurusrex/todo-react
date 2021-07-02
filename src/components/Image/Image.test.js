import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Image from './Image';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

describe('Image component when treeToggle prop is false', () => {
  afterEach(cleanup);

  it('renders weather 5 image when done percent is 100', () => {
    render(<Image donePercent={100} treeToggle={false} />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('weather-05');
  });

  it('renders weather 4 image when done percent is 70', () => {
    render(<Image donePercent={70} treeToggle={false} />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('weather-04');
  });

  it('renders weather 3 image when done percent is 40', () => {
    render(<Image donePercent={40} treeToggle={false} />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('weather-03');
  });

  it('renders weather 2 image when done percent is 20', () => {
    render(<Image donePercent={20} treeToggle={false} />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('weather-02');
  });

  it('renders weather 1 image when done percent is 10', () => {
    render(<Image donePercent={10} treeToggle={false} />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('weather-01');
  });
});

describe('Image component when treeToggle prop is true', () => {
  afterEach(cleanup);

  it('renders forestsun image when done percent is 100', () => {
    render(<Image donePercent={100} treeToggle />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('mountain');
  });

  it('renders forestpartialsun image when done percent is 75', () => {
    render(<Image donePercent={75} treeToggle />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('sun-through-trees');
  });

  it('renders forestrainbow image when done percent is 50', () => {
    render(<Image donePercent={50} treeToggle />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('rainbowforest');
  });

  it('renders forestrain image when done percent is 30', () => {
    render(<Image donePercent={30} treeToggle />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('rain');
  });

  it('renders forestfog image when done percent is 15', () => {
    render(<Image donePercent={15} treeToggle />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('fog');
  });

  it('renders foreststorm image when done percent is 10', () => {
    render(<Image donePercent={10} treeToggle />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('lightning');
  });
});
