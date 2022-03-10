
let title = ['Prelude', 'One Night, Counting the Stars', 'A Poem Easily Written'];
let ktitle = ['서시']

let poem1 = ['Till my dying day, let no spot of shame be upon me, as I look to heaven;',
             'I was troubled even by a slight wind that grew on a leaf.',
             'I will love all that is dying with a heart that sings of stars',
             'And walk the pate that is given me.',
             'Even tonight a star is rustled by the wind.'];

let kpoem1 = ['하늘을 우러러 한 점 부끄러움이 없기를..', '잎새에 이는 바람에도 나는 괴로워했다.']

let poem2 = ['The sky when the season passes is filled to the full with the fall.',
            'I could almost count, free of care, all the stars in the folds of this fall.',
            'These are too distant. Distant as the shimmering stars.'];

let poem3 = ['Night rain outside the window, lightly whispers this spacious room is no country of mine.',
            'A poet’s is a sad calling, I know, yet shall I attempt a line of verse.',
            'Tuition in envelope, sent to me with the warm smell of sweat and love,',
            'I ask myself, having lost, one, two, all of my friends of childhood,',
            'For a poem to be so easily written, when life is so difficult,is a matter of shame.',
            'This spacious room is no country of mine, lightly whispers the night rain outside the window.',
            'The last I, lighting a lamp to push back the dark, and waiting for morning that comes like an age,',
            'I hold a small hand out to myself, the first ever hand-holding of tears and consolation.'];

let poem3_1 = ['and college notebook tucked under arm, attend an old professor lecturing.',
              'for what expectation do I so, alone, sink into thought?']

let thisTitle;
let thiskTitle;
//let thisPoem;
let line= '';
let line2='';
let lineK = '';

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
}

function intText() {
  fill(204,204,204);

  //if mousePressed() {
    //fill(0);
  //} else if {
    //fill(204,204,204);
  //}

  textAlign(CENTER);
  text('Click anywhere to see the poetry.', width*0.5, height*0.05);
  text('Translated by Suh Hong Won and Seon-Gyeom Choi © 2011 by YONSEI UNIVERSITY PRESS.', width*0.5, height*0.95)
}

function fortText() {
  background(0);
  intText();
  push();
  textSize (16);
  fill(255);
  textAlign(CENTER);

  thiskTitle = int(random(ktitle.length));
  if (thiskTitle == 0 && thisTitle == 0) {
    line3 = kpoem1[int(random(kpoem1.length))];
  } else {
  }


  thisTitle = int(random(title.length));
  if (thisTitle == 0) {
    line = poem1[int(random(poem1.length))];
  } else if (thisTitle == 1) {
    line = poem2[int(random(poem2.length))];
  } else if (thisTitle == 2) {
    line = poem3[int(random(poem3.length))];
    thisPoem = int(random(poem3.length));
    if (thisPoem == 0) {
      line2 = poem3_1[0];
    } else if (thisPoem == 1) {
      line2 = poem3_1[1];
    }
  }

  text(title[thisTitle], width*0.5, height*0.7);
  text(ktitle, width*0.5, height*0.725);
  text(line, width*0.5, height*0.75);
  text(line2,width*0.5, height*0.775)
  text(line3,width*0.5, height*0.8)
  pop();
}
