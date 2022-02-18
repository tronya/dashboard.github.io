import { Chat } from './../../src/models/chat.model';
import { push, ref, remove } from 'firebase/database';
import { RTDB } from '../../src/firebase';
import { DataBaseModel } from './api.model';

export const setChats = (
  selectedUserId: string | undefined,
  userId: string | undefined,
  data: Chat,
  id: string | null
) => {
  if (id === selectedUserId) {
    return push(
      ref(RTDB, `${DataBaseModel.CHATS}/${selectedUserId}/${userId}`),
      data
    );
  }

  return push(
    ref(RTDB, `${DataBaseModel.CHATS}/${userId}/${selectedUserId}`),
    data
  );
};

export const removeMessageByKey = (
  selectedUserId: string | undefined,
  userId: string | undefined,
  id: string | null,
  key: string | undefined
) => {
  if (id === selectedUserId) {
    return remove(
      ref(RTDB, `${DataBaseModel.CHATS}/${selectedUserId}/${userId}/${key}`)
    );
  }

  return remove(
    ref(RTDB, `${DataBaseModel.CHATS}/${userId}/${selectedUserId}/${key}`)
  );
};
