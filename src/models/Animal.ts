export default interface Animal {
    _id: string ;//add_
    name: string;
    //herdBookName?: string;//here was number
    sex?: string;
    importantEvents?: string;
    details?: string;
    veterinaryNotes?: string;
    ownerId: string;//just added these two
    ownerEmail: string;
}

