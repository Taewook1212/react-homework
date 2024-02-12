import { useState, useEffect } from 'react';
import useMousePosition from '@/hook/useMousePosition';
import ThemeButtonPlayground from '../daily-mousePosition/ThemeButtonPlayground';

function Exercise() {
  return (
    <>
      <MousePositionPlaygorund />
    </>
  );
}

function MousePositionPlaygorund() {
  const [x, y] = useMousePosition(500);

  return (
    <div className="flex justify-center items-center  h-screen gap-10">
      <div className="px-5 p-2 bg-blue-600 text-white rounded-xl">x: {x}</div>
      <div className="px-5 p-2 bg-blue-600 text-white rounded-xl ">y: {y}</div>
      <ThemeButtonPlayground />
    </div>
  );
}

export default Exercise;
