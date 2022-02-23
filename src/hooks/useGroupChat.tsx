import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { DataBaseModel } from '../../pages/api/api.model';
import { RTDB } from '../firebase';
import { Chat } from '../models/chat.model';

interface UseGroupChat {
  chats: Chat[];
  loadingChats: boolean;
}

const useGroupChat = (id: string | undefined): any => {
  const [groupChatState, setGroupChatState] = useState<UseGroupChat>({
    loadingChats: false,
    chats: [],
  });

  useEffect(() => {
    setGroupChatState((prevState) => ({ ...prevState, loadingChats: true }));
    onValue(ref(RTDB, `${DataBaseModel.GROUP_CHAT}/${id}`), (snapshot) => {
      const result = snapshot.val()
        ? Object.entries(snapshot.val())?.map(([_, value]) => ({
            ...(value as Chat),
          }))
        : [];
      setGroupChatState({ loadingChats: false, chats: result });
    });
    setGroupChatState((prevState) => ({ ...prevState, loadingChats: false }));
  }, [id]);

  return groupChatState;
};

export default useGroupChat;
