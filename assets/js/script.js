

function UpateProfile(profileData) {
    const nameProfile = document.getElementById('profile.name')
    const phone = document.getElementById('profile.phone')
    const email = document.getElementById('profile.email')
    const location = document.getElementById('profile.location')
    const position = document.getElementById('profile.position')
    const img = document.getElementById('profile.img')
    const skills = document.getElementById('profile.skills')
    const languages = document.getElementById('profile.languagens')

    const tools = document.getElementById('profile.tool')
    const project = document.getElementById('profile.portifolio')
    const experienc = document.getElementById('profile.experience')

    img.src = profileData.photo;
    nameProfile.innerHTML = `<span class="header__span">Olá,eu sou  </span><br>${profileData.name}`
    phone.innerText = profileData.phone
    email.innerText = profileData.email
    position.innerText = profileData.job_position
    location.innerText = profileData.location


    profileData.skills.softSkills.forEach(skill => {
        const skills__item = document.createElement("li")
        skills__item.innerText = skill

        skills.appendChild(skills__item)
    });

    profileData.languages.forEach(language => {
        const language__item = document.createElement("li")
        language__item.setAttribute("class", "item__list__contente")

        language__item.innerText = language

        languages.appendChild(language__item)
    })

    profileData.skills.hardSkills.forEach(skills => {
        const hardSkill__item = document.createElement("li")
        hardSkill__item.setAttribute("class", "tecnology")

        const hardSkill__img = document.createElement("img")
        hardSkill__img.src = skills.logo
        hardSkill__img.alt = skills.name

        hardSkill__item.appendChild(hardSkill__img)

        tools.appendChild(hardSkill__item)
    })


    profileData.portfolio.forEach(projects => {

        const project__item = document.createElement("li")
        project__item.setAttribute("class", "item__project__contente")

        const title__project = document.createElement("span")
        title__project.setAttribute("class", "title")
        title__project.innerText = projects.name

        const url__project = document.createElement("a")
        url__project.target = "_blank"
        url__project.href = projects.url
        url__project.innerText = projects.url



        project__item.appendChild(title__project)
        project__item.appendChild(url__project)

        project.appendChild(project__item)
    })

    profileData.professionalExperience.forEach(experience => {

        const experience__item = document.createElement("li")
        experience__item.setAttribute("class", "item__experience__contente")

        const title__experience = document.createElement("span")
        title__experience.setAttribute("class", "title__experience")
        title__experience.innerText = experience.name

        const time__project = document.createElement("span")
        time__project.setAttribute("class", "time")
        time__project.innerText = experience.period

        const description__project = document.createElement("span")
        description__project.setAttribute("class", "description")
        description__project.innerText = experience.description



        experience__item.appendChild(title__experience)
        experience__item.appendChild(time__project)
        experience__item.appendChild(description__project)

        experienc.appendChild(experience__item)
    })



}

(async () => {
    const profileData = await createdProfile();

    UpateProfile(profileData)
})()

