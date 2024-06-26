const quote = document.getElementById("quote");
const generateQuote = document.getElementById("generateQuote");

const quotesArray = [
  `“And whoever puts their trust in Allah, then He will suffice him.” – Quran 65:3`,
  `“Verily, with hardship, there is relief.” – Quran 94:5`,
  `“Worship Allah as if you see Him, for if you don’t see Him, He sees you.” – Prophet Muhammad (peace be upon him)`,
  `“Kindness is a mark of faith, and whoever is not kind has no faith.” – Prophet Muhammad (peace be upon him)`,
  `“Love for others what you love for yourself.” – Prophet Muhammad (peace be upon him)`,
  `“Do good to others, and goodness will come back to you.” – Prophet Muhammad (peace be upon him)`,
  `“Read! In the name of your Lord.” – Quran 96:1`,
  `“He who seeks knowledge, Allah will make his path to Paradise easy.” – Prophet Muhammad (peace be upon him)`,
  `“Indeed, with every difficulty, there is relief.” – Quran 94:6`,
  `“Verily, with hardship, there is ease.” – Quran 94:5`,
  `“Allah does not burden a soul beyond that it can bear.” – Quran 2:286`,
  `“Be patient. Indeed, the promise of Allah is truth.” – Quran 30:60`,
  `“Patience is a pillar of faith.” – Prophet Muhammad (peace be upon him)`,
  `“If you are grateful, I will surely increase you [in favor].” – Quran 14:7`,
  `“And remember, with gratitude, Allah will increase you.” – Quran 7:144`,
  `“Contentment is the greatest wealth.” – Prophet Muhammad (peace be upon him)`,
  `“Whoever is not grateful to people is not grateful to Allah.” – Prophet Muhammad (peace be upon him)`,
  `“Do not despair of the mercy of Allah.” – Quran 39:53`,
  `“Allah is with the patient.” – Quran 8:46`,
  `“Verily, after every difficulty, there is relief.” – Quran 94:5`,
  `“Optimism is a sunnah.” – Prophet Muhammad (peace be upon him)`,
  `“The best among you are those who have the best character.” – Prophet Muhammad (peace be upon him)`,
  `“Do not speak harshly or rudely.” – Prophet Muhammad (peace be upon him)`,
  `“The believer is kind and gentle, for there is no goodness in one who is neither kind nor gentle.” – Prophet Muhammad (peace be upon him)`,
  `“The strongest among you is the one who controls his anger.” – Prophet Muhammad (peace be upon him)`,
  `“He who does not show mercy to others will not be shown mercy.” – Prophet Muhammad (peace be upon him)`,
  `“The best leader is one who serves his people.” – Prophet Muhammad (peace be upon him)`,
  `“Show forgiveness, enjoin what is good, and turn away from the ignorant.” – Quran 7:199`,
  `“Those who forgive and overlook are rewarded by Allah.” – Quran 42:40`,
  `“The doors of repentance are always open.” – Prophet Muhammad (peace be upon him)`,
  `“Whoever does not show mercy will not be shown mercy.” – Prophet Muhammad (peace be upon him)`,
  `“The believers are like a single body; if one part suffers, the whole body suffers.” – Prophet Muhammad (peace be upon him)`,
  `“Do not be divided, for verily the hearts are inclined towards unity.” – Prophet Muhammad (peace be upon him)`,
  `“The Muslim Ummah is like a solid structure, one part supporting the other.” – Prophet Muhammad (peace be upon him)`,
  `“Muslims are brothers and sisters, so make peace between your brothers and sisters.” – Prophet Muhammad (peace be upon him)`,
  `“Every soul shall taste death.” – Quran 3:185`,
  `“Live in this world as if you are a traveler.” – Prophet Muhammad (peace be upon him)`,
  `“Remember death often, for it is the destroyer of pleasures.” – Prophet Muhammad (peace be upon him)`,
  `“The life of this world is but a fleeting enjoyment, and the hereafter is the true life.” – Prophet Muhammad (peace be upon him)`,
  `“Do good deeds that will benefit you even after death.” – Prophet Muhammad (peace be upon him)`,
  `“The one who remembers Allah in life and at the time of death has attained the ultimate success.” – Prophet Muhammad (peace be upon him)`,
  `“The key to success is prayer and hard work.” – Prophet Muhammad (peace be upon him)`,
  `“The best among you are those who strive for the betterment of society.” – Prophet Muhammad (peace be upon him)`,
  `“Success is not measured by wealth, but by the state of one’s heart and actions.” – Prophet Muhammad (peace be upon him)`,
  `“Believe in yourself and in the power of Allah, and you will achieve greatness.” – Prophet Muhammad (peace be upon him)`,
];

quote.textContent = quotesArray[Math.floor(Math.random() * quotesArray.length)];

generateQuote.addEventListener("click", function () {
  randomGenerator = Math.floor(Math.random() * quotesArray.length);

  quote.textContent = quotesArray[randomGenerator];
});
