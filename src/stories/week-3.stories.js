// 컴포넌트 불러오기
import searchbar from '../homework/week-3/week-3';

// 기본 내보내기
// 컴포넌트 스토리 메타 정보(객체)
const storyMeta = {
  title: 'components/Button',
  component: searchbar,
  tags: ['autodocs'],
  // props 객체
  args: {
    loading: false,
    children: '최강! 8기를 응원해주세요! 😉',
  },
};

export default storyMeta;

// 컴포넌트 스토리 1+
// Figma Component Variants
export const Default = {};
Default.storyName = '기본 상태';

export const Loading = {
  args: {
    loading: true,
  },
};
Loading.storyName = '로딩 상태';
