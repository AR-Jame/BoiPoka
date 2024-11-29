const getItem = (type) => {
    const prevData = localStorage.getItem(type);
    if (prevData) {
        return JSON.parse(prevData)
    }
    return []
}

const setItem = (bookId, type) => {
    const prevData = getItem(type)
    prevData.push(bookId)
    localStorage.setItem(type, JSON.stringify(prevData))
}
export { setItem, getItem }