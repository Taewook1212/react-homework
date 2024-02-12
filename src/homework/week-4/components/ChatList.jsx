import { useState, useEffect } from 'react';
import useLoggedInState from '../../../hook/useLoggedInState';
import { pb, currentUser } from '../lib/pocketbase';
import ChatBoxComponent from './ChatCard';

const ChatList = () => {
  const [isLoggedIn, handleLogout] = useLoggedInState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [allChats, setAllChats] = useState([]);

  if (!allChats) {
    console.log('allChats ', allChats);
  }

  // 기존 채팅 List 나열하기
  useEffect(() => {
    const fetchData = async () => {
      const chats = await getChatWithUsers();

      setAllChats(chats);

      const unsubscribe = pb.collection('chatList').subscribe('*', async () => {
        const updatedChats = await getChatWithUsers();

        setAllChats(updatedChats);
      });

      return () => {
        pb.collection('chatList').unsubscribe('*');
        unsubscribe;
      };
    };
    fetchData();
  }, []);

  //채팅 collection 모든 정보 가져오기
  const getChatWithUsers = async () => {
    try {
      if (!currentUser || !currentUser.id) {
        return []; // currentUser가 없거나 id가 null인 경우 빈 배열 반환
      }

      const response = await pb.collection('chatList').getFullList({
        sort: 'created',
        expand: 'users',
        filter: `users ~ '${currentUser.id}'`,
        //  "users" 컬렉션에서 현재 사용자의 ID를 포함하는 항목을 찾는 것을 나타냅니다.
      });

      return response;
    } catch (error) {
      console.log('error', error);
    }
  };

  // 채팅 새로만들기
  const createChatWithUser = async () => {
    try {
      const otherUser = await pb
        .collection('users')
        .getFirstListItem(`email = '${newUserEmail}'`);

      await pb.collection('chatList').create({
        users: [currentUser.id, otherUser.id],
      });
    } catch (error) {
      console.log('error', error);
      alert('입력하신 사용자가 없습니다.');
    }
  };

  const handleSetNewUserEmail = (e) => {
    setNewUserEmail(e.target.value);
  };

  return (
    <div className="p-8 border">
      <div className="py-4 text-xl font-bold"> 채팅 </div>
      {allChats.map((chat) => {
        if (allChats === undefined || !allChats)
          alert('리스트안나와서 새로고침 눌러주세요..');
        return (
          <a key={chat.id} href={`chat-room/${chat.id}`}>
            <ChatBoxComponent chat={chat} />
          </a>
        );
      })}

      <span className="flex py-3 font-bold">채팅방 만들기</span>
      <div className="p-4 bg-gray-100 shadow rounded">
        <input
          aria-label="새로운 채팅만들기 위한 메일입력 "
          type="email"
          value={newUserEmail}
          placeholder="이메일을 입력해주세요"
          onChange={handleSetNewUserEmail}
        />
        <button
          className="bg-gray-200 rounded p-2 hover:bg-gray-300"
          onClick={createChatWithUser}
        >
          {' '}
          Create chat
        </button>
      </div>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="my-5 bg-gray-200 rounded p-2 hover:bg-gray-300"
        >
          로그아웃
        </button>
      ) : (
        // navigateTo('/login')
        ''
      )}
    </div>
  );
};

export default ChatList;
