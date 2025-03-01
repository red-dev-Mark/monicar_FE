// 2024-01-15T09:30:00 -> 2024년 01월 15일 09시 30분 / 2024년 01월 15일
export const formatISODateToKorean = (isoDate: string, isIncludeTime = true) => {
    const [ymd, time] = isoDate.split('T')
    const [year, month, date] = ymd.split('-')
    const [hour, minute] = time.split(':')

    return isIncludeTime ? `${year}년 ${month}월 ${date}일 ${hour}시 ${minute}분` : `${year}년 ${month}월 ${date}일`
}

// 기존 new Date()는 UTC 기준 -> UTC 시간을 KST로 변환하는 날짜 포맷팅 (UTC+9) / YYYY-MM-DD
export const formatToKSTDate = (date: Date): string => {
    const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000)

    const year = kstDate.getUTCFullYear()
    const month = String(kstDate.getUTCMonth() + 1).padStart(2, '0')
    const day = String(kstDate.getUTCDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}

export const formatTimeToHHMM = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
}

// 2024-01-15T09:30:00 -> 2024.01.15 09:30:00
export const formatISODateToDot = (isoDate: string) => {
    const [ymd, time] = isoDate.split('T')
    const [year, month, date] = ymd.split('-')
    const [hour, minute, second] = time.split(':')

    return `${year}.${month}.${date} ${hour}:${minute}:${second}`
}

// 2024-01-15T09:30:00.000Z -> '2024-01-15T09:30:00'
export const formatISODateToISOString = (isoDate: Date | null) => {
    if (!isoDate) return ''

    const year = isoDate.getFullYear()
    const month = String(isoDate.getMonth() + 1).padStart(2, '0')
    const day = String(isoDate.getDate()).padStart(2, '0')
    const hours = String(isoDate.getHours()).padStart(2, '0')
    const minutes = String(isoDate.getMinutes()).padStart(2, '0')
    const seconds = String(isoDate.getSeconds()).padStart(2, '0')

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
}

// 2024-01-15T09:30:00.000Z -> '2024.01.15 09:30:00'
export const formatISODateToDotString = (isoDate: Date | null) => {
    if (!isoDate) return ''

    const year = isoDate.getFullYear()
    const month = String(isoDate.getMonth() + 1).padStart(2, '0')
    const day = String(isoDate.getDate()).padStart(2, '0')
    const hours = String(isoDate.getHours()).padStart(2, '0')
    const minutes = String(isoDate.getMinutes()).padStart(2, '0')
    const seconds = String(isoDate.getSeconds()).padStart(2, '0')

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`
}

// 하루 더하기
export const addOneDay = (date: Date) => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() + 1)
    return newDate
}
