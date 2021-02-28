import { createContext, useContext, useEffect, useState } from "react";
import { CountdownContextData, CountdownProviderProps } from "../types/CountdownContext.types";
import { ChallengeContext } from "./ChallengeContext";

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
    
    const { startNewChallenge } = useContext(ChallengeContext);

    const [ time, setTime ] = useState(.1 * 60);
    const [ isActive, setIsActive ] = useState(false);
    const [ hasFinished, setHasFinished ] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {

        setHasFinished(false);
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(.1 * 60);
    }

    useEffect(() => {

        if (isActive && time > 0) {

            countdownTimeout = setTimeout(() => {

                setTime(time - 1);
            }, 1000);
        }
        else if (isActive && time === 0) {

            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [ isActive, time ]);

    return (
        <CountdownContext.Provider 
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown
            }}
        >
            { children }
        </CountdownContext.Provider>
    );
}