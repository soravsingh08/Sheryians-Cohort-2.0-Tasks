const users = [
  {
    fullName: "Sorav Singh",
    profession: "UI/UX Designer",
    description: "Passionate about creating clean, minimal, and intuitive user experiences.",
    tag: "designer",
    image: "https://images.unsplash.com/photo-1763136360379-74d691c7cc1e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Riya Sharma",
    profession: "Software Developer",
    description: "Full-stack developer who loves building scalable web applications.",
    tag: "developer",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
  },
  {
    fullName: "Kabir Singh",
    profession: "Digital Marketer",
    description: "Expert in SEO, branding, and online growth strategies.",
    tag: "marketing",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
  },
  {
    fullName: "Sneha Patel",
    profession: "Content Writer",
    description: "Writes engaging stories, blogs, and brand content.",
    tag: "writer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
];




sum = ''
users.forEach(function(elem){
   sum = sum + `
     <div class="card">
            <img src= ${elem.image}>
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
}) 

var main = document.querySelector("main")
main.innerHTML = sum