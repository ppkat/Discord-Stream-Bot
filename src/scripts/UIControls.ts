import { keyTap } from 'robotjs'

export type Action = 'rewind' | 'arrow_left' | 'pause_button' | 'arrow_right' | 'fast_forward'

export function streamAction(action: Action): void {
    const keysToActions = {
        rewind: 's',
        arrow_left: 'z',
        pause_button: 'space',
        arrow_right: 'x',
        fast_forward: 'd'
    }

    console.log(keysToActions[action])
    keyTap(keysToActions[action])
}