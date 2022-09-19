import { render, act, screen, cleanup } from '@testing-library/react';
import Clock from '.';

/** 2022-09-18T08:52:10Z */
const dummyUnixtime = 1663491130; // [sec]
/** 2022-09-18T08:52:10.000Z */
const dummyTime = dummyUnixtime * 1000;

describe('Clock', () => {
  beforeEach(() => {
    const mockDate = new Date(dummyTime);
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    jest.useRealTimers();
    cleanup();
  });
  it('Locale', () => {
    render(<Clock />);

    expect(screen.getByText(new Date(dummyTime).toLocaleString())).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText(new Date(dummyTime + 1000).toLocaleString())).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(screen.getByText(new Date(dummyTime + 1000).toLocaleString())).toBeInTheDocument();
  });
  it('UTC ISOFormat', () => {
    render(<Clock useLocale={false} />);

    expect(screen.getByText(new Date(dummyTime).toISOString())).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText(new Date(dummyTime + 1000).toISOString())).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(screen.getByText(new Date(dummyTime + 1000).toISOString())).toBeInTheDocument();
  });
  it('with style', () => {
    render(<Clock data-testid="style-test" useLocale style={{ color: 'red', fontWeight: 'bold' }} />);
    expect(screen.getByTestId('style-test')).toHaveTextContent(new Date(dummyTime).toLocaleString());

    expect(screen.getByTestId('style-test')).toHaveStyle({ color: 'red', fontWeight: 'bold' });
  });
});
