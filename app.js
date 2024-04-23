"use strict";
class User {
    constructor(skills = []) {
        this.skills = skills;
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === "string") {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.push(...skillOrSkills);
        }
    }
}
const user = new User();
user.addSkill(["HTML", "CSS"]);
console.log(user.skills);
