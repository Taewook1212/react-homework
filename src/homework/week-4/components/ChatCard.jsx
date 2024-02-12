/**
 *
 * @param {allChats.expad.users} param0
 * @returns
 */
function ChatBoxComponent({ chat = '' }) {
  const chatUserNames = getChatUserNames({ chat });
  return (
    <div className="p-4 bg-gray-100 shadow rounded mb-2">
      <h2 className="text-large font-semibold">🗨 채팅방: {chatUserNames}</h2>
    </div>
  );
}

function getChatUserNames({ chat }) {
  let users = chat.expand.users;
  return users.map((user) => user.email).join(' 💌  ');
}

export default ChatBoxComponent;
