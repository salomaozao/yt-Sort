var artistArr = [];

// get images from www.youtube:
for (let el of document.getElementsByTagName("a")) {
  if (el.href.includes("index=") && el.id == "thumbnail") {
    let obj = el.parentElement.parentElement.getElementsByClassName(
      "style-scope ytd-playlist-video-renderer"
    )[5].textContent;

    obj = obj.replaceAll("\n", "");
    obj = obj.replaceAll("•", "");
    obj = obj.replaceAll(" ", "");
    obj = obj.slice(obj.length / 2, obj.length);
    artistArr.push(obj);
  }
}

var totalPercent = 0;
var analyzed = [];

for (let artist of artistArr) {
  if (!analyzed.includes(artist)) {
    var occur = artistArr.filter((el) => el == artist).length;
    var rel = (occur / artistArr.length) * 100;

    analyzed.push(artist);

    console.log(`${artist}: ${rel}%`);
    totalPercent += rel;
  }
}
console.log(artistArr);
console.log(analyzed);
