export const setAuthToken = user => {
    const currentUser = {
        email: user.email
    };

    // Save User In Database and Get JWT Token
    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("hotel-booking-bd", data.token)
        })
}