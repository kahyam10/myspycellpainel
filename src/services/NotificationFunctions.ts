export function RemoveLast(List: IUpdate[]): IUpdate[] {
  return List.slice(0, List.length - 1);
}

export function funRemoveNotification(item: IUpdate, List: IUpdate[]): IUpdate[] {
  return List.filter((x: IUpdate) => x.date_time != item.date_time);
}

export function funAddNotification(item: IUpdate, List: IUpdate[]): IUpdate[] {
  if (List.length < 20) {
    List.unshift(item);
  } else {
    List = RemoveLast(List);
    List.unshift(item);
  }
  return List;
}

export function funUpdateNotification(item: IUpdate, List: IUpdate[]): IUpdate[] {
  List.map((it: IUpdate) => {
    if (it.date_time == item.date_time) {
      it = item;
    }
  });
  return List;
}
