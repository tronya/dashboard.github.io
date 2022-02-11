import {createContext, ReactNode, useContext, useState} from "react";

type GeolocationStatusesTypes = "denied" | "granted" | "prompt"

interface GeolocationProviderContext {
    status: null | GeolocationStatusesTypes;
    isLocationAllowed: boolean
}

export interface GeolocationProviderProps {
    children: ReactNode;
}

const GeolocationProviderContext = createContext<GeolocationProviderContext>({
    status: null,
    isLocationAllowed: false
})

const useNavigatorGeolocation = (): GeolocationProviderContext => {
    const [status, setStatus] = useState<GeolocationStatusesTypes | null>(null)
    const [isLocationAllowed, setIsLocationAllowed] = useState(false)

    navigator.permissions.query({name: 'geolocation'}).then((status) => {
        setStatus(status.state)
        setIsLocationAllowed(status.state === "granted");
    }).catch(() => {
        setStatus(null)
        setIsLocationAllowed(false)
    });

    return {
        status,
        isLocationAllowed
    }
}

export const GeolocationProvider = ({children}: GeolocationProviderProps) => {
    const geoNavigator = useNavigatorGeolocation();
    return (
        <GeolocationProviderContext.Provider value={geoNavigator}>{children}</GeolocationProviderContext.Provider>
    )
}

export const useGeolocationProvider = () => useContext(GeolocationProviderContext)

