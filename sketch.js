
let title = ['Prelude', 'One Night, Counting the Stars', 'A Poem Easily Written'];

let poem1 = ['Till my dying day, let no spot of shame be upon me, as I look to heaven;',
             'I was troubled even by a slight wind that grew on a leaf.',
             'I will love all that is dying with a heart that sings of stars',
             'And walk the pate that is given me.',
             'Even tonight a star is rustled by the wind.'];

let poem2 = ['The sky when the season passes is filled to the full with the fall.',
            'I could almost count, free of care, all the stars in the folds of this fall.',
            'These are too distant. Distant as the shimmering stars.'];

let poem3 = ['Night rain outside the window, lightly whispers this spacious room is no country of mine.',
            'A poet’s is a sad calling, I know, yet shall I attempt a line of verse.',
            'Tuition in envelope, sent to me with the warm smell of sweat and love,and college notebook tucked under arm, attend an old professor lecturing.',
            'I ask myself, having lost, one, two, all of my friends of childhood, for what expectation do I so, alone, sink into thought?',
            'For a poem to be so easily written, when life is so difficult,is a matter of shame.',
            'This spacious room is no country of mine, lightly whispers the night rain outside the window.',
            'The last I, lighting a lamp to push back the dark, and waiting for morning that comes like an age,',
            'I hold a small hand out to myself, the first ever hand-holding of tears and consolation.'];

let thisTitle;
let wrds= '';

function setup() {
  createCanvas(1000, 700);
  background(0);
  frameRate(60);
  intText();
  console.log(poem1[int(random(poem1.length))]);
  console.log(poem2.length);
  console.log(poem3.length);
}

function draw() {
}

function mousePressed() {
  fortText();
  console.log(wrds);
}


function fortRect() {
  //rect(width*0.5,height*0.5, 100);
}


function intText() {
  fill(204,204,204);
  textAlign(CENTER);
  text('Click the background to see your line.', width*0.5, height*0.05);
  text('Translated by Suh Hong Won and Seon-Gyeom Choi © 2011 by YONSEI UNIVERSITY PRESS.', width*0.5, height*0.95)
}

function fortText() {
  background(0);
  intText();
  push();
  textSize (16);
  fill(255);
  textAlign(CENTER);
  thisTitle = int(random(title.length));
  if (thisTitle == 0) {
    wrds = poem1[int(random(poem1.length))];
  } else if (thisTitle == 1) {
    wrds = poem2[int(random(poem2.length))];
  } else if (thisTitle == 2) {
    wrds = poem3[int(random(poem3.length))];
  }
  text(title[thisTitle], width*0.5, height*0.7);
  text(wrds, width*0.5, height*0.75);
  pop();
}
