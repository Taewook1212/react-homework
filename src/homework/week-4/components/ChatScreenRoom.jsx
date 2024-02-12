import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { pb, currentUser } from '../lib/pocketbase';
import MessageCard from './MessageCard';

const ChatScreenRoom = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userNameData, setUserNameData] = useState('');
  const messagesEndRef = useRef(null);

  // useParams()를 사용하여 동적 세그먼트에서 params 받아오기
  const { id: chatId } = useParams();
  // 메시지가 추가될 때마다 스크롤을 맨 아래로 이동

  let userData = '';
  Array.from(userNameData).map((item) => {
    userData = item.expand.users;
  });

  useEffect(() => {
    async function getAllChatName() {
      const chatName = await pb.collection('chatList').getFullList({
        sort: 'created',
        expand: 'users',
        filter: `id = '${chatId}'`,
      });
      setUserNameData(chatName);
    }

    async function getAllMessages() {
      const messages = await pb.collection('messages').getFullList(200, {
        sort: 'created',
        filter: `chat_id = '${chatId}'`,
      });
      setAllMessages(messages);
    }

    getAllMessages();
    const unsubscribe = pb.collection('messages').subscribe('*', async (e) => {
      await getAllMessages();
    });

    getAllChatName();

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [chatId]);

  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  async function sendMessage() {
    try {
      await pb.collection('messages').create({
        chat_id: chatId,
        author_id: currentUser.id,
        content: newMessage,
      });
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }
  }

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 폼이 제출되지 않도록 기본 동작을 막음
      sendMessage();
    }
  };

  return (
    <div className=" bg-sky-200 h-full ">
      <h1 className="sr-only">Chat Room Screen</h1>
      <header className="fixed w-full flex justify-between items-center p-4 border-b border-gray-300 shadow-md bg-sky-200">
        <div className="flex gap-3">
          <a href="/login">
            <img src="/assets/directionL.svg" alt="Back" />
          </a>
          <span>
            {/* {userData[0].email} 와 {userData[1].email} 의 채팅 */}
          </span>
        </div>
        <div className="flex gap-3">
          <img src="/assets/search.svg" alt="Search" />
          <img src="/assets/more.svg" alt="Settings" />
        </div>
      </header>
      <section className="h-screen overflow-auto py-[10%]">
        {allMessages.map((message) => {
          return (
            <MessageCard
              userData={userData}
              message={message}
              key={message.id}
              own={message.author_id === currentUser.id}
            >
              {message.content}
            </MessageCard>
          );
        })}
        {/* 맨 아래로 스크롤 이동을 위한 ref */}
        <div ref={messagesEndRef} />
      </section>
      <div className="fixed w-full flex items-center justify-between bottom-0">
        <button type="button" className="p-1 bg-gray-400 text-4xl text-white">
          +
        </button>
        <textarea
          value={newMessage}
          name="message"
          className="w-full p-3 resize-none overflow-hidden border-none focus:outline-none"
          rows={1}
          placeholder="Type your message here..."
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={sendMessage}
          type="submit"
          className="bg-yellow-300 p-3 hover:bg-gray-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreenRoom;
