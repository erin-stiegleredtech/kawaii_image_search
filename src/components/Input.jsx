const Input = (props) => {
    return (
        <>
            <input
                className='w-1/2 h-10 rounded px-4 focus:outline-amber-300'
                placeholder='Type a keyword...'
                onChange={props.onChange}
            />
        </>
    )
}
export default Input;