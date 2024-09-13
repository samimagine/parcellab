export interface Checkpoint {
    status_details: string;
    event_timestamp: string;
    status: string;
    country_iso3: string;
    city: string;
}
export const getLatestCheckpoint = (checkpoints: Checkpoint[]): Checkpoint => {
    return checkpoints.reduce((latest, current) => {
        return new Date(current.event_timestamp) > new Date(latest.event_timestamp) ? current : latest;
    }, checkpoints[0]);
};