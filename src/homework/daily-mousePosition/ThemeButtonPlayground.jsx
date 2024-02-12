import { useState, useEffect } from 'react';

function ThemeButtonPlayground() {
  const [theme, setTheme] = useState('dark');

  const handleChangeTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const isDarkTheme = theme === 'dark';
  const backgroundColor = isDarkTheme ? 'bg-stone-950' : 'bg-white';
  const forgroundColor = isDarkTheme ? 'text-white' : 'text-stone-950';

  const classNames = `${backgroundColor} ${forgroundColor} p-6 rounded border border-solid border-shone-400`;

  return (
    <div className={classNames}>
      <button type="button" onClick={handleChangeTheme}>
        {theme === 'dark' ? '라이트' : '다크'} 테마
      </button>
    </div>
  );
}

export default ThemeButtonPlayground;
