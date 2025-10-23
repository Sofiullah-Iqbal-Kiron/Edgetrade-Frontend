function SubContainerMd({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col justify-center items-center space-y-4 rounded-[10px]">
            {children}
        </div>
    )
}

export {
    SubContainerMd
}