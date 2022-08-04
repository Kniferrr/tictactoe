export interface UserState {
    scorex: number,
    scorey: number,
    win: null | string,
    nowx: boolean,
    cellx: number,
    celly: number,
    matrix: any[],
    users: any[];
    loading: boolean;
    error: null | string;
};



