/* ============================================================
   WORKS — the archive loaded into the machine.

   Order is Akif's, not by play count. The OPRAPTI short film sits LAST;
   everything before it is a reel.

   `vid`      a 6s muted loop shown on the PSP screen, trimmed from 0.5s so no
              clip opens on black. Fetched only when its slot is selected, so
              first paint never waits on video — `img` is the poster and it is
              pulled from the clip itself, so the still and the motion match.
   `vertical` read off the actual file, never guessed.
   ============================================================ */
window.SK_WORKS = [
  {
    id: 'DWZaZOlkxNI',
    title: 'OPRAPTI',
    sub: 'In honour of the premiere',
    kind: 'REEL',
    year: '2026',
    meta: 'REEL · 365K PLAYS · INSTAGRAM',
    img: 'js/c8b133057577291b9e0261b8dad36eca.jpg',
    vid: 'js/VID_20260605_151420.mp4',
    vertical: false,
    featured: true
  },
  {
    id: 'DWx_-r9ESDo',
    title: 'OPRAPTI Is Live',
    sub: 'Now streaming on YouTube',
    kind: 'REEL',
    year: '2026',
    meta: 'REEL · 50K PLAYS · INSTAGRAM',
    img: 'js/Screenshot_2026-08-20-05-20-55-83_1c337646f29875672b5a61192b9010f9.jpg',
    vid: 'js/VID_20260622_201222.mp4',
    vertical: false
  },
  {
    id: 'DLFf20JTonw',
    title: 'The Dark Beckons',
    sub: 'Will you answer?',
    kind: 'REEL',
    year: '2025',
    meta: 'REEL · 33K PLAYS · INSTAGRAM',
    img: 'js/Screenshot_2026-08-20-05-44-45-13_8b1cfbb769bd52fc36fa25a4fcc64305.jpg',
    vid: 'js/VID_20260616_235055.mp4',
    vertical: false
  }
];
