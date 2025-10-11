interface H1Props{
    children : React.ReactNode
}

export default function H1({...props}: H1Props){
    return <h1 className="text-2xl m-4">{props.children}</h1>
}