export default function Headline({className, children, props}) {
    return (
        <h1 className={`uppercase text-5xl font-bold leading-[64px] ${className}`} {...props}>{children}</h1>
    )
}