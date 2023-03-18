export default interface INewGroup {
    idUser: string,
    groupName: string,
    phone: bigint | null,
    whatsapp: string | null,
    website: string | null,
    discord: string | null,
    city: string,
    state: string,
    country: string,
}
