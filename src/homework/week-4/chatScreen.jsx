import SpriteScreen from './components/SpriteScreen';
import LoginScreen from './components/LoginScreen';
import ChatList from './components/ChatList';
import ChatScreenRoom from './components/ChatScreenRoom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* "useHistory" is replaced by "useNavigate", in "react-router-dom" v.6 */

function Exercise() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SpriteScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/chatList" element={<ChatList />} />
        <Route path="/chat-room/:id" element={<ChatScreenRoom />} />
      </Routes>
    </Router>
  );
}

export default Exercise;
