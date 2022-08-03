export interface UserState {
    win: null | "x" | "y",
    nowx: boolean,
    cellx: number,
    celly: number,
    matrix: any[],
    users: any[];
    loading: boolean;
    error: null | string;
};



