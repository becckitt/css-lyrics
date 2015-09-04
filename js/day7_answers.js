//Setting up the lyrics with the given answer.
var randQuestion = kanyeArray[Math.floor(Math.random() * kanyeArray.length)];

var randomPrompt = prompt(randQuestion);

var whereSomeoneLives;
var gonnaKillMe;
var ateBreakfastAt;
var thingsInLife;
var sexyHoes;
var cantTellMeNothin;
var makesRealShit;
var honoredByMyLateness;
var homeMovie;
var rightMyWrongs;

whereSomeoneLives = "Now I’m looking at a crib right next to where " + "<span class='answer'>" + randomPrompt + "</span>" + " lives.";
gonnaKillMe = "I know " + "<span class='answer'>" + randomPrompt + "</span>" + " gon' kill me but let me finish.";
ateBreakfastAt = "Break records at Louis, ate breakfast at <span class='answer'>" + randomPrompt + ".</span>";
thingsInLife = "The good life, let's go on a living' spree. Shit, they say the best things in life are <span class='answer'>" + randomPrompt.toLowerCase() + ".</span>";
sexyHoes = "And you know that you need to bring some extra hoes. Not in jogging pants either, tell them wear some <span class='answer'>" + randomPrompt.toLowerCase() + ".</span>";
cantTellMeNothin = "Excuse me, is you saying something? Uh, uh, you can't tell me <span class='answer'>" + randomPrompt.toLowerCase() + ".</span>";
makesRealShit = "I ask, cause I'm not sure. Do anybody make <span class='answer'>" + randomPrompt + "</span>" + " anymore?";
honoredByMyLateness = "You should be honored by my <span class='answer'>" + randomPrompt + ",</span> that I would even show up to this fake shit.";
homeMovie = "My girl a superstar off of a <span class='answer'>" + randomPrompt + ".</span>";
rightMyWrongs = "I'm trying to right my <span class='answer'>" + randomPrompt.toLowerCase() + ",</span>" + " but it's funny these same <span class='answer'>" + randomPrompt.toLowerCase() + "</span>" + " helped me write this song.";

