var male = ["his", "he"];
var female = ["her", "she"];
var they = ["their", "they"]

var gender = prompt("Choose the gender of your main character: \"male,\" \"female,\" or \"gender neutral\" (1 of 22)").toLowerCase();

if (gender == "male") {
  gender = male;
} else if (gender == "female") {
  gender = female;
} else {
  gender = they;
}

var adj_1 = prompt("Input an Adjective (2 of 22)");
var name_a = prompt("Input a Name (3 of 22)");
var name_1 = name_a.charAt(0).toUpperCase() + name_a.slice(1);
var verb_1 = prompt("Input an -ed Verb (4 of 22)");
var noun_1 = prompt("Input a Noun (5 of 22)");
var noun_a = prompt("Input another Noun (6 of 22)");
var noun_2 = noun_a.charAt(0).toUpperCase() + noun_a.slice(1);
var verb_2 = prompt("Input another -ed Verb (7 of 22)");
var adj_2 = prompt("Input another Adjective (8 of 22)");
var creature_1 = prompt("Input a Living Thing (9 of 22)");
var noun_3 = prompt("Input another Noun (10 of 22)");
var adj_3 = prompt("Input another Adjective (11 of 22)");
var color_1 = prompt("Input a Color (12 of 22)");
var food_1 = prompt("Input a Food (13 of 22)");
var adj_3 = prompt("Input another Adjective (14 of 22)");
var exclaim_1 = prompt("Input an Exclamation (15 of 22)");
var name_b = prompt("Input another Name (16 of 22)");
var name_2 = name_b.charAt(0).toUpperCase() + name_b.slice(1);
var noun_4 = prompt("Input another Noun (17 of 22)");
var adj_4 = prompt("Input one last Adjective (18 of 22)");
var verb_3 = prompt("Input another Verb (19 of 22)");
var verb_4 = prompt("Input one last -ing Verb (20 of 22)");
var region_1 = prompt("Input a Region (21 of 22)");
var noun_5 = prompt("Input one last Noun (22 of 22)");

var theStory = "This year, the " + adj_1 + " Dr. " + name_1 + ", who " + verb_1 + " " + noun_1 + "ology at the " + noun_2 + " Institute of Science, " + verb_2 + " " + gender[0] + " " + adj_2 + " " + creature_1 + " out of the " + noun_3 + ".  Knowing there would be trouble if anyone found out about the " + creature_1 + ", which was turning a(n) " + adj_3 + " shade of " + color_1 + ", Dr. " + name_1 + " fed it all of the " + food_1 + " " +gender[1] + " could get " + gender[0] + " " + adj_3 + " hands on.  But " + exclaim_1.toUpperCase() + ", all it wanted to eat was Lady " + name_2 + "'s " + noun_4 + ".  What a(n) " + adj_4 + " diet...<br><br>The moral of the story?  Always " + verb_3 + " before " + verb_4 + " the dormitory of a(n) " + region_1 + " " + noun_5 + ".";

document.write(theStory);

