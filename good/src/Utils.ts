export const classes = (...params: (string | undefined)[]) =>
    params.reduce((pr, cur) => cur ? pr + ' ' + cur : pr)