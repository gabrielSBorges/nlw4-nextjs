import { ReactNode } from "react"

export type Challenge = {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

export type ChallengesProviderProps = {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export type ChallengeContextData = {
    level: number; 
    currentExperience: number; 
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void; 
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}