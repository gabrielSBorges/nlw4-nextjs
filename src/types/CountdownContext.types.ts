import { ReactNode } from "react"

export type CountdownProviderProps = {
    children: ReactNode;
}

export type CountdownContextData = {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}