$(function() {
  var naughtyKanyeTweets = ["Bro first of all you stole your whole shit from Cudi", "Second, your first single was corny as fuck and most there after", "You have distracted from my creative process", "I went to look at your twitter and you were wearing cool pants", "I screen grabbed those pants and sent it to my style team #Wizwearscoolpants", "3rd no one I know has ever listened to one of your albums all the way through", "4th you let a stripper trap you", "5th I know you mad every time you look at your child that this girl got you for 18 years", "6th don’t ever come out the side of your neck at me", "7th I am your OG and I will be respected as such", "8th I made it so we could wear tight jeans", "9th me and Cudi created this shit", "10th don’t you ever in your fucking life speak sideways about a n***a that’s fighting for us I do this for all of us", "11th I showed you respect as a man when I met you", "12th You wouldn’t have a child if it wasn’t for me", "13th You own waves???? I own your child!!!!", "14th N***a it’s called creativity #youshouldtryitsomeday", "15th N***a I tried to call you and you changed your number", "16th don’t even hint at mentioning me my family or my wife I am your OG", "17th I think you dress cool I wish I was skinny and tall", "maybe I couldn’t be skinny and tall but I’ll settle for being the greatest artist of all time as a consolation", "Don’t ever ever ever come out the side of your mutherfucking neck bro or bruh or however you say it Mr. Waves", "I’m YE and I ain’t gotta say it the right way I’m Ye I’m Ye I’m Ye I’m Ye I’m Ye I’m Ye I’m Ye", "Thank you for the extra promotion #WAVES available February 11th"];
  var niceKanyeTweets = ["I love the world bottom line and all I want is peace and positive energy", "Good energy  positive energy", "Ima take these down cause it’s all about positive energy blessings blessings positive energy blessings", "I’m happy that I now know that KK means weed…  please excuse the confusion …  now back to #WAVES", "I’m not into that kind of shit… I like pictures and videos Me and my wife got the kind of love that can turn exes into best friends"];
  var tweetArraySize = naughtyKanyeTweets.length;
  var randomNumber = Math.floor((Math.random() * tweetArraySize));
  var colors = ["rgb(112,196,152)", "rgb(233, 225, 109)", "rgb(183, 171, 155)", "rgb(30,30,30)", "rgb(0,0,51)", "rgb(235,176,176)"];
  var randomColorNumber = Math.floor((Math.random() * colors.length));
  var currColor = colors[randomColorNumber];
  $('#kanye-tweet-content').html(naughtyKanyeTweets[randomNumber]);
  $('#kanye-tweet').css('color', currColor);
  $('body').css('background', currColor);
  $('path').css('stroke', currColor);
  $('circle').css('stroke', currColor);
  $('line').css('stroke', currColor);
});