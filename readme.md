Wikipedia E2E test Cypressi abil
See repositoorium sisaldab end-to-end (E2E) testi Wikipedia veebisaidi jaoks, kasutades Cypressi testimisraamistikku. Selle testi eesmärk on tagada, et Wikipedia otsingufunktsionaalsus toimib korrektselt. Test külastab Wikipedia otsingutulemuste lehte konkreetse mõiste jaoks, klõpsab otsingutulemusel ning kontrollib saadud lehe sisu.

Testi sammud
Külasta Wikipedia otsingutulemuste lehte mõiste "maa" jaoks.
Klõpsa otsingutulemusel, mis on seotud "maaga".
Kontrolli, et leht sisaldab teavet seotud "maaga".
Kuidas testi käivitada
Klooni see repositoorium oma arvutisse:

git clone https://github.com/partelsandra/cypresstest

Liigu projekti kausta:
cd teie-repo

Paigalda projekti sõltuvused:
npm install

Käivita Cypressi test:
npx cypress open

See avab Cypressi testirakenduse. Kliki wikipedia_tests_spec.js failil, et käivitada test.

Teadaolevad probleemid ja lahendused
Probleem: Elemendi nähtavus
Probleem: Test võib ebaõnnestuda mõnede elementide nähtavuse tõttu.

Lahendus: Kasuta {force: true} ettevaatlikult, et klõpsata ka siis, kui element pole nähtav. Kaalu testi kohandamist või oota dünaamilist laadimist käsitlemiseks.

Probleem: Elemendi tuvastamine
Probleem: Test võib ebaõnnestuda, kui elemendi tuvastamine pole täpne.

Lahendus: Vaata lehe struktuuri ja värskenda test vastavalt. Veendu, et elemendid oleksid täpselt tuvastatud, et vältida ebaõnnestumisi.