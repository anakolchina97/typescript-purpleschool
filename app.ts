class User {
  skills: string[];

  constructor(skills: string[] = []) {
    this.skills = skills;
  }

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === "string") {
      this.skills.push(skillOrSkills);
    } else {
      this.skills.push(...skillOrSkills);
    }
  }
}

const user = new User();
user.addSkill(["HTML", "CSS"]);
console.log(user.skills);

function run(distance: string): void;
function run(distance: number): void;
function run(distance: number | string): void {}
