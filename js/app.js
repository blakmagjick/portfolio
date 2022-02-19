const jobHunt = false
const codingProject = false
const hobbies = ['review some tea on IG', 'read Sci Fi & Fantasy novels', 'play Diablo3 on the PS4', 'bake and/or cook for friends', 'roller skate in the park', 'watch horror movies']

if (jobHunt == false && codingProject == false) {
   let randomNum = Math.floor(Math.random() * hobbies.length)
   let randomHobby = hobbies[randomNum]
   console.log(`Hey! Let's go ${randomHobby}!`)
}