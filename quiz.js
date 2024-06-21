// Array pertanyaan quiz
const questions = [
  {
    pertanyaan: "Apa yang dimaksud dengan penjadwalan?",
    pilihan: {
      a: "Mengatur waktu untuk berbagai kegiatan",
      b: "Membuang waktu dengan asal-asalan",
      c: "Tidur sepanjang hari",
    },
    jawabanBenar: "a",
  },
  {
    pertanyaan: "Mengapa penting melakukan penjadwalan?",
    pilihan: {
      a: "Agar semua orang tahu kita sibuk",
      b: "Membantu mengatur waktu untuk kegiatan dengan efisien",
      c: "Kita bisa tidur lebih lama",
    },
    jawabanBenar: "b",
  },
  {
    pertanyaan: "Berapakah waktu ideal untuk belajar musik setiap hari?",
    pilihan: {
      a: "15 menit",
      b: "1 jam",
      c: "3 jam",
    },
    jawabanBenar: "b",
  },
  {
    pertanyaan: "Bagaimana cara membagi waktu antara belajar dan bermain?",
    pilihan: {
      a: "Bermain sepanjang hari, belajar hanya 5 menit",
      b: "Belajar lebih banyak daripada bermain",
      c: "Bergantian antara belajar dan bermain",
    },
    jawabanBenar: "c",
  },
  {
    pertanyaan: "Mengapa kita perlu mengerjakan PR setelah sekolah?",
    pilihan: {
      a: "Agar mendapatkan nilai bagus",
      b: "Agar waktu luang dimanfaatkan dengan baik",
      c: "PR tidak penting",
    },
    jawabanBenar: "b",
  },
];

// Menampilkan pertanyaan awal
let currentQuestion = 0;
let totalScore = 0; // Untuk menyimpan nilai total

showQuestion(currentQuestion);

// Fungsi untuk menampilkan pertanyaan
function showQuestion(index) {
  const quizSection = document.getElementById("quiz");
  quizSection.innerHTML = `
    <h2>Pertanyaan ${index + 1}</h2>
    <p>${questions[index].pertanyaan}</p>
    <form action="#">
        <input type="radio" name="jawaban" id="j${index}a" value="a">
        <label for="j${index}a">${questions[index].pilihan.a}</label><br>
        <input type="radio" name="jawaban" id="j${index}b" value="b">
        <label for="j${index}b">${questions[index].pilihan.b}</label><br>
        <input type="radio" name="jawaban" id="j${index}c" value="c">
        <label for="j${index}c">${questions[index].pilihan.c}</label><br>
    </form>
    <button id="nextBtn">Next</button>
  `;

  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", function () {
    const jawaban = document.querySelector('input[name="jawaban"]:checked');
    if (jawaban) {
      const jawabanValue = jawaban.value;
      if (jawabanValue === questions[index].jawabanBenar) {
        alert("Jawaban Anda benar!");
        totalScore += 20; // Tambahkan 20% untuk setiap jawaban benar
      } else {
        alert("Jawaban Anda salah. Coba lagi!");
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
      } else {
        // Jika sudah selesai, tampilkan nilai total
        quizSection.innerHTML = `
          <h2>Quiz Selesai!</h2>
          <p>Nilai Anda: ${totalScore}</p>
          <p>Terima kasih sudah berpartisipasi.</p>
        `;
      }
    } else {
      alert("Pilih salah satu jawaban terlebih dahulu.");
    }
  });
}
