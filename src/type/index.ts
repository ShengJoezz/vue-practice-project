export interface personInter {
    name : string ,
    age : number ,
    id : string 
}
export type persons = Array<personInter>

export interface Class{
    name:string ,
    data:number,
    teacher:string
}
export type ClassList=Class[]