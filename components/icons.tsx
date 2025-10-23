import type { SVGProps } from "react"


export function MenuIcon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement> & { size?: number; color?: string; strokeWidth?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            strokeLinejoin="miter"
            {...props}
        >
            <path d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18ZM2 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 2 4.46 2 6 2s2.31 0 2.876.347c.317.194.583.46.777.777C10 3.689 10 4.46 10 6s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.311 10 7.54 10 6 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2 8.311 2 7.54 2 6Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 2 16.46 2 18 2s2.31 0 2.877.347c.316.194.582.46.776.777C22 3.689 22 4.46 22 6s0 2.31-.347 2.876c-.194.317-.46.583-.776.777C20.31 10 19.54 10 18 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C14 8.311 14 7.54 14 6Z" />
        </svg>
    )
}

export function TradeIcon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement> & { size?: number; color?: string; strokeWidth?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 256 256"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path fill="currentColor" d="M222 48v104a14 14 0 0 1-14 14H94.49l13.75 13.76a6 6 0 1 1-8.48 8.48l-24-24a6 6 0 0 1 0-8.48l24-24a6 6 0 0 1 8.48 8.48L94.49 154H208a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2v8a6 6 0 0 1-12 0v-8a14 14 0 0 1 14-14h112a14 14 0 0 1 14 14m-54 146a6 6 0 0 0-6 6v8a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V104a2 2 0 0 1 2-2h113.51l-13.75 13.76a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L161.51 90H48a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-8a6 6 0 0 0-6-6">
            </path>
        </svg>
    )
}