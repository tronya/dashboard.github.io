import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import useDetectDeviceAndOS from './useDetectDeviceAndOS';

export type GeolocationStatusesTypes = 'denied' | 'granted' | 'prompt';

interface GeolocationProviderContext {
  status: null | GeolocationStatusesTypes;
  isLocationAllowed: boolean;
}

export interface GeolocationProviderProps {
  children: ReactNode;
}

const GeolocationProviderContext = createContext<GeolocationProviderContext>({
  status: null,
  isLocationAllowed: false,
});

interface NavigatorState extends GeolocationProviderContext {
  status: null | GeolocationStatusesTypes;
  isLocationAllowed: boolean;
}

const initialState: NavigatorState = {
  status: null,
  isLocationAllowed: false,
};

export const useNavigatorGeolocation = (): NavigatorState => {
  const [context, setContext] = useState<NavigatorState>(initialState);

  const router = useRouter();
  const { browser, OS } = useDetectDeviceAndOS();

  useEffect(() => {
    if (window && window.navigator && window.navigator.permissions) {
      window.navigator.permissions
        .query({ name: 'geolocation' })
        .then((status: PermissionStatus) => {
          status.onchange = () => router.reload();
          setContext({
            status: status.state,
            isLocationAllowed: status.state === 'granted',
          });
        })
        .catch(() => {
          setContext({
            status: null,
            isLocationAllowed: false,
          });
        });
    } else if (browser && OS) {
      setContext({
        status: 'granted',
        isLocationAllowed: true,
      });
    }
  }, []);

  return context;
};

export const GeolocationProvider = ({ children }: GeolocationProviderProps) => {
  const geoNavigator = useNavigatorGeolocation();
  return (
    <GeolocationProviderContext.Provider value={geoNavigator}>
      {children}
    </GeolocationProviderContext.Provider>
  );
};

export const useGeolocationProvider = () =>
  useContext(GeolocationProviderContext);
