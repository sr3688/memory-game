export function createContributorsCard(contributorInfo, container) {
  let section = document.createElement("section");
  section.className = "contri-section";
  container.appendChild(section);

  let img = document.createElement("img");
  img.className = "profile-pic";
  img.src = contributorInfo.img;
  section.appendChild(img);

  let h1 = document.createElement("h1");
  h1.innerHTML = ` ${contributorInfo.name} ${
    contributorInfo.gender == "male" ? "👦" : "👧"
  }`;
  section.appendChild(h1);

  let small = document.createElement("small");
  small.innerHTML = contributorInfo.role;
  section.appendChild(small);

  let h3 = document.createElement("h3");
  h3.innerHTML = "Follow Me👇";
  section.appendChild(h3);

  let socialHandles = document.createElement("section");
  socialHandles.className = "social-links";
  section.appendChild(socialHandles);
  let twitterFollowLink = document.createElement("a");
  twitterFollowLink.href = contributorInfo.twitter;
  let twitterFollowButton = document.createElement("img");
  twitterFollowButton.src =
    "https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white";
  socialHandles.appendChild(twitterFollowLink);
  twitterFollowLink.appendChild(twitterFollowButton);

  let linkedinFollowLink = document.createElement("a");
  linkedinFollowLink.href = contributorInfo.linkedin;
  let linkedinFollowButton = document.createElement("img");
  linkedinFollowButton.src =
    "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white";
  socialHandles.appendChild(linkedinFollowLink);
  linkedinFollowLink.appendChild(linkedinFollowButton);

  let githubFollowButton = document.createElement("img");
  githubFollowButton.src =
    "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white";
  let githubFollowLink = document.createElement("a");
  githubFollowLink.href = contributorInfo.github;
  githubFollowLink.appendChild(githubFollowButton);
  socialHandles.appendChild(githubFollowLink);
  
  if(contributorInfo.role!=="Maintainer"){
   let thankContributor = document.createElement("h1");
   thankContributor.innerHTML = `Thanks <span style="color:blue">${contributorInfo.name}</span> ! for your contribution 🥳`;
   section.appendChild(thankContributor);
  }

}
