import { useState, useEffect } from 'react';
import { debounce } from '../lib/utils/debounce';
function useMousePosition(debounceTime = 0) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMoveDebounced = debounce((e) => {
      const nextPostion = {
        x: e.clientX,
        y: e.clientY,
      };

      setPosition(nextPostion);
    }, debounceTime);

    const handleMove = (e) => {
      // 생성된 디바운스된 함수를 호출
      handleMoveDebounced(e);
    };

    globalThis.addEventListener('mousemove', handleMove);
    return () => {
      globalThis.removeEventListener('mousemove', handleMove);
    };
  }, [debounceTime]);
  return [position.x, position.y];
}

export default useMousePosition;
