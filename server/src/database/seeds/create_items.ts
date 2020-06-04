import Knex from "knex"

export async function seed(knex: Knex){
    await knex("items").insert([
        { title: "Lampadas", image: "lampadas.svg" },
        { title: "Pilhas e baterias", image: "baterias.svg"},
        { title: "Papeis e Papelão", image: "papies-papelao.svg"},
        { title: "Resíduos Eletrônicos", image: "eletronicos.svg"},
        { title: "Resíduos Organicos", image: "organicos.svg"},
        { title: "Óleo de cozinha", image: "oleo.svg"},
    ])
}