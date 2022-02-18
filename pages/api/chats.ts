import { Chat } from './../../src/models/chat.model';
import { push, ref } from 'firebase/database';
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
