// Global variable explosion!!!!
// TODO: optimize drawing loop -- don't need to redraw every frame

// Set triangle side
int triSide = 50;
float triHeight = triSide * cos(PI / 6);

// Set window size
int windowWidth = 800;
int windowHeight = 600;

// Approximate # of triangles for grid
int gridWidth = (int) (windowWidth / triHeight) + 1;
int gridHeight = (int) (windowHeight / triSide * 2) + 1;

// Get some colors
color[] palette = {color(255, 255, 255), 
                   color(252, 141, 89), 
                   color(255, 255, 191), 
                   color(145, 191, 219)};
                    
int[] colors = new int[gridWidth * gridHeight];

void setup() { size(800, 600); stroke(220); }

void draw() { drawGrid(); }

void drawGrid() {
  for(int i = 0; i < gridHeight; i++) {
    pushMatrix(); 
      pushStyle();
        for(int j = 0; j < gridWidth; j += 1) {
          fill(palette[colors[i * gridWidth + j]]);
          if((i + j) % 2 == 0) left(); else right();
          translate(triHeight, 0);
        }
      popStyle(); 
    popMatrix();
    translate(0, triSide / 2);
  }
}

void mouseClicked() {
  float x = mouseX / cos(PI / 6);
  float y = mouseY + mouseX * tan(PI / 6);
  
  int j = (int) (x / triSide);
  int i = (int) (y / triSide) * 2 + (x % triSide > y % triSide ? 0 : 1) - j;
  
  colors[i * gridWidth + j] = (colors[i * gridWidth + j] + 1) % palette.length;
}

void right() { triangle(0, -triSide / 2, triHeight, 0, 0, triSide / 2); }
void left() { triangle(0, 0, triHeight, -triSide / 2, triHeight, triSide / 2); }
