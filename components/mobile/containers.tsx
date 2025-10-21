function SubContainer({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-light-blue-hover flex flex-col justify-center items-center space-y-4 px-2 py-8 rounded-[12px]">
            {children}
        </div>
    )
}

export {
    SubContainer
}