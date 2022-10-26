export interface Montre {
    bracelet?: string;
    cadrant?: string;
    ecran?: string;
}

export const colors = {
    "#000000": "Noir",
    "#FFFFFF": "Blanc",
    "#0C4E1E": "Vert",
    "#A66C16": "Rouge",
    "#0000FF": "Bleu",
    "#FF9C00": "Orange",
    "#D11FEE": "Rose",
    "#D9D9D9": "Gris",

};

export const materiaux = [
    {
        value: "32a1de4b-46c8-4ef6-91eb-640a623a5226",
        img: "https://www.maceinturecuir.com/blog/wp-content/uploads/2019/07/cuir-naturel.jpg",
        label: "cuir",
    },
    {
        value: "b8e44964-7fe1-4ca7-8274-c84afc2302e2",
        img: "https://www.mondialtissus.fr/media/catalog/product/cache/5a7b68a13efa2fc32f1f88cc4632d82f/0/1/0120f5f98fa48cc7db66da3962126c7783d57701_225993.jpg",
        label: "tissu",
    },
    {
        value: "7e8d16ac-db0a-4594-8f78-f313e029158d",
        img: "https://www.usinenouvelle.com/expo/img/feuille-caoutchouc-sbr-noir-013013680-product_zoom.jpg",
        label: "caoutchouc",
    },
];