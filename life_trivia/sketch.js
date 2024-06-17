var num_players = 4;
let scl = 60;
let player_color = ['red', 'blue', 'yellow', 'green']
var v = 4;
var f = 0.99;
var r = scl/2;
let steps_limit = 10;

// if num_players = 4, bomb_init = 12
// if num_players = 3, bomb_init = 6, 7, 10
// if num_players = 2, bomb_init = 3
let bomb_init = 12; 





function setup() {
  createCanvas(8*scl, 8*scl);
  g = new grid(num_players); // four players
  g.createShape(num_players);
  

  // console.log(g.vertexes);
  // console.log(g.edges);
  // console.log(g.players)
  
}

function draw() {
  background(200);
  g.drawGrid();
  
  // flashes the bomb's neighbors
  if (v < 2) {
    f = 1.005;
  }
  else if (v > 4) { 
    f = 0.995; 
  }
  v *= f
  g.flashNeighbors(v);
  
  g.update();
  
  if (g.steps >= steps_limit && r < 1000) {
    r *= 1.01;
  }
  else if (r >= 990) {
    r = 0;
  }
  g.explode(r);

}


// function MousePressed() {
//   var d = dist(mouseX, mouseY)
// }


function mouseClicked() {
  g.checkClick();
}



function grid(shape) {
  this.vertexes = [];
  this.edges = [];
  this.players = [];
  this.bomb = bomb_init;
  this.newbomb = bomb_init;
  this.steps = 0;

  
  
  this.createShape = function(shape) {
    if (shape === 4) {
      for (var i = 0; i < int(width/scl) - 3; i++) {
        for (var j = 0; j < int(height/scl) - 3; j++) {
          this.vertexes.push(createVector((i + 2) * scl, 
                                          (j + 2) * scl));
          
        }
      }
      
      for (var v1 = 0; v1 < this.vertexes.length; v1++) {
        var arr = [];
        for (var v2 = 0; v2 < this.vertexes.length; v2++) {
          if (v1 != v2) {
            var d = dist(this.vertexes[v1].x, 
                         this.vertexes[v1].y, 
                         this.vertexes[v2].x, 
                         this.vertexes[v2].y);
            
            if (d <= scl) {
              arr.push(v2) 
            } 
          }
        }
        this.edges[v1] = arr;
      }
      this.players = [0, 4, 20, 24];
    }
    
    
    if (shape == 3) {
      var gap = 0;
      for (var y = int(height/scl) - 2; y > 0; y--) {
        
        for (var x = gap;
             x < int(width/scl) - 3 - gap;
             x++) {
          this.vertexes.push(createVector((x + 2) * scl, 
                                          (y + 0) * scl))
        }
        gap += 0.5;
    }
      for (var v11 = 0; v11 < this.vertexes.length; v11++) {
        var array = [];
        for (var v22 = 0; v22 < this.vertexes.length; v22++) {
          if (v11 != v22) {
            var dd = dist(this.vertexes[v11].x, 
                         this.vertexes[v11].y, 
                         this.vertexes[v22].x, 
                         this.vertexes[v22].y);
            
            if (dd <= 1.5*scl) {
              array.push(v22) 
            } 
          }
        }
        this.edges[v11] = array;
      }
      this.players = [0, 4, 14];
  }
    
    if (shape == 2) {
      for (var x2 = 0; x2 < int(width/scl) - 3; x2++) {
          this.vertexes.push(createVector((x2 + 2) * scl, 
                                          height/2));
      }
      for (var n1 = 0; n1 < this.vertexes.length; n1++) {
        var nodes = [];
        for (var n2 = 0; n2 < this.vertexes.length; n2++) {
          if (n1 != n2) {
            var ddd = dist(this.vertexes[n1].x, 
                         this.vertexes[n1].y, 
                         this.vertexes[n2].x, 
                         this.vertexes[n2].y);
            
            if (ddd <= 1*scl) {
              nodes.push(n2) 
            } 
          }
        }
        this.edges[n1] = nodes;
      }
      this.players = [0, 4]
    }
  
  
  this.drawGrid = function() {

    for (var n = 0; n < this.vertexes.length; n++) {
      
      // draw nodes
      fill(255);
      circle(this.vertexes[n].x, 
             this.vertexes[n].y, 
             scl/2);
      
      // draw edges
      for (var e = 0; e < this.edges[n].length; e++) {
        stroke(255);
        strokeWeight(5);
        line(this.vertexes[n].x, 
             this.vertexes[n].y, 
            this.vertexes[this.edges[n][e]].x, 
             this.vertexes[this.edges[n][e]].y)
      }
    }
    // draw players
    var c = 255;
    for (var p = 0; p < this.players.length; p++) {
      c = player_color[p];
      fill(c);
      circle(this.vertexes[this.players[p]].x, 
             this.vertexes[this.players[p]].y, 
             scl/2);
    }
    
    // draw bomb
    fill(0);
    noStroke();
    circle(this.vertexes[this.bomb].x, 
          this.vertexes[this.bomb].y, 
             scl/1.5)
  }
  
  
  this.flashNeighbors = function(variation) {
    for (var e = 0; e < this.edges[this.bomb].length; e++) {
      fill('black');
      circle(this.vertexes[this.edges[this.bomb][e]].x,
            this.vertexes[this.edges[this.bomb][e]].y,
            scl/variation)
    }
  }
  
  
  this.checkClick = function () {
    // check the distance, return the the vertexes number
    // if the condition is satisfied update the bomb position
    var min_distance = 20;
    var index = 0;
    for (var e = 0; e < this.edges[this.bomb].length; e++) {
      let distance = dist(this.vertexes[this.edges[this.bomb][e]].x,
                         this.vertexes[this.edges[this.bomb][e]].y,
                         mouseX,
                         mouseY)
      if (distance < min_distance) {
        min_distance = distance;
        index = this.edges[this.bomb][e];
      }
    }
    if (min_distance <= 15) {
      this.newbomb = index;
    }
  }

  
  this.update = function() {
    // update the position of the bomb
    if (this.bomb != this.newbomb) {
      this.bomb = this.newbomb;
      this.steps += 1;
      print(this.steps)
    }
  }
  
  
  this.explode = function(r) {
    // explode the bomb after the maximum steps
    // the palyers closer to the bomb loses
    // display text on who wins who loses
    if (this.steps >= steps_limit) {
      fill("yellow");
      circle(this.vertexes[this.bomb].x,
            this.vertexes[this.bomb].y,
            r);
      fill("orange");
      circle(this.vertexes[this.bomb].x,
            this.vertexes[this.bomb].y,
            r-20);
      print("Explosion is art!")
    }
  }
  
}
}

