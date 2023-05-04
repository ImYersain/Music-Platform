import { PlayerAction, PlayerActionTypes } from '../../types/player';
import { ITrack } from '../../types/tracks';

export const playTrack = ():PlayerAction => {
    return {type: PlayerActionTypes.PLAY}
}
export const pauseTrack = ():PlayerAction => {
    return {type: PlayerActionTypes.PAUSE}
}
export const setActiveTrack = (track: ITrack): PlayerAction => {
    return {type: PlayerActionTypes.SET_ACTIVE, payload: track}
}
export const setDurationTime = (time: number): PlayerAction => {
    return {type: PlayerActionTypes.SET_DURATION, payload: time}
}
export const setCurrentTime = (time: number): PlayerAction => {
    return {type: PlayerActionTypes.SET_CURRENT_TIME, payload: time}
}
export const setVolume = (time: number):PlayerAction => {
    return {type: PlayerActionTypes.SET_VOLUME, payload: time}
}