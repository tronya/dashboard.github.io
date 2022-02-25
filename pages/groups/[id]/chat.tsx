import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Chat from '../../../src/components/containers/Chats/chat.component';
import Loader from '../../../src/components/ui/Loader/loader';
import { useAuth } from '../../../src/hooks/useAuth';
import useGroupChat from '../../../src/hooks/useGroupChat';
import { Group } from '../../../src/models/groups.model';
import { setGroupChat } from '../../api/chats';
import { getGroups } from '../../api/group';
import GroupWrapper from './groupWrapper';

const GroupChat: FC = () => {
  const [groups, setGroup] = useState<Group[]>([]);
  const [currentGroup, setCurrentGroup] = useState<Group>();
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const elementRef = useRef<null | HTMLDivElement>(null);

  const { chats, loadingChats } = useGroupChat(currentGroup?.id);
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;

  useEffect(() => {
    elementRef.current?.scrollIntoView();
  }, []);

  useEffect(() => {
    getGroups(user?.uid)
      .then((groups) => setGroup(groups))
      .catch((error) => toast.error('Something wrong happened', error));
  }, [user?.uid]);

  useEffect(() => {
    const foundGroup = groups.find((group) => group.id === id);
    setCurrentGroup(foundGroup);
  }, [groups, id]);

  const handleSendMsg = (data: {
    content: string;
    timestamp: number;
    uid: string | undefined;
  }) =>
    setGroupChat(data, currentGroup?.id).catch((error) => toast.error(error));

  if (loadingChats) {
    <Loader />;
  }

  return (
    <GroupWrapper
      currentGroup={currentGroup}
      otherBreadcrumbs={[
        <Typography key="group-chat" color="text.primary">
          Chat
        </Typography>,
      ]}
    >
      <Box py={2} height="75vh">
        <Chat
          onRemoveMessage={() => {}}
          anchorEl={anchorEl}
          chats={chats}
          elementRef={elementRef}
          onAnchorEl={setAnchorEl}
          onSendMsg={handleSendMsg}
        />
      </Box>
    </GroupWrapper>
  );
};

export default GroupChat;
