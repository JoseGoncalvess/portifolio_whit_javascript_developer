class Profile {
    name;
    photo;
    job_position;
    location;
    phone;
    email;
    languages = [];
    skills = {
        hardSkills: [],
        softSkills: []
    };
    portfolio;
    professionalExperience = [];

    constructor(name, photo, job_position, location, phone, email, skills, portfolio, languages, professionalExperience) {
        this.name = name;
        this.photo = photo;
        this.job_position = job_position;
        this.location = location;
        this.phone = phone;
        this.email = email;
        this.skills = skills;
        this.languages = languages;
        this.portfolio = portfolio;
        this.skills = skills;
        this.professionalExperience = professionalExperience;
    }
}
