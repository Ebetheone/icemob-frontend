import React from "react";
import InformationList from "./InformationList";
const infData = [
  {
    id: 1,
    img: "/assets/images/image12.jpg",
    title: "SASH | “20Z0” | PRE-ORDER ",
    desc: " Рэппэр SASH -ийн “20Z0” 9 дуунаас бүрдсэн 10 инч Limited Саарал өнгөтэй пянзны урьдчилсан захиалга авч байна. Пянзны тоо хязгаартай тул та бүхэн амжиж захиалаарай. EARLY BIRD 〰️ 110.000₮ 15% OFF ",
    date: "2022.06.01",
  },
  {
    id: 2,
    img: "/assets/images/image3.png",
    title: "“ПЯНЗ ТОЛГОЙТНУУД” пянзны өдөрлөг ",
    desc: " Пянзны хямдрал ~ 11% - 22% Пянз тоглуулагч хямдрал ~ 11% Special Guest: Bodikhuu (20:00 цагаас)⏰ Зөвхөн энэ өдөр манай дэлгүүр 11:00-22:00 цаг хүртэл ажиллана ",
    date: "2022.11.07",
  },
  {
    id: 3,
    img: "/assets/images/image14.jpg",
    title: "SASH | “20Z0” | PRE-ORDER ",
    desc: " Рэппэр SASH -ийн “20Z0” 9 дуунаас бүрдсэн 10 инч Limited Саарал өнгөтэй пянзны урьдчилсан захиалга авч байна. Пянзны тоо хязгаартай тул та бүхэн амжиж захиалаарай. EARLY BIRD 〰️ 110.000₮ 15% OFF ",
    date: "2022.06.01",
  },
  {
    id: 4,
    img: "/assets/images/image10.jpg",
    title: "SASH | “20Z0” | PRE-ORDER ",
    desc: " Рэппэр SASH -ийн “20Z0” 9 дуунаас бүрдсэн 10 инч Limited Саарал өнгөтэй пянзны урьдчилсан захиалга авч байна. Пянзны тоо хязгаартай тул та бүхэн амжиж захиалаарай. EARLY BIRD 〰️ 110.000₮ 15% OFF ",
    date: "2022.06.01",
  },
];

export default function InformationScene() {
  return (
    <div className="information bg-grey">
      {infData.map((item, key) => (
        <InformationList key={key} data={item} id={key} />
      ))}
    </div>
  );
}
