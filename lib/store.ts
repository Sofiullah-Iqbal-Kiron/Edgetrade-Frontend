// 3'rd party
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

// local
import { NavType } from "@/lib/types"


interface ActiveNavStoreState {
    activeNav: NavType
    setActiveNav: (nav: NavType) => void
    resetActiveNav: () => void
}
export const useActiveNavStore = create<ActiveNavStoreState>()(
    persist(
        (set) => ({
            activeNav: "Market",
            setActiveNav: (nav) => set({ activeNav: nav }),
            resetActiveNav: () => set({ activeNav: "Market" }),
        }),
        {
            version: 1,
            name: "latest-active-nav-state-storage",
            storage: createJSONStorage(() => localStorage),  // Ensures JSON format.
            partialize: (state) => ({ activeNav: state.activeNav }),  // Persist only the needed field.
        }
    )
)

// interface AuthStoreState {
//     accessToken: string | null
//     setAccessToken: (token: string | null) => void

//     hasHydrated: boolean
//     setHasHydrated: (isHydrated: boolean) => void
// }
// export const useAuthStore = create<AuthStoreState>()(
//     persist(
//         (set) => ({
//             accessToken: null,
//             setAccessToken: (token: string | null) => set({ accessToken: token }),

//             hasHydrated: false,
//             setHasHydrated: (isHydrated: boolean) => set({ hasHydrated: isHydrated }),
//         }),
//         {
//             name: "auth-storage",
//             storage: createJSONStorage(() => zustandSecureStorage),
//             onRehydrateStorage: () => {
//                 return (state, error) => {
//                     if (error)
//                         console.error("Error rehydrating auth state:", error)
//                     else
//                         console.log("Auth state rehydrated successfully:", state)

//                     state?.setHasHydrated(true)
//                 }
//             }
//         }
//     )
// )

const selector = {
    activeNav: (s: ActiveNavStoreState) => s.activeNav,
    setActiveNav: (s: ActiveNavStoreState) => s.setActiveNav,
}

export const useActiveNav = () => useActiveNavStore(selector.activeNav)
export const useSetActiveNav = () => useActiveNavStore(selector.setActiveNav)
