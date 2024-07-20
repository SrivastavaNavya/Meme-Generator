const url = 'https://api.imgflip.com/get_memes'

export const getAllMemes = async () => {
    const res = await fetch(url)
    return await res.json()
}
