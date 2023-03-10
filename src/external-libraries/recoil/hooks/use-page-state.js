import { atom, useRecoilState } from 'recoil';

const pageState = atom({
    key: 'pageState',
    default: 'Home', // initial state
});

const usePageState = () => useRecoilState(pageState);

export default usePageState;
