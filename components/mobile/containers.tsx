function SubContainer({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-light-blue-hover flex flex-col justify-center items-center space-y-4 px-6 py-8 rounded-2xl">
            {children}
        </div>
    )
}

export {
    SubContainer
}