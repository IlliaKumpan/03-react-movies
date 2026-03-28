import css from './App.module.css';
import { useState } from 'react';
import { type Votes } from '../../types/votes';
import type { VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';


export default function App() {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0
    });
    
    const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
    };
    
    const resetVotes = (): void => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    };
    const totalVotes = votes.good + votes.neutral + votes.bad;
    const canReset = totalVotes > 0;
    const positiveRate = totalVotes > 0 
    ? Math.round((votes.good / totalVotes) * 100) 
    : 0;

    return (
        <>
            <div className={css.App}>
                <CafeInfo />
                <VoteOptions
                    onVote={handleVote} 
                    onReset={resetVotes} 
                    canReset={canReset}
                />
                {totalVotes > 0 ? (
                <VoteStats
                    votes={votes} 
                    totalVotes={totalVotes} 
                    positiveRate={positiveRate}
                />
                ) : (
                <Notification />
                )}
            </div>
        </>
    );
}