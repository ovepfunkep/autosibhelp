export default function Button({className, children, props}) {
    return (
        <button className={`bg-accent rounded-[10px] px-[20px] items-center h-[40px] ${className}`} {...props}>{children}</button>
    )
}