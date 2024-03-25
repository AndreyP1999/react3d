import { create } from "zustand";

export const useStore = create(
    (set) => (
        {
            target: null,
            mode: "translate",
            hotKey: {},
            sethotKey: (hotKey) => set({ hotKey }),
            setTarget: (target) => set({ target }),
            setMode: (mode) => set({ mode })
        }
    ))
