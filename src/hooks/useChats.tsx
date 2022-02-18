import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { RTDB } from '../firebase';
import { Chat } from '../models/chat.model';

interface UseChats {
  chats: Chat[];
  loadingChats: boolean;
}

const useChats = (): UseChats => {
  const [chatsState, setChatsState] = useState<UseChats>({
    loadingChats: false,
    chats: [],
  });

  useEffect(() => {
    setChatsState((prevState) => ({ ...prevState, loadingChats: true }));
    onValue(ref(RTDB, 'chats'), (snapshot) => {
      const result = Object.entries(snapshot.val())?.map(([_, value]) => ({
        ...(value as Chat),
      }));
      setChatsState({ loadingChats: false, chats: result });
    });
  }, []);

  return chatsState;
};

export default useChats;
