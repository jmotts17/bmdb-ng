import { stringify } from "@angular/compiler/src/util";

export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: Date;

    constructor(id:number = 0, firstName:string = "", last:string ="", gender:string ="", birthDate:Date = new Date()){
        this.id = id;
        this.firstName = firstName;
        this.lastName = this.lastName;
        this.gender = gender;
        this.birthDate = birthDate;
    }
}