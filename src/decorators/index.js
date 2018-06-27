
export const defaultProps = function (defaultProps) {
    return function (target) {
        target.defaultProps = defaultProps
    }
}