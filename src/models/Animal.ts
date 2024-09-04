export default interface Animal {
    id: string;
    sex: string;
    dateOfBirth: Date;
    whenBought?: Date;
    boughtPrice?: number;
    whenCalved?: Date;
    calfWeight?: number;
    healthNotes?: string;
    disposition?: string;
    whenSold?: Date;
    soldPrice?: number;
    dateOfDeath?: Date;
}