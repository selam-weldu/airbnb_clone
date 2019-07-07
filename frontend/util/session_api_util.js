export const signup = user => {
    // debugger
    return(
        $.ajax({
            method: 'Post',
            url: '/api/users',
            data: { user }
        })
    )
};

export const login = user => (
    $.ajax({
        method: 'Post',
        url: '/api/session',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'Delete',
        url: '/api/session',
    })
);