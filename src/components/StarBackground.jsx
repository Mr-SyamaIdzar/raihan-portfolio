import React, { useState } from "react";
import { useEffect } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    // Ubah nilai pembagi agar jumlah bintang berubah
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let index = 0; index < numberOfStars; index++) {
      newStars.push({
        id: index,
        /* Math.random() menghasilkan angka acak dari 0 sampai <1
        Dikalikan 3 → hasilnya antara 0 sampai <3
        Ditambah 1 → hasil akhir antara 1 sampai <4
        Artinya: ukuran bintang akan berkisar antara 1px hingga 4px */
        size: Math.random() * 3 + 1,
        /* Posisi horizontal / vertikal acak antara 0% hingga <100%
        Artinya: bintang bisa muncul di posisi mana saja secara horizontal / vertikal di layar */
        x: Math.random() * 100,
        y: Math.random() * 100,
        /* Math.random() * 0.5 → hasilnya 0 hingga <0.5
        Ditambah 0.5 → hasil akhir antara 0.5 hingga <1
        Artinya: bintang tidak akan terlalu transparan (minimum 50% opacity), terlihat tapi bervariasi */
        opacity: Math.random() * 0.5 + 0.5,
        /* Math.random() * 4 → 0 hingga <4
        Ditambah 2 → hasil akhir antara 2 hingga <6
        Artinya: durasi animasi bintang (berdenyut) akan berlangsung antara 2 hingga 6 detik, bervariasi untuk memberi efek alami */
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];

    for (let index = 0; index < numberOfMeteors; index++) {
      newMeteors.push({
        id: index,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pluse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        ></div>
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: meteor.delay,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
