import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://coiyudyriajsdaxdqfyr.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvaXl1ZHlyaWFqc2RheGRxZnlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5OTU4MzMsImV4cCI6MTk4MzU3MTgzM30.9gsscaVr_I2i6dZodXiRJ3BnBdx6UzJNnnm7B4VxJW8";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log(supabase);

const { data, error } = await supabase.from("Brands").select();
var abbr_short = [];
var abbr_name = [];
var brandsArray = [];
for (let i = 0; i < data.length; i++) {
  if (data[i].brand_name != null) {
    brandsArray.push(data[i].brand_name);
  }
  if (data[i].abbr_name != null) {
    abbr_short.push(data[i].abbr_short);
    abbr_name.push(data[i].abbr_name);
  }
}

/* global CKEDITOR, TurndownService */
var turndownService = new TurndownService({
  bulletListMarker: "-",
  headingStyle: "atx",
});
// Configure CKEditor window
CKEDITOR.replace("wordup", {
  dataIndentationChars: "  ",
  format_tags: "p;h1;h2;h3;h4;h5",
  height: 325,
  removeButtons:
    "Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar",
  toolbarGroups: [
    { groups: ["basicstyles"], name: "basicstyles" },
    { groups: ["links"], name: "links" },
    { groups: ["list"], name: "paragraph" },
    { groups: ["list"], name: "insert" },
    { groups: ["mode"], name: "document" },
    { groups: ["styles"], name: "styles" },
  ],
});

/* let brandsArray = [
  "Cerelac",
  "Purina ONE",
  "Gerber",
  "NaturNes",
  "Nestlé Pure Life",
  "Perrier",
  "S.Pellegrino",
  "Cheerios",
  "Fitness",
  "Lion",
  "Nesquik Cereal",
  "Aero",
  "Cailler",
  "KitKat",
  "Milkybar",
  "Nestlé Les Recettes de l'Atelier",
  "Orion",
  "Quality Street",
  "Smarties",
  "Toll House",
  "Nescafé",
  "Nescafé 3 in 1",
  "Nescafé Cappuccino",
  "Nescafé Classic",
  "Nescafé Decaff",
  "Nescafé Dolce Gusto",
  "Nescafé Gold",
  "Nespresso",
  "Buitoni",
  "Herta",
  "Hot Pockets",
  "Lean Cuisine",
  "Maggi",
  "Stouffer's",
  " Thomy",
  "Carnation",
  "Coffee-Mate",
  "La Laitière",
  "Nido",
  "Milo",
  "Nesquik",
  "Nestea",
  "Chef",
  "Chef-Mate",
  "Maggi",
  "Milo",
  "Minor’s",
  "Nescafé",
  "Nestea",
  "Sjora",
  "Lean Cuisine",
  "Stouffer's",
  "Boost",
  "Nutren Junior",
  "Peptamen",
  "Resource",
  "Dreyer’s",
  "Extrême",
  "Häagen-Dazs",
  "Mövenpick",
  "Nestlé Ice Cream",
  "Alpo",
  "Bakers Complete",
  "Beneful",
  "Cat Chow",
  "Chef Michael’s Canine Creations",
  "Dog Chow",
  "Fancy Feast",
  "Felix",
  "Friskies",
  "Gourmet",
  "Purina",
  "Purina ONE",
  "Pro Plan",
]; */

function scrubber(string) {
  let scrubbed = string;
  scrubbed = scrubbed

    .replace(/<p><strong>&nbsp;<\/strong><\/p>/g, "")
    .replace(/<strong>&nbsp;<\/strong>/g, "")
    .replace(/<p>&nbsp;<\/p>/g, "")
    .replace(/<h1>&nbsp;<\/h1>/g, "")
    .replace(/<h2>&nbsp;<\/h2>/g, "")
    .replace(/<h3>&nbsp;<\/h3>/g, "")
    .replace(/<h4>&nbsp;<\/h4>/g, "")
    .replace(/<h5>&nbsp;<\/h5>/g, "")
    .replace(/<(h[^>])+><strong>(.*)<\/strong><\/h[^>]+>/g, "<$1>$2</$1>")
    .replace(/<(h[^>])+><em>(.*)<\/em><\/h[^>]+>/g, "<$1>$2</$1>")
    .replace(/<(table|td|tr|th)\s+width="(\d+?)">/g, "<$1>")
    .replace(/<\/strong><strong>/g, "")
    .replace(/&ndash;ndash;/g, "&mdash;")
    .replace(/\n\n\n/g, "\n\n")
    .replace(/\n\n/g, "\n")
    .replace(
      /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g,
      "&nbsp;"
    )
    .replace(
      /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g,
      "&nbsp;"
    )
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace("/&ldquo;/g", '"')
    .replace("&rdquo;", '"')
    .replace("/&rsquo;/g", "'")
    .replace("&quot;", '"')
    .replace(/&lsquo;/, "")
    .replace(/&ndash;/g, "-");

  let resultBrands = scrubbed;
  for (let i in brandsArray) {
    resultBrands = resultBrands.replace(
      new RegExp("\\b" + brandsArray[i] + "\\b", "gi"),
      "<i>" + brandsArray[i] + "</i>"
    );
  }
  scrubbed = resultBrands;
  return scrubbed;
  
}

