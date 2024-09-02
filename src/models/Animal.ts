export default interface Animal {
    name: string;
    imageUrl: string;
    sex: string;
    dateOfBirth: Date;
    wasBought?: boolean;
    whereBought?: string;
    whenBought?: Date;
    boughtPrice?: number;
    whenCalved?: Date;
    calfWeight?: number;
    healthNotes?: string;
    disposition?: string;
    wasSold?: boolean;
    whereSold?: string;
    whenSold?: Date;
    soldPrice?: number;
    dateOfDeath?: Date;
}