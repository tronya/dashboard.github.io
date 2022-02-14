import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import {
  GeolocationStatusesTypes,
  useNavigatorGeolocation,
} from './useGeolocationProvider';

export interface Global {
  document: Document;
  window: Window | undefined;
  navigator: any;
}

declare const global: Global;

const mockPermissions = (state: GeolocationStatusesTypes) => ({
  query: jest.fn().mockImplementationOnce(() => Promise.resolve({ state })),
});

afterEach(cleanup);

describe('useNavigatorPermissions', () => {
  it('correctly returns an error when navigator is not available', () => {
    const { result } = renderHook(() => useNavigatorGeolocation());

    expect(result.current).toStrictEqual({
      isLocationAllowed: false,
      status: null,
    });
  });

  it('correctly returns the permission status granted', async () => {
    act(() => {
      global.navigator.permissions = mockPermissions('granted');
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useNavigatorGeolocation()
    );

    await waitForNextUpdate();

    expect(result.current).toStrictEqual({
      isLocationAllowed: true,
      status: 'granted',
    });
  });

  it('correctly returns the permission status denied', async () => {
    act(() => {
      global.navigator.permissions = mockPermissions('denied');
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useNavigatorGeolocation()
    );

    await waitForNextUpdate();

    expect(result.current).toStrictEqual({
      isLocationAllowed: false,
      status: 'denied',
    });
  });

  it('correctly returns the permission status prompt', async () => {
    act(() => {
      global.navigator.permissions = mockPermissions('prompt');
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useNavigatorGeolocation()
    );

    await waitForNextUpdate();

    expect(result.current).toStrictEqual({
      isLocationAllowed: false,
      status: 'prompt',
    });
  });
});
