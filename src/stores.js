import { writable } from "svelte/store";

export const data = writable({
    //page 0 (prematch)
    scout: '',
    eventId: '',
    matchNum: 0,
    teamNum: 0,
    autoStartPos: [],
    //page 1 (auto)
    autoUpperScore: 0,
    autoLowerScore: 0,
    moved: false,
    autoShootPos: [],
    //page 2 (teleop)
    teleUpperScore: 0,
    teleLowerScore: 0,
    teleShootPos: [],
    //page 3 (postgame)
    climbMethod: [],
    defended: false,
    defenseMethod: [],
    notes: ''
})

