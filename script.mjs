import Docxtemplater from "docxtemplater";
import fs from "fs";
import PizZip from "pizzip";
import expressionParser from "docxtemplater/expressions.js";

const template = fs.readFileSync("template.docx");
const zip = new PizZip(template);
const doc = new Docxtemplater(zip, {
  parser: expressionParser,
});

doc.render({
  //простые данные
  name: "John",
  birth_date: "13.10.2026",

  //массив
  array: ["элемент1", "элемент2", "элемент3"],

  //массив items
  myItem: [
    { name: "Windows", price: 100 },
    { name: "Mac OSX", price: 200 },
  ],

  //вложенные данные
  user: { firstName: "Макс", address: { city: "Донецк" } },

  //с условием
  cat: "Кот",
  hasCat: true,

  //
});

const buffer = doc.toBuffer();

fs.writeFileSync("report.docx", buffer);
