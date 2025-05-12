import { atom, type AtomEffect } from "recoil";

// 로컬스토리지 효과
const localStorageEffect = <T>(key: string): AtomEffect<T> => 
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: T) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

// 상태 정의
interface ThemeState {
  darkMode: boolean;
}

// atom 정의
export const themeState = atom<ThemeState>({
  key: "themeState",
  default: {
    darkMode: false,
  },
  effects_UNSTABLE: [localStorageEffect<ThemeState>("themeState")],
});
