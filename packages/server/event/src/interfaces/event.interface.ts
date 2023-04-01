export default interface INewEvent {
    idUser: string;
    contact: string;
    eventName: string;
    eventLocation: string;
    eventDate: Date;
    eventCost: bigint;
    moreInfos: string;
}
