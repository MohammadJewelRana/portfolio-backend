export type TCategory='Frontend' | 'Backend' | 'MERN';



export type TProject={
    projectName:string;
    image:string;
    liveClientLink?:string;
    liveServerLink?:string;
    githubClient?:string;
    githubServer?:string;
    category:TCategory;
    technology:string[];
    isDeleted: boolean;
}