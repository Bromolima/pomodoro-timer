export function getTimePercentage(secondsRemaining: number, duration: number): number {
    if (secondsRemaining === 0) {
        return 0
    }

    return Math.round(secondsRemaining / duration *100)
}