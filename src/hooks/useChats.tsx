import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { RTDB } from '../firebase';
import { Chat } from '../models/chat.model';

interface UseChats {
  chats: Chat[];
  loadingChats: boolean;
  id: string | null;
}

const useChats = (
  selectedUserId: string,
  userId: string | undefined
): UseChats => {
  const [chatsState, setChatsState] = useState<UseChats>({
    loadingChats: false,
    chats: [],
    id: null,
  });

  useEffect(() => {
    setChatsState((prevState) => ({ ...prevState, loadingChats: true }));
    onValue(ref(RTDB, 'chats'), (snapshot) => {
      const chatsDataByUserId = snapshot.val()[userId!!];
      const chatsDataBySelectedUserId = snapshot.val()[selectedUserId!!];

      if (chatsDataByUserId) {
        const chatByUserId = chatsDataByUserId[selectedUserId];

        if (!chatByUserId) {
          setChatsState({ loadingChats: false, chats: [], id: null });
        } else {
          const result = Object.entries(chatByUserId)?.map(([_, value]) => ({
            ...(value as Chat),
          }));
          setChatsState({ loadingChats: false, chats: result, id: userId!! });
        }
      } else if (chatsDataBySelectedUserId) {
        const chatByUserId = chatsDataBySelectedUserId[userId!!];

        if (!chatByUserId) {
          setChatsState({ loadingChats: false, chats: [], id: null });
        } else {
          const result = Object.entries(chatByUserId)?.map(([_, value]) => ({
            ...(value as Chat),
          }));
          setChatsState({
            loadingChats: false,
            chats: result,
            id: selectedUserId,
          });
        }
      }
    });
  }, [selectedUserId, userId]);

  return chatsState;
};

export default useChats;
