function SubContainer({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-light-blue-hover flex flex-col justify-center items-center space-y-2 px-6 py-7 rounded-[12px]">
            {children}
        </div>
    )
}

export {
    SubContainer
}