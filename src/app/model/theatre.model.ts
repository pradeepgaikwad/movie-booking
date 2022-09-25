export declare class Theatre {
    theatreId : number;
    theatreName : string;
    theatreLocation : string;
    theatreCity : string;    
    operator? : Operator;
    screens : Screens[];
}

export declare class Operator {
    operatorId : string;
    name : string;
    phone : string;
    email : string;
    theatre : string;
}

export declare class Screens {
    screenId : string;
    screenname : string;
    timing : string;
    numberofseats : string;
    availableseats : string;
}