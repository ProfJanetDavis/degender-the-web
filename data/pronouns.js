export const compoundPronouns = {
    "he or she": "they",
    "him or her": "them",
    "his or her": "their",
    "his or hers": "theirs",
    "himself or herself": "themself",
    "him or herself": "themself"
};

export const genderPronouns = {
    // She/her/her/hers/herself
    she: "they",
    her: "them",
    herPossAdj: "their",
    hers: "theirs",
    herself: "themself",
    // He/him/his/his/himself
    he: "they",
    him: "them",
    hisPossAdj: "their",
    his: "theirs",
    himself: "themself"
};

// Make a combined dictionary using object spread.
// Compound pronouns should come first.
export const allPronouns = { ...compoundPronouns, ...genderPronouns };
