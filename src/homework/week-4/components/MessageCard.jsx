import { currentUser } from '../lib/pocketbase';
import timeAgo from '../lib/timeAgo';

function MessageCard({ userData, message, own, children }) {
  let author = '';
  let other = '';
  Array.from(userData).map((item) => {
    currentUser.id === item.id ? (author = item) : (other = item);
  });

  return (
    <div className={`flex flex-col ${own ? 'items-end' : 'items-start'} m-4`}>
      <div>{`${own ? author.email : other.email}`}</div>

      <div>
        {own ? (
          <div className="flex gap-2 items-end">
            <span className="text-[13px]">{timeAgo(message.created)}</span>
            <MessageContent own={own}>{children}</MessageContent>
          </div>
        ) : (
          <div className="flex gap-2 items-end">
            <MessageContent own={own}>{children}</MessageContent>
            <span className="text-[13px]">{timeAgo(message.created)}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function MessageContent({ children, own }) {
  return (
    <div
      className={` min-h-8  max-w-sm overflow-hidden py-1 px-2  rounded ${
        own ? 'bg-yellow-300 text-right' : 'bg-blue-50 text-left'
      }`}
    >
      {children}
    </div>
  );
}

export default MessageCard;
