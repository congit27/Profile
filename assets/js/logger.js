export default function logger(reducer) {
    return (preState, action, args) => {
        console.group(action)
        console.log('Prev State:', preState)
        console.log('Action Argument:', args)
        const nextState = reducer(preState, action, args)
        console.log('Next State:', nextState)
        console.groupEnd()
        return nextState
    }
}