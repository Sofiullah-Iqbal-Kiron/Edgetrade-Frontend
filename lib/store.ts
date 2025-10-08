// 3'rd party
import { create } from "zustand"
// import { persist, createJSONStorage } from "zustand/middleware"

// local
import { NavType } from "@/lib/types"
// import { zustandSecureStorage } from "@/lib/storage"


interface activeNavStoreState {
    activeNav: NavType,
    setActiveNav: (nav: NavType) => void
}
export const useActiveNavStore = create<activeNavStoreState>((set) => ({
    activeNav: "Market",
    setActiveNav: (nav) => set({ activeNav: nav })
}))

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

// const selector = {
//     accessToken: (s: AuthStoreState) => s.accessToken,
//     setAccessToken: (s: AuthStoreState) => s.setAccessToken,
//     hasHydrated: (s: AuthStoreState) => s.hasHydrated,
// }

// export const useAccessToken = () => useAuthStore(selector.accessToken)
// export const useSetAccessToken = () => useAuthStore(selector.setAccessToken)
// export const useHasHydrated = () => useAuthStore(selector.hasHydrated)
