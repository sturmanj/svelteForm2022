import { writable } from "svelte/store";
 
export const data = writable({
    //page 0 (prematch)
    scout: null,
    eventId: null,
    matchNum: null,
    teamNum: null,
    autoStartPos: null,
    //page 1 (auto)
    autoUpperScore: null,
    autoLowerScore: null,
    moved: null,
    autoShootPos: null,
    //page 2 (teleop)
    teleUpperScore: null,
    teleLowerScore: null,
    teleShootPos: null,
    //page 3 (postgame)
    climbMethod: null,
    defended: null,
    cargoMethod: null,
    defenceMethod: null,
    notes: null
})

