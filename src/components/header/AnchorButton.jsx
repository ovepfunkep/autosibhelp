export default function AnchorButton({children, props}) {
    return (
        <button {...props} className="p-[28px]">{children}</button>
    )
}