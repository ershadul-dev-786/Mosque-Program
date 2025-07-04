
const jamaatTimes = {
  Fajr: "৫:০০ AM",
  Dhuhr: "১:১৫ PM",
  Asr: "৫:১৫ PM",
  Maghrib: "সাথে সাথে",
  Isha: "৮:৩০ PM",
  Jumah: "১:৩০ PM"
};

fetch("https://api.aladhan.com/v1/timingsByCity?city=Bogra&country=Bangladesh&method=2")
  .then(response => response.json())
  .then(data => {
    const times = data.data.timings;
    document.getElementById("prayer-times").innerHTML = `
      <tr><td>ফজর</td><td>${times.Fajr}</td><td>${jamaatTimes.Fajr}</td></tr>
      <tr><td>যোহর</td><td>${times.Dhuhr}</td><td>${jamaatTimes.Dhuhr}</td></tr>
      <tr><td>আসর</td><td>${times.Asr}</td><td>${jamaatTimes.Asr}</td></tr>
      <tr><td>মাগরিব</td><td>${times.Maghrib}</td><td>${jamaatTimes.Maghrib}</td></tr>
      <tr><td>এশা</td><td>${times.Isha}</td><td>${jamaatTimes.Isha}</td></tr>
      <tr><td>জুমা</td><td>—</td><td>${jamaatTimes.Jumah}</td></tr>
    `;
  })
  .catch(error => {
    document.getElementById("prayer-times").innerHTML =
      "<tr><td colspan='3'>নামাজের সময় লোড করা যাচ্ছে না।</td></tr>";
    console.error("Error fetching prayer times:", error);
  });
