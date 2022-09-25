export declare class MoviesInTheatre {
    moviesInTheatreId : string;
    movie1 : Movie;
    theatre1 : Theatre;
}

export declare class Theatre {
    theatreId : number;
    theatreName : string;
    theatreLocation : string;
    theatreCity : string;    
    operator? : Operator;
    screens : Screens[];  
}

export declare class Movie {
    movieId :string;
    name : string;
    category : string;
    dimension : string;
    duration : string;
    director : string;
    actor1 : string;
    actor2 : string;
    actor3 : string;
    language : string;
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