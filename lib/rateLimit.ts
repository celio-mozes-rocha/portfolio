const RATE_LIMIT = 5
const requests = new Map<string, number[]>()

export default function rateLimit(ip: string) {
    const now = Date.now()
    const period = 60000

    const timestamps = requests.get(ip) || []
    const recent = timestamps.filter(t => now - t < period)

    if (recent.length >= RATE_LIMIT) return false

    recent.push(now)
    requests.set(ip, recent)
    return true
}