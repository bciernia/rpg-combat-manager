type CharactersLayoutProps ={
    children: React.ReactNode;
}

const CharactersLayout = ({children}: Readonly<CharactersLayoutProps>) => {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    )
}

export default CharactersLayout;