function addAbbr(scrubbed){
  let resultAbbr = scrubbed;
  //console.log(scrubbed);
  let regex = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@<>#%?=~_|!:,.;]*)([-A-Z0-9+&@<>#%?\/=~_|!:,.;]*)[-A-Z0-9+&@<>#\/%=~_|])/ig;
  let found = resultAbbr.match(regex);
if(found){
  console.log(found.length);

  let foundNew;  
for(let k=0;k<found.length;k++){

  found[k]=found[k].toLowerCase();
  console.log(found[k])
  foundNew=found[k].replace("<i>","");
  console.log(foundNew)
  foundNew=foundNew.replace("</i>","");
  
   resultAbbr=resultAbbr.replace(found[k],foundNew);
  
 
}}

  for (let k in abbr_short) {
   
    resultAbbr = resultAbbr.replace(
      new RegExp("\\b" + abbr_short[k] + "\\b", "g"),
      "<abbr title='" + abbr_name[k] + "'>" + abbr_short[k] + "</abbr>"
    );
  }
  scrubbed = resultAbbr;
  return scrubbed;
  
}
function regexEscape(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function reg(string) {
  var escaped = string;
  var flags = "g";
  var escapedNum = Number;
  escaped = regexEscape(escaped);
  escaped = "https?://" + escaped;
  ++escapedNum;
  console.log(escapedNum);
  return new RegExp(escaped, flags);
}

function addDomainFilter(string, domain) {
  var filtered = string;
  var domainregex = reg(domain);

  filtered = filtered.replace(domainregex, "");

  return filtered;
}

function addTargetBlank(string) {
  var plusTarget = string;

  plusTarget = plusTarget.replace(
    /<(a\s+(?:[^>]*?\s+)?href="https?([^"]*)")/g,
    '<$1 target="_blank" class="externalLink"'
  );

  return plusTarget;
}
/*function internalLinks(string){
  var internalLinks=string;
  var internalRegex= /(\b(https?|ftp|file):\/\/nestle\.com([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/ig;
  
  console.log(internalLinks.match("/<\/?[\w\d]+>/gi;"))
return internalLinks;
}*/
function deleteTagsFromLinks(string){
  var tagsFromLinks=string;
  let regex = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@<>#%?=~_|!:,.;]*)([-A-Z0-9+&@<>#%?\/=~_|!:,.;]*)[-A-Z0-9+&@<>#\/%=~_|])/ig;
let found = tagsFromLinks.match(regex);
if(found){
  console.log(found.length);

  let foundNew;  
for(let k=0;k<found.length;k++){

  found[k]=found[k].toLowerCase();
  console.log(found[k])
  foundNew=found[k].replace("<i>","");
  foundNew=foundNew.replace("</i>","");
  
   tagsFromLinks=tagsFromLinks.replace(found[k],foundNew);
  
 
}}
return tagsFromLinks;
}

function clearBoth() {
  CKEDITOR.instances.wordup.setData("");
  document.getElementById("output").value = "";
}

function wordup() {
  var pasteData = CKEDITOR.instances.wordup.getData();

  pasteData = scrubber(pasteData);
  
  pasteData = addTargetBlank(pasteData);
  
  pasteData=deleteTagsFromLinks(pasteData);

  pasteData=addAbbr(pasteData);
  if (
    document.getElementById("domainfilter").checked === true &&
    document.getElementById("domainname").value
  ) {
    pasteData = addDomainFilter(
      pasteData,
      document.getElementById("domainname").value
    );
  }


  if (document.getElementById("markdown").checked === true) {
    pasteData = turndownService.turndown(pasteData);
  }

  document.getElementById("output").value = pasteData;
}
document.getElementById("clear").addEventListener("click", clearBoth);
document.getElementById("convert").addEventListener("click", wordup);
document.getElementById("markdown").addEventListener("click", wordup);
document.getElementById("domainfilter").addEventListener("click", wordup);
