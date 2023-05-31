
export function FilterWhatsappConversation(
  chats: IWhatsapp[]
): IWhatsappContacts[] {
  var list: IWhatsappContacts[] = [];

  chats.map((item: IWhatsapp) => {
    if (list.length === 0) {
      var contact: IWhatsappContacts = {
        name: item.contact_name,
        conversation: [item],
      };
      list.push(contact);
    } else {
      var found: boolean = false;
      list.map((people: IWhatsappContacts) => {
        if (people.name == item.contact_name) {
          people.conversation.push(item);
          found = true;
        }
      });
      if (found == false) {
        var contact: IWhatsappContacts = {
          name: item.contact_name,
          conversation: [item],
        };
        list.push(contact);
      }
    }
  });
  return list;
}

export function FilterInstagramConversation(
  chats: IInstagram[]
): IInstagramContacts[] {
  var list: IInstagramContacts[] = [];

  chats.map((item: IInstagram) => {
    if (list.length === 0) {
      var contact: IInstagramContacts = {
        name: item.contact_name,
        conversation: [item],
      };
      list.push(contact);
    } else {
      var found: boolean = false;
      list.map((people: IInstagramContacts) => {
        if (people.name == item.contact_name) {
          people.conversation.push(item);
          found = true;
        }
      });
      if (found == false) {
        var contact: IInstagramContacts = {
          name: item.contact_name,
          conversation: [item],
        };
        list.push(contact);
      }
    }
  });
  return list;
}

export function FilterTinderConversation(
  chats: ITinder[]
): ITinderContacts[] {
  var list: ITinderContacts[] = [];

  chats.map((item: ITinder) => {
    if (list.length === 0) {
      var contact: ITinderContacts = {
        name: item.contact_name,
        conversation: [item],
      };
      list.push(contact);
    } else {
      var found: boolean = false;
      list.map((people: ITinderContacts) => {
        if (people.name == item.contact_name) {
          people.conversation.push(item);
          found = true;
        }
      });
      if (found == false) {
        var contact: ITinderContacts = {
          name: item.contact_name,
          conversation: [item],
        };
        list.push(contact);
      }
    }
  });
  return list;
}

