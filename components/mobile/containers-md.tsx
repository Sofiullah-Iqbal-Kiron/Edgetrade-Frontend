function SubContainerMd({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col justify-center items-center space-y-4 px-2 rounded-[10px] py-8 bg-[#DDE9FC] mt-[35px]">
            {children}
        </div>
    )
}

export {
    SubContainerMd
}