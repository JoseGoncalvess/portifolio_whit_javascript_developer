BASE__URL = "https://raw.githubusercontent.com/JoseGoncalvess/Study_Web_JavaScript/refs/heads/main/project%20by%20learn/portifolio/assets/data/profile.json"

async function getProfile() {
    const request = await fetch(BASE__URL)
    let result = await request.json()
    return result
}
async function createdProfile() {
    const result = await getProfile()

    const profile = new Profile(result.name, result.photo, result.job, result.location, result.phone, result.email, result.skills, portfolio = result.portfolio, result.languages, result.professionalExperience)
    return profile
}