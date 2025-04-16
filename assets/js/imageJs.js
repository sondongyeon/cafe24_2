const products = [
    {
        image: "../../images/사진1.png",
        category: "COSMATIC",
        name: "포에버 스킨 파운데이션 No.2",
        volume: "150ml",
        price: "62,000원",
        original: "86,000원",
        description: [
            "페이지에서 제공하는 신제품 소개문구",
            "브랜드 아이덴티티 컨셉에 최적화된",
            "고급스러운 구성을 만나보세요"
        ]
    },
    {
        image: "../../images/사진2.png",
        category: "COSMATIC",
        name: "포에버 스킨 파운데이션 No.2",
        volume: "150ml",
        price: "62,000원",
        original: "86,000원",
        description: [
            "페이지에서 제공하는 신제품 소개문구",
            "브랜드 아이덴티티 컨셉에 최적화된",
            "고급스러운 구성을 만나보세요"
        ]
    },
    {
        image: "../../images/사진3.png",
        category: "COSMATIC",
        name: "포에버 스킨 파운데이션 No.2",
        volume: "150ml",
        price: "62,000원",
        original: "86,000원",
        description: [
            "페이지에서 제공하는 신제품 소개문구",
            "브랜드 아이덴티티 컨셉에 최적화된",
            "고급스러운 구성을 만나보세요"
        ]
    }
];

const container = document.getElementById("productContainer");

products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    // description li list로 변환
    const descList = p.description.map(line => `<li>${line}</li>`).join("");

    card.innerHTML = `
<div class="product-image">
<img src="${p.image}" alt="${p.name}">
</div>
<div class="product-info">
<div class="category">${p.category}</div>
<div class="name">${p.name}</div>
<div class="meta-row">
<div class="volume">${p.volume}</div>
<div class="price">
  <span class="original">${p.original}</span>
  <span class="sale">${p.price}</span>
</div>
</div>
<div class="divider"></div> <!-- 🔥 여기에 구분선 추가 -->
<ul class="desc-list">${descList}</ul>
</div>
`;

    container.appendChild(card);
});