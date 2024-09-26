function setup() {
  createCanvas(640, 480);
  background('black');
  noStroke(); 
  fill(255, 0, 127); // Warna pink
  
  let numLines = 19; 
  let gap = 3; 
  let lineWidths = [];

  // Mengatur lebar garis berbeda untuk pola yang sesuai dengan gambar
  for (let i = 0; i < numLines; i++) {
    if (i < 6) {
      // Lebar garis 6 dari kiri
      lineWidths[i] = 2 + i * 2; // Semakin tebal ke tengah
    } else if (i >= numLines - 6) {
      // Lebar garis 6 dari kanan
      lineWidths[i] = 2 + (numLines - 1 - i) * 2; // Semakin tebal ke tengah
    } else {
      // Lebar garis bagian tengah
      lineWidths[i] = 14; // Lebar konstan di tengah
    }
  }
  
  // Total lebar semua garis dan gap
  let totalWidth = lineWidths.reduce((acc, w) => acc + w, 0) + (numLines - 1) * gap;
  let startX = (width - totalWidth) / 2;
  
  let centerHeights = [100, 150, 120, 180, 120, 150, 100];
  
  let x = startX;

  for (let i = 0; i < numLines; i++) {
    let lineWidth = lineWidths[i];
    let lineHeight;
    
    // Atur tinggi yang sama untuk 6 garis dari kiri
    if (i < 6) {
      lineHeight = 80; 
    }
    // Atur tinggi yang sama untuk 6 garis dari kanan
    else if (i >= numLines - 6) {
      lineHeight = 80; 
    } 
    // Atur tinggi yang memiliki pola selisih pada 7 garis tengah
    else {
      lineHeight = centerHeights[i - 6]; 
    }
    
    let y = height / 2 - lineHeight / 2; 
    
    rect(x, y, lineWidth, lineHeight); 
    
    // Pindahkan x untuk garis berikutnya
    x += lineWidth + gap;
  }

  // Tambahkan teks di bagian tengah bawah
  textAlign(CENTER, TOP); // Pusatkan teks secara horizontal dan di atasnya
  textSize(32); // Ukuran teks
  textFont('Georgia'); // Menggunakan font yang lebih bagus
  fill(255, 0, 127); // Warna yang sama dengan garis
  text('Erwan', width / 2, height - 130); // Teks berada di tengah bawah layar, sedikit di atas batas bawah
}
