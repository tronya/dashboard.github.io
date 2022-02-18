import { Chat } from './../../src/models/chat.model';
import { push, ref, set } from 'firebase/database';
import { RTDB } from '../../src/firebase';
import { DataBaseModel } from './api.model';

export const setChats = (data: Chat) =>
  push(ref(RTDB, DataBaseModel.CHATS), data);